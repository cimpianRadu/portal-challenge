import {
  ApiNetworkProvider,
  ProxyNetworkProvider,
} from '@multiversx/sdk-network-providers';
import {Account} from '@multiversx/sdk-core';

const proxyNetworkProvider = new ProxyNetworkProvider(
  'https://devnet-gateway.multiversx.com',
);

export const apiNetworkProvider = new ApiNetworkProvider(
  'https://devnet-api.multiversx.com',
);

export const testNetwork = async () => {
  const networkConfig = await apiNetworkProvider.getNetworkConfig();
  console.log(networkConfig.MinGasPrice);
  console.log(networkConfig.ChainID);
};

export const inspectAccount = async addressOfAlice => {
  console.log('what address is passed', addressOfAlice);
  try {
    const alice = new Account(addressOfAlice);
    console.log('Alice:', alice);
    const aliceOnNetwork = await apiNetworkProvider.getAccount(addressOfAlice);
    console.log('Alice on network:', aliceOnNetwork);
    alice.update(aliceOnNetwork);

    console.log('Nonce:', alice.nonce);
    console.log('Balance:', alice.balance.toString());
  } catch (error) {
    console.log('error', error);
  }
};
