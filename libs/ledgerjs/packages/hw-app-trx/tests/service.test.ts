/**
 * @jest-environment jsdom
 */
import axios from "axios";
import { getPluginInfoForContractMethod, deserializeContractInfoFromHex, TriggerSmartContractInfo } from '../src/services/contract'
import { ledgerService } from "../src/Trx";
describe("parseTransactionFromHex", () => {
  test('TriggerSmartContract case-0', () => {
    const rawDataHex = '0a0241102208bca62ed0108d4fd040d8b5d5e287325aae01081f12a9010a31747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261637412740a1541573708726db88a32c1b9c828fef508577cfb84831215410e1bce983f78f8913002c3f7e52daf78de6da2cb2244a9059cbb000000000000000000000000573708726db88a32c1b9c828fef508577cfb8483000000000000000000000000000000000000000000000000000000000000000a70d9fbd1e28732900180ade204';
    const transactionInfo = deserializeContractInfoFromHex(rawDataHex);
    expect(transactionInfo).not.toBeNull();
    const { contractAddress, selector } = transactionInfo as TriggerSmartContractInfo;
    expect(contractAddress).toEqual('TBFomoujFqse6megmarBS3FYAw4chnJbVu');
    expect(selector).toEqual('0xa9059cbb');
  });

  test('TransferContract case', () => {
    const rawDataHex = '0a0240f72208eaf4e880211050dc40e0ebd0e287325aae01081f12a9010a31747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261637412740a1541573708726db88a32c1b9c828fef508577cfb84831215410e1bce983f78f8913002c3f7e52daf78de6da2cb2244a9059cbb000000000000000000000000573708726db88a32c1b9c828fef508577cfb8483000000000000000000000000000000000000000000000000000000000000000a70f39ccde28732900180ade204';
    const transactionInfo = deserializeContractInfoFromHex(rawDataHex);
    expect(transactionInfo).not.toBeUndefined();
  })
});

jest.mock('axios');
describe("getPluginInfoForContractMethod", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should work fine with avaliable service data', async () => {
    const contractAddress = 'TBFomoujFqse6megmarBS3FYAw4chnJbVu', method = '0x38ed1739';
    // @ts-expect-error
    axios.get.mockImplementation(async () => {
      return {
        data: {
          "TBFomoujFqse6megmarBS3FYAw4chnJbVu": {
            "0x38ed1739": {
              "plugin": "swapExactTokensForTokens",
              "serialized_data": "11506c7567696e426f696c6572706c617465410e1bce983f78f8913002c3f7e52daf78de6da2cb38ed1739",
              "signature": "304602210096f1b6e5e0fc8cdc7bf90b9edecbe9d0638714d4211d6baf18f66bdf685220c90221009f34a1fc88e0374b297d0c5d68493bce7951ac97302adac494ab9dae6cbd7f8c"
            }
          }
        }
      }
    });
    const pluginInfo = await getPluginInfoForContractMethod(contractAddress, method);
    expect(pluginInfo).toEqual({
      plugin: 'swapExactTokensForTokens',
      payload: '11506c7567696e426f696c6572706c617465410e1bce983f78f8913002c3f7e52daf78de6da2cb38ed1739',
      signature: '304602210096f1b6e5e0fc8cdc7bf90b9edecbe9d0638714d4211d6baf18f66bdf685220c90221009f34a1fc88e0374b297d0c5d68493bce7951ac97302adac494ab9dae6cbd7f8c'
    })
  })

  test('should return undefine with unavailable service', async () => {
    const contractAddress = 'TBFomoujFqse6megmarBS3FYAw4chnJbVu', method = '0x38ed1739';
    // @ts-expect-error
    axios.get.mockImplementation(async () => { throw new Error() });
    const pluginInfo = await getPluginInfoForContractMethod(contractAddress, method);
    expect(pluginInfo).toBeUndefined();
  });

  test('should return undefine when no plugin infomation found', async () => {
    const contractAddress = 'TBFomoujFqse6megmarBS3FYAw4chnJbVu', method = '0x38ed1739';
    // @ts-expect-error
    axios.get.mockImplementation(async () => { return { data: {} } });
    const pluginInfo = await getPluginInfoForContractMethod(contractAddress, method);
    expect(pluginInfo).toBeUndefined();
  });
})

describe.only("resolveTransaction", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should work fine with TriggerSmartContract transaction", async () => {
    const rawDataHex = '0a0267a42208cb83283f5927a5e040c8badeb489325ab001081f12a9010a31747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261637412740a1541e2ae49db6a70b9b4757d2137a43b69b24a4457801215410e1bce983f78f8913002c3f7e52daf78de6da2cb2244a9059cbb000000000000000000000000573708726db88a32c1b9c828fef508577cfb8483000000000000000000000000000000000000000000000000000000000000000a286470a6f8dab48932900180ade204';
    // @ts-expect-error
    axios.get.mockImplementation(async () => {
      return {
        data: {
          "TBFomoujFqse6megmarBS3FYAw4chnJbVu": {
            "0xa9059cbb": {
              "plugin": "swapExactTokensForTokens",
              "serialized_data": "11506c7567696e426f696c6572706c617465410e1bce983f78f8913002c3f7e52daf78de6da2cb38ed1739",
              "signature": "304602210096f1b6e5e0fc8cdc7bf90b9edecbe9d0638714d4211d6baf18f66bdf685220c90221009f34a1fc88e0374b297d0c5d68493bce7951ac97302adac494ab9dae6cbd7f8c"
            }
          }
        }
      }
    });
    const resolution = await ledgerService.resolveTransaction(rawDataHex);
    expect(resolution).toEqual({
      externalPlugin: [{
        payload: '11506c7567696e426f696c6572706c617465410e1bce983f78f8913002c3f7e52daf78de6da2cb38ed1739',
        signature: '304602210096f1b6e5e0fc8cdc7bf90b9edecbe9d0638714d4211d6baf18f66bdf685220c90221009f34a1fc88e0374b297d0c5d68493bce7951ac97302adac494ab9dae6cbd7f8c'
      }]
    })
  })

  test("should work fine with Transfer transaction", async () => {
    const rawDataHex = '0a023dce220895da42177db0050740d8e0a5feed2d522c43727970746f436861696e2d54726f6e5352204c6564676572205472616e73616374696f6e732054657374735a68080112640a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412330a1541c8599111f29c1e1e061265b4af93ea1f274ad78a121541c8599111f29c1e1e061265b4af93ea1f274ad78a1880c2d72f709d94a2feed2d';

    const resolution = await ledgerService.resolveTransaction(rawDataHex);
    expect(resolution).toBeNull();
  })
})