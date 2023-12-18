import {Account} from '@multiversx/sdk-core/out/account';
import {AccountOnNetwork} from '@multiversx/sdk-network-providers/out/accounts';
import * as walletSDK from '@multiversx/sdk-wallet';
import {apiNetworkProvider} from 'api';

export const importWalletFromMnemonic = async ({
  mnemonic,
  password = 'oParola#1',
}: {
  mnemonic: string;
  password?: string;
}): Promise<{wallet: AccountOnNetwork}> => {
  const wallet = walletSDK.UserWallet.fromMnemonic({
    mnemonic,
    password,
  });

  const decryptedWallet = walletSDK.UserWallet.decrypt(
    wallet.toJSON(),
    'oParola#1',
  );
  const walletAddress = decryptedWallet.generatePublicKey().toAddress();

  // const alice = new Account(walletAddress);

  // console.log(
  //   'what account , ',
  //   alice.balance.toString(),
  //   alice.address.bech32(),
  //   alice.toJSON(),
  // );

  const account = await apiNetworkProvider.getAccount(walletAddress);

  return {wallet: {...account}};
};
