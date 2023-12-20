import {TokenTransfer} from '@multiversx/sdk-core/out';
import * as walletSDK from '@multiversx/sdk-wallet';
import {Mnemonic, UserSigner, UserPublicKey} from '@multiversx/sdk-wallet';
import {UserAddress} from '@multiversx/sdk-wallet/out/userAddress';
import BigNumber from 'bignumber.js';

export const exploreMnemonic = (
  mnemonicString: string,
): {
  address: UserAddress;
  signer: UserSigner;
  userPublicKey: UserPublicKey;
} => {
  const mnemonic = Mnemonic.fromString(mnemonicString);
  const userSecretKey = mnemonic.deriveKey(0);
  const userPublicKey = userSecretKey.generatePublicKey();
  const address = userPublicKey.toAddress();
  const signer = new UserSigner(userSecretKey);

  return {
    signer,
    address,
    userPublicKey,
  };
};

export const formatTransactionDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  const hour = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}/${year} - ${hour}:${minutes}`;
};

export const formatTransactionAmount = (amount: BigNumber.Value) => {
  return TokenTransfer.egldFromBigInteger(amount).toPrettyString();
};
