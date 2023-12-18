import React from 'react';
import {Text, View} from 'react-native';
import * as walletSDK from '@multiversx/sdk-wallet';
import {inspectAccount} from '../../api';

import Clipboard from '@react-native-clipboard/clipboard';
import {UserAddress} from '@multiversx/sdk-wallet/out/userAddress';
import {Button, PrimaryButton} from 'components';
import {texts} from '../../constants';
import styles from './styles';

const ImportWallet = () => {
  const [mnemonic, setMnemonic] = React.useState('');
  const [wallet, setWallet] = React.useState<UserAddress | null>(null);

  React.useEffect(() => {
    Clipboard.setString(
      `door roast solar ridge such addict gun miracle crack pattern garlic over nut ugly giggle old shuffle such replace wife turn rubber idea priority`,
    );
  }, []);

  React.useEffect(() => {
    if (!wallet) return;
    inspectAccount(wallet);
  }, [wallet]);

  const onPasteMnemonic = async () => {
    const mnemonic = await Clipboard.getString();
    setMnemonic(mnemonic);
  };

  const onImport = async () => {
    const w = walletSDK.UserWallet.fromMnemonic({
      mnemonic: mnemonic,
      password: 'oParola#1',
    });

    const d = walletSDK.UserWallet.decrypt(w.toJSON(), 'oParola#1');
    const y = d.generatePublicKey().toAddress();
    setWallet(y);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mnemonicContainer}>
        {!mnemonic ? (
          <Button onPress={onPasteMnemonic}>
            <Text>{texts.importWallet.pasteMnemonic}</Text>
          </Button>
        ) : (
          <Text>{mnemonic}</Text>
        )}
      </View>

      <View style={styles.importAccountButtonContainer}>
        <PrimaryButton
          label={texts.importWallet.importAccount}
          onPress={onImport}
        />
      </View>
    </View>
  );
};

export default ImportWallet;
