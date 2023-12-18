import React from 'react';
import {Text, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {Button, PrimaryButton} from 'components';
import {texts} from '../../constants';
import styles from './styles';
import {useAppDispatch} from 'redux/hooks';
import {useSelector} from 'react-redux';
import {getMnemonicSelector, setMnemonic} from 'redux/slices/mnemonicSlice';
import {getInitWalletStatus, initWallet} from 'redux/slices/walletSlice';

const ImportWallet = ({navigation}) => {
  const dispatch = useAppDispatch();
  const mnemonic = useSelector(getMnemonicSelector);
  const importWalletStatus = useSelector(getInitWalletStatus);

  React.useEffect(() => {
    Clipboard.setString(
      `door roast solar ridge such addict gun miracle crack pattern garlic over nut ugly giggle old shuffle such replace wife turn rubber idea priority`,
    );
  }, []);

  React.useEffect(() => {
    if (importWalletStatus === 'SUCCESS') {
      navigation.navigate('Wallet');
    }
  }, [importWalletStatus]);

  const onPasteMnemonic = async () => {
    const mnemonic = await Clipboard.getString();
    dispatch(setMnemonic(mnemonic));
  };

  const onImport = async () => {
    if (!mnemonic) return;
    dispatch(initWallet({mnemonic}));
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
