import {Mnemonic, UserSigner, UserPublicKey} from '@multiversx/sdk-wallet';
import {UserAddress} from '@multiversx/sdk-wallet/out/userAddress';

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
