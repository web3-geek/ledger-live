import { useCallback, useMemo, useState } from "react";
import { Linking, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "@ledgerhq/live-common/lib/notifications/ToastProvider";
import { useNavigation } from "@react-navigation/native";
import { add, isBefore, parseISO } from "date-fns";
import type { Account } from "@ledgerhq/live-common/lib/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";
import useFeature from "@ledgerhq/live-common/lib/featureFlags/useFeature";
import { accountsSelector } from "../reducers/accounts";
import {
  notificationsModalOpenSelector,
  notificationsModalTypeSelector,
  notificationsCurrentRouteNameSelector,
  notificationsEventTriggeredSelector,
  notificationsDataOfUserSelector,
} from "../reducers/notifications";
import {
  setNotificationsModalOpen,
  setNotificationsModalType,
  setNotificationsCurrentRouteName,
  setNotificationsEventTriggered,
  setNotificationsDataOfUser,
} from "../actions/notifications";
import { languageSelector } from "../reducers/settings";
import { notificationsSelector } from "../reducers/settings";
import { ScreenName, NavigatorName } from "../const";

export type EventTrigger = {
    /** Name of the route that will trigger the push notification modal */
    route_name: string,
    /** In milliseconds, delay before triggering the push notification modal */
    timer: number,
    /** Whether the push notification modal is triggered when entering or when leaving the screen */
    type: "on_enter" | "on_leave",
};

export type DataOfUser = {
    /** Date of the first time the user oppened the app */
    appFirstStartDate?: Date,
    /** Number of times the user oppened the application */
    numberOfAppStarts?: number,
    /** If set, we will not prompt the push notification modal again before this date unless the user triggers it manually from the settings */
    dateOfNextAllowedRequest?: Date,
    /** Whether or not the user clicked on the "Maybe later" cta */
    alreadyDelayedToLater?: boolean,
    /** If true, we will not prompt the push notification modal again unless the user triggers it manually from the settings */
    doNotAskAgain?: boolean,
};

const pushNotificationsDataOfUserAsyncStorageKey = "pushNotificationsDataOfUser";

const getCurrentRouteName = (
    state: NavigationState | Required<NavigationState["routes"][0]>["state"],
  ): Routes | undefined => {
    if (state.index === undefined || state.index < 0) {
      return undefined;
    }
    const nestedState = state.routes[state.index].state;
    if (nestedState !== undefined) {
      return getCurrentRouteName(nestedState);
    }
    return state.routes[state.index].name;
};
  
async function getPushNotificationsDataOfUserFromStorage() {
    const dataOfUser = await AsyncStorage.getItem(
      pushNotificationsDataOfUserAsyncStorageKey,
    );
  
    return JSON.parse(dataOfUser);
}
  
async function setPushNotificationsDataOfUserInStorage(dataOfUser) {
    await AsyncStorage.setItem(
        pushNotificationsDataOfUserAsyncStorageKey,
      JSON.stringify(dataOfUser),
    );
}
  
  
const useNotifications = () => {
    const pushNotificationsFeature = useFeature("pushNotifications");
    const { pushToast } = useToasts();
    const notificationsSettings = useSelector(notificationsSelector);

    const [notificationsToken, setNotificationsToken] = useState();
    const isPushNotificationsModalOpen = useSelector(notificationsModalOpenSelector);
    const pushNotificationsModalType = useSelector(notificationsModalTypeSelector);
    const pushNotificationsOldRoute = useSelector(notificationsCurrentRouteNameSelector);
    const pushNotificationsEventTriggered = useSelector(notificationsEventTriggeredSelector);
    const pushNotificationsDataOfUser = useSelector(notificationsDataOfUserSelector);
    const accounts: Account[] = useSelector(accountsSelector);
    const currAppLanguage = useSelector(languageSelector);

    const accountsWithAmountCount = useMemo(() => accounts.filter(account => account.balance?.gt(0)).length, [accounts]);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const getIsNotifEnabled = async () => {
        console.log("--- HAS PERM ---");
        const authStatus = await messaging().hasPermission();
        console.log("AUTH STATUS :", authStatus);
        console.log("AUTHORIZED :", messaging.AuthorizationStatus.AUTHORIZED);
        console.log("PROVISIONAL :", messaging.AuthorizationStatus.PROVISIONAL);
        
        return authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    };

    const listenForNotifications = useCallback(async () => {
        console.log("LISTEN");
        if (!notificationsToken) {
            const token = await messaging().getToken();
            setNotificationsToken(token);
            messaging().onMessage(async remoteMessage => {
                console.log("NOTIF FOREGROUND", remoteMessage);
                if (remoteMessage && remoteMessage.notification) {
                    console.log("ID :", remoteMessage.messageId);
                    pushToast({
                        id: remoteMessage.messageId,
                        title: remoteMessage.notification.title,
                        text: remoteMessage.notification.body,
                        icon: "info",
                    });
                }
            });
            messaging().setBackgroundMessageHandler(async remoteMessage => {
                console.log("NOTIF BACKGROUND", JSON.stringify(remoteMessage));
            });
        }
    }, [notificationsToken]);

    const clearNotificationsListeners = useCallback(() => {
        console.log("CLEAR");
        if (notificationsToken) {
            messaging().deleteToken(notificationsToken);
            setNotificationsToken(undefined);
        }
    }, [notificationsToken]);

    const handlePushNotificationsPermission = useCallback(async () => {
        if (Platform.OS === "android") {
            Linking.openSettings();
        }
        messaging().requestPermission();
    }, []);

    const setPushNotificationsModalOpenCallback = useCallback(
        isModalOpen => {
          if (!isModalOpen) {
            dispatch(setNotificationsModalType("generic"));
            dispatch(setNotificationsModalOpen(isModalOpen));
          } else {
            getIsNotifEnabled().then(isNotifEnabled => {
                console.log("OPEN MODAL", isNotifEnabled, notificationsSettings.allowed);
                if (!isNotifEnabled || !notificationsSettings.allowed) {
                    dispatch(setNotificationsModalOpen(isModalOpen)); 
                }
            });
          }
        },
        [dispatch, setNotificationsModalType, setNotificationsModalOpen, getIsNotifEnabled, notificationsSettings.allowed],
    );
    
    const areConditionsMet = useCallback(() => {
        if (!pushNotificationsDataOfUser) return false;
    
        // criterias depending on last answer to the push notifications modal
        if (pushNotificationsDataOfUser.doNotAskAgain) return false;
    
        if (
            pushNotificationsDataOfUser.dateOfNextAllowedRequest &&
          isBefore(
            Date.now(),
            typeof pushNotificationsDataOfUser.dateOfNextAllowedRequest === "string"
              ? parseISO(pushNotificationsDataOfUser.dateOfNextAllowedRequest)
              : pushNotificationsDataOfUser.dateOfNextAllowedRequest,
          )
        ) {
          return false;
        }
    
        // minimum accounts number criteria
        const minimumAccountsNumber: number =
          pushNotificationsFeature?.params?.conditions?.minimum_accounts_with_funds_number;
        if (minimumAccountsNumber && accountsWithAmountCount < minimumAccountsNumber) {
          return false;
        }
    
        // minimum app start number criteria
        const minimumAppStartsNumber: number =
        pushNotificationsFeature?.params?.conditions?.minimum_app_starts_number;
        if (pushNotificationsDataOfUser.numberOfAppStarts < minimumAppStartsNumber) {
          return false;
        }
    
        // duration since first app start long enough criteria
        const minimumDurationSinceAppFirstStart: Duration =
        pushNotificationsFeature?.params?.conditions?.minimum_duration_since_app_first_start;
        const dateAllowedAfterAppFirstStart = add(
            pushNotificationsDataOfUser?.appFirstStartDate,
          minimumDurationSinceAppFirstStart,
        );
        if (
            pushNotificationsDataOfUser?.appFirstStartDate &&
          isBefore(Date.now(), dateAllowedAfterAppFirstStart)
        ) {
          return false;
        }
    
        return true;
      }, [
        currAppLanguage,
        pushNotificationsDataOfUser,
        accountsWithAmountCount,
        pushNotificationsFeature?.params?.conditions?.minimum_accounts_number,
        pushNotificationsFeature?.params?.conditions?.minimum_app_starts_number,
      ]);
    
    const isEventTriggered = useCallback(
        (eventTrigger: EventTrigger, newRoute?: string) =>
          (eventTrigger.type === "on_enter" &&
            eventTrigger.route_name === newRoute) ||
          (eventTrigger.type === "on_leave" &&
            eventTrigger.route_name === pushNotificationsOldRoute),
        [pushNotificationsOldRoute],
    );
    
    const onRouteChange = useCallback(
        newRoute => {
          if (pushNotificationsEventTriggered?.timeout) {
            clearTimeout(pushNotificationsEventTriggered?.timeout);
          }
    
          console.log("ON ROUTE CHANGE",JSON.stringify(pushNotificationsDataOfUser, null, 2));
          if (!areConditionsMet()) return;
          console.log("CONDITIONS MET");

          for (const eventTrigger of pushNotificationsFeature?.params?.trigger_events) {
            if (isEventTriggered(eventTrigger, newRoute)) {
              const timeout = setTimeout(() => {
                setPushNotificationsModalOpenCallback(true);
              }, eventTrigger.timer);
              dispatch(
                setNotificationsEventTriggered({
                  ...eventTrigger,
                  timeout,
                }),
              );
            }
          }
          dispatch(setNotificationsCurrentRouteName(newRoute));
        },
        [
          areConditionsMet,
          pushNotificationsEventTriggered?.timeout,
          dispatch,
          pushNotificationsFeature?.params?.trigger_events,
          isEventTriggered,
          setPushNotificationsModalOpenCallback,
        ],
    );

    const updatePushNotificationsDataOfUserInStateAndStore = useCallback(dataOfUserUpdated => {
        dispatch(setNotificationsDataOfUser(dataOfUserUpdated));
        setPushNotificationsDataOfUserInStorage(dataOfUserUpdated);
    }, [dispatch]);
    
    const initPushNotifications = useCallback(() => {
        if (!pushNotificationsFeature?.enabled) return;
    
        navigation.addListener("state", e => {
          const navState = e?.data?.state;
          if (navState && navState.routeNames) {
            const currentRouteName = getCurrentRouteName(navState);
            onRouteChange(currentRouteName);
          }
        });
    }, [navigation, pushNotificationsFeature?.enabled, onRouteChange]);
    
    const initPushNotificationsData = useCallback(() => {
        getPushNotificationsDataOfUserFromStorage().then(dataOfUser => {
          updatePushNotificationsDataOfUserInStateAndStore({
            ...dataOfUser,
            appFirstStartDate: dataOfUser?.appFirstStartDate || Date.now(),
            numberOfAppStarts: (dataOfUser?.numberOfAppStarts ?? 0) + 1,
          });
        });
    }, []);
    
    const cleanPushNotifications = useCallback(() => {
        navigation.removeListener("state");
    }, [navigation]);
    
    const triggerMarketPushNotificationModal = useCallback(() => {
        if (pushNotificationsDataOfUser?.doNotAskAgain) return;
        const marketCoinStarredParams = pushNotificationsFeature?.params?.marketCoinStarred;
        if (marketCoinStarredParams?.enabled) {
            const timeout = setTimeout(() => {
                dispatch(setNotificationsModalType("market"));
                setPushNotificationsModalOpenCallback(true);
            }, marketCoinStarredParams?.timer);
            dispatch(
                setNotificationsEventTriggered({
                  route_name: "MarketDetail",
                  timer: marketCoinStarredParams?.timer,
                  timeout,
                }),
            );
        }
    }, [pushNotificationsDataOfUser?.doNotAskAgain]);

    const triggerJustFinishedOnboardingNewDevicePushNotificationModal = useCallback(() => {
        const justFinishedOnboardingParams = pushNotificationsFeature?.params?.justFinishedOnboarding;
        if (justFinishedOnboardingParams?.enabled) {
            const timeout = setTimeout(() => {
                setPushNotificationsModalOpenCallback(true);
            }, justFinishedOnboardingParams?.timer);
            dispatch(
                setNotificationsEventTriggered({
                  route_name: "Portfolio",
                  timer: justFinishedOnboardingParams?.timer,
                  timeout,
                }),
            );
        }
    }, []);

    const handleSetDateOfNextAllowedRequest = useCallback((delay, additionalParams) => {
        if (delay !== null && delay !== undefined) {
          const dateOfNextAllowedRequest: Date = add(
            Date.now(),
            delay
          );
          updatePushNotificationsDataOfUserInStateAndStore({
            ...pushNotificationsDataOfUser,
            dateOfNextAllowedRequest,
            ...additionalParams,
          });
        }
      }, [pushNotificationsDataOfUser, updatePushNotificationsDataOfUserInStateAndStore]);
    
    const modalAllowNotifications = useCallback(() => {
        setPushNotificationsModalOpenCallback(false);
        navigation.navigate(NavigatorName.Settings, {
            screen: ScreenName.NotificationsSettings
        });
        if (pushNotificationsFeature?.params?.conditions?.default_delay_between_two_prompts) {
            handleSetDateOfNextAllowedRequest(pushNotificationsFeature?.params?.conditions?.default_delay_between_two_prompts);
        }
    }, []);

    const modalDelayLater = useCallback(() => {
        setPushNotificationsModalOpenCallback(false);
        if (pushNotificationsDataOfUser?.alreadyDelayedToLater) {
            updatePushNotificationsDataOfUserInStateAndStore({
                ...pushNotificationsDataOfUser,
                doNotAskAgain: true,
            });
        } else {
            handleSetDateOfNextAllowedRequest(
                pushNotificationsFeature?.params?.conditions?.maybe_later_delay || pushNotificationsFeature?.params?.conditions?.default_delay_between_two_prompts,
                {
                    alreadyDelayedToLater: true,
                },
            );
        }
    }, [pushNotificationsDataOfUser?.alreadyDelayedToLater]);

    return {
        initPushNotifications,
        initPushNotificationsData,
        cleanPushNotifications,
        pushNotificationsModalType,
        isPushNotificationsModalOpen,
        getIsNotifEnabled,
        handlePushNotificationsPermission,
        triggerMarketPushNotificationModal,
        triggerJustFinishedOnboardingNewDevicePushNotificationModal,
        listenForNotifications,
        clearNotificationsListeners,
        modalAllowNotifications,
        modalDelayLater,
    };
};

export default useNotifications;
