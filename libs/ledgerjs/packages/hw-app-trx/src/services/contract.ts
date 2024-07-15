import bs58 from "bs58check";
import axios from "axios";
import { LedgerTrxTransactionResolution, LoadConfig } from "./types";
import TronProtobuf from '../protobuf/smart_contract_pb';
const { Transaction, TriggerSmartContract } = TronProtobuf;

type ContractMethod = {
  payload: string;
  signature: string;
  plugin: string;
}
/**
 * Resolve resolution of transction for clear sign. The result is `null` if transaction is not TriggerSmartContract or no resolution found.
 * @param rawDataHex raw_data_hex in transaction
 * @param loadConfig config for load transaction plugin info
 * @param loadConfig.pluginBaseURL base url to fetch plugin info
 * @param loadConfig.extraPlugins plugin info to be merged with plugin info from service. Useful for debug.
 * @returns resolution for clear sign
 */
export async function resolveTransaction(rawDataHex: string, loadConfig: LoadConfig = {}): Promise<LedgerTrxTransactionResolution | null> {
  const contractInfo = deserializeContractInfoFromHex(rawDataHex);
  if (!contractInfo) {
    return null;
  }
  const resolution: LedgerTrxTransactionResolution = { externalPlugin: [] };

  const { contractAddress, selector } = contractInfo;
  const contractMethodInfos = await getPluginInfoForContractMethod(contractAddress, selector, loadConfig);
  if (contractMethodInfos) {
    const { payload, signature, plugin } = contractMethodInfos;
    if (plugin) {
      console.log(`[hw-app-trx]: found plugin (${plugin}) for select: ${selector}`);
      resolution.externalPlugin.push({ payload, signature })
    }
  } else {
    console.log("[hw-app-trx]: no infos for selector " + selector);
  }
  return resolution;
}

/**
 * Get plugin info of the given contract address and function for clear sign. The result is `undefined` if transaction is not TriggerSmartContract or no resolution found.
 * @param contractAddress contract address in TriggerSmartContract transaction
 * @param selector function selector in TriggerSmartContract transaction
 * @param loadConfig config for load transaction plugin info
 * @param loadConfig.pluginBaseURL base url to fetch plugin info
 * @param loadConfig.extraPlugins plugin info to be merged with plugin info from service. Useful for debug.
 * @returns plugin info with payload and signature if exists.
 */
export async function getPluginInfoForContractMethod(contractAddress: string, selector: string, userLoadConfig: LoadConfig = {}): Promise<ContractMethod | undefined> {

  const { pluginBaseURL, extraPlugins } = {
    pluginBaseURL: "https://cdn.live.ledger.com",
    extraPlugins: null,
    ...userLoadConfig,
  };

  let data = {};

  if (pluginBaseURL) {
    const url = `${pluginBaseURL}/plugins/tron.json`;
    data = await axios.get(url).then(r => r.data as any)
      .catch(e => {
        console.error(`[hw-app-trx]: could not fetch plugins from ${url}: ${String(e)}`);
        return undefined;
      })
  }
  if (extraPlugins) {
    data = { ...data, ...extraPlugins };
  }
  if (!data) return;

  const lcSelector = selector.toLowerCase();

  const contractSelectors = data[contractAddress];
  if (!!contractSelectors) {
    const plugin = contractSelectors[lcSelector];
    if (!!plugin) {
      return {
        payload: plugin['serialized_data'],
        signature: plugin['signature'],
        plugin: plugin['plugin'],
      }
    }
  }
}

export type TriggerSmartContractInfo = {
  contractAddress: string;
  selector: string;
}
const TriggerSmartContractType = 31;

/**
 * Deserialize contract raw data to get contract address and function selector.
 * @param rawTx raw data in hex
 * @returns contractAddress and function selector
 */
export function deserializeContractInfoFromHex(rawTx: string): TriggerSmartContractInfo | undefined {
  try {
    const transaction = Transaction.raw.deserializeBinary(Uint8Array.from(Buffer.from(rawTx, 'hex')));
    const contract = transaction.getContractList()?.[0];
    if (!contract) { return; }
    const type = contract.getType();
    if (type !== TriggerSmartContractType) { return; }

    const value = contract.getParameter().getValue();
    const smartContract = TriggerSmartContract.deserializeBinary(value);
    const contractAddress = bs58.encode(smartContract.getContractAddress());
    const data = Buffer.from(smartContract.getData()).toString('hex');
    const selector = '0x' + data.slice(0, 8).toLowerCase();
    return { contractAddress, selector };
  } catch (e) {
    console.error(`[hw-app-trx]: failed to deserialize transaction from hex: ${String(e)}`);
  }
}

