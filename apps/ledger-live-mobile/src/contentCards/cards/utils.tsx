import {
  BrazeContentCard,
  AssetContentCard,
  Background,
  LearnContentCard,
  LocationContentCard,
  NotificationContentCard,
  WalletContentCard,
  CategoryContentCard,
  ContentCardCommonProperties,
  ContentCardsType,
  HorizontalContentCard,
} from "~/dynamicContent/types";

export const getMobileContentCards = (array: BrazeContentCard[]) =>
  array.filter(elem => !elem.extras.platform || elem.extras.platform === "mobile");

export const filterByPage = (array: BrazeContentCard[], page: string) =>
  array.filter(elem => elem.extras.location === page);

export const filterByType = (array: BrazeContentCard[], type: ContentCardsType) =>
  array.filter(elem => elem.extras.type === type);

export const compareCards = (a: ContentCardCommonProperties, b: ContentCardCommonProperties) => {
  if (a.order && !b.order) {
    return -1;
  }
  if (!a.order && b.order) {
    return 1;
  }
  if ((!a.order && !b.order) || a.order === b.order) {
    return b.createdAt - a.createdAt;
  }
  return (a.order || 0) - (b.order || 0);
};

export const mapAsCategoryContentCard = (card: BrazeContentCard) =>
  ({
    id: card.id,
    categoryId: card.extras.id,
    location: card.extras.location,
    createdAt: card.created,
    viewed: card.viewed,
    order: parseInt(card.extras.order) ? parseInt(card.extras.order) : undefined,
    cardsLayout: card.extras.cardsLayout,
    cardsType: card.extras.cardsType,
    type: card.extras.type,
    title: card.extras.title,
    description: card.extras.description,
    link: card.extras.link,
    cta: card.extras.cta,
    isDismissable: card.extras.isDismissable && card.extras.isDismissable === "true",
  }) as CategoryContentCard;

export const mapAsWalletContentCard = (card: BrazeContentCard) =>
  ({
    id: card.id,
    tag: card.extras.tag,
    title: card.extras.title,
    location: LocationContentCard.Wallet,
    image: card.extras.image,
    link: card.extras.link,
    background: Background[card.extras.background as Background] || Background.purple,
    createdAt: card.created,
    order: parseInt(card.extras.order) ? parseInt(card.extras.order) : undefined,
  }) as WalletContentCard;

export const mapAsAssetContentCard = (card: BrazeContentCard) =>
  ({
    id: card.id,
    tag: card.extras.tag,
    title: card.extras.title,
    location: LocationContentCard.Asset,
    image: card.extras.image,
    link: card.extras.link,
    cta: card.extras.cta,
    assets: card.extras.assets ?? "",
    displayOnEveryAssets: Boolean(card.extras.displayOnEveryAssets) ?? false,
    createdAt: card.created,
    order: parseInt(card.extras.order) ? parseInt(card.extras.order) : undefined,
  }) as AssetContentCard;

export const mapAsLearnContentCard = (card: BrazeContentCard) =>
  ({
    id: card.id,
    tag: card.extras.tag,
    title: card.extras.title,
    location: LocationContentCard.Learn,
    image: card.extras.image,
    link: card.extras.link,
    createdAt: card.created,
    order: parseInt(card.extras.order) ? parseInt(card.extras.order) : undefined,
  }) as LearnContentCard;

export const mapAsNotificationContentCard = (card: BrazeContentCard) =>
  ({
    id: card.id,
    tag: card.extras.tag,
    title: card.extras.title,
    description: card.extras.description,
    location: LocationContentCard.NotificationCenter,
    link: card.extras.link,
    cta: card.extras.cta,
    createdAt: card.created,
    viewed: card.viewed,
    order: parseInt(card.extras.order) ? parseInt(card.extras.order) : undefined,
  }) as NotificationContentCard;

export const mapAsHorizontalContentCard = (card: BrazeContentCard) =>
  ({
    id: card.id,
    tag: card.extras.tag,
    title: card.extras.title,
    description: card.extras.description,
    image: card.extras.image,
    link: card.extras.link,
    createdAt: card.created,
    order: parseInt(card.extras.order) ? parseInt(card.extras.order) : undefined,
  }) as HorizontalContentCard;
