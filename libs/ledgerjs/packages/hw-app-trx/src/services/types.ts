export type LedgerTrxTransactionResolution = {
  // device serialized data that contains external plugin data (hex format)
  externalPlugin: Array<{ payload: string; signature: string }>;
};

export type PluginInfo = {
  plugin: string;
  serialized_data: string;
  signature: string;
}

export type LoadConfig = {
  // fetch against an api (base url is an api that hosts /plugins/tron.json )
  pluginBaseURL?: string | null;
  /**
   * provide manually some extra plugins to add for the resolution (e.g. for dev purpose)
   * object will be merged with the returned value of the Ledger cdn payload
   * @example e.g. 
   * { 
   *    extraPlugins: { 
   *      contractAddress: { 
   *        functionSelector: {
   *          plugin: '',
   *          serialized_data: '',
   *          signature: '',
   *        }
   *      } 
   *    } 
   * }
   *
   */
  extraPlugins?: Record<string, Record<string, PluginInfo>> | null;
}

/**
 * Allows to configure precisely what the service need to resolve.
 * for instance you can set nft:true if you need clear signing on NFTs. If you set it and it is not a NFT transaction, it should still work but will do a useless service resolution.
 */
export type ResolutionConfig = {
  // external plugins resolution service (e.G. LIDO)
  externalPlugins?: boolean;
};

export type LedgerTrxTransactionService = {
  resolveTransaction: (
    rawDataHex: string,
    loadConfig: LoadConfig,
  ) => Promise<LedgerTrxTransactionResolution>;
};
