import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {LinkButton, PrimaryButton} from 'components';
import {texts} from '../../constants';
import styles from './styles';
import {useAppDispatch} from 'redux/hooks';
import {useSelector} from 'react-redux';
import {getMnemonicSelector, setMnemonic} from 'redux/slices/mnemonicSlice';
import {getAddressSelector, setAddress} from 'redux/slices/addressSlice';
import {useLazyGetAccountQuery} from 'api';
import {exploreMnemonic} from 'utils';
import {setAccountImported} from 'redux/slices/importAccountSlice';

const ImportWallet = () => {
  const dispatch = useAppDispatch();
  const mnemonic = useSelector(getMnemonicSelector);
  const address = useSelector(getAddressSelector);

  const [getAccount, {isSuccess: isImportAccountSuccessfully, isLoading}] =
    useLazyGetAccountQuery();

  React.useEffect(() => {
    Clipboard.setString(
      `door roast solar ridge such addict gun miracle crack pattern garlic over nut ugly giggle old shuffle such replace wife turn rubber idea priority`,
    );
  }, []);

  React.useEffect(() => {
    if (!mnemonic) return;
    const {address} = exploreMnemonic(mnemonic);
    dispatch(setAddress(address.bech32()));
  }, [mnemonic]);

  React.useEffect(() => {
    if (isImportAccountSuccessfully && address) {
      dispatch(setAccountImported(true));
    }
  }, [isImportAccountSuccessfully, address]);

  const onPasteMnemonic = async () => {
    const mnemonic = await Clipboard.getString();
    dispatch(setMnemonic(mnemonic));
  };

  const onImport = async () => {
    if (address) {
      getAccount({address: address});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mnemonicContainer}>
        {!mnemonic ? (
          <LinkButton
            label={texts.importWallet.pasteMnemonic}
            onPress={onPasteMnemonic}
          />
        ) : (
          <Text>{mnemonic}</Text>
        )}
      </View>

      {isLoading || isImportAccountSuccessfully ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.importAccountButtonContainer}>
          <PrimaryButton
            label={texts.importWallet.importAccount}
            onPress={onImport}
          />
        </View>
      )}
    </View>
  );
};

export default ImportWallet;
