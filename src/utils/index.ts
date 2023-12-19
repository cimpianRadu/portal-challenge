import * as walletSDK from '@multiversx/sdk-wallet';
import {UserAddress} from '@multiversx/sdk-wallet/out/userAddress';

export const formatMnemonic = (mnemonic: unknown): string => {
  return mnemonic as string;
};

export const getWalletAddress = (mnemonic: string): UserAddress => {
  const wallet = walletSDK.UserWallet.fromMnemonic({
    mnemonic,
    password: 'oParola#1',
  });

  const decryptedWallet = walletSDK.UserWallet.decrypt(
    wallet.toJSON(),
    'oParola#1',
  );

  const walletAddress = decryptedWallet.generatePublicKey().toAddress();

  return walletAddress.toJSON();
};
