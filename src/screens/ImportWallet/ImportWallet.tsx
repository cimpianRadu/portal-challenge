import React from 'react';
import {Text, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {Button, LinkButton, PrimaryButton} from 'components';
import {texts} from '../../constants';
import styles from './styles';
import {useAppDispatch} from 'redux/hooks';
import {useSelector} from 'react-redux';
import {getMnemonicSelector, setMnemonic} from 'redux/slices/mnemonicSlice';
import {getAddressSelector, setAddress} from 'redux/slices/addressSlice';
import {useLazyGetAccountQuery} from 'api';
import {exploreMnemonic} from 'utils';
import {ImportWalletNavigationProp} from 'navigation/types';

const ImportWallet = ({
  navigation,
}: {
  navigation: ImportWalletNavigationProp;
}) => {
  const dispatch = useAppDispatch();
  const mnemonic = useSelector(getMnemonicSelector);
  const address = useSelector(getAddressSelector);

  const [trigger] = useLazyGetAccountQuery();

  React.useEffect(() => {
    Clipboard.setString(
      `door roast solar ridge such addict gun miracle crack pattern garlic over nut ugly giggle old shuffle such replace wife turn rubber idea priority`,
    );
  }, []);

  React.useEffect(() => {
    if (!mnemonic) return;
    const {address} = exploreMnemonic(mnemonic);
    exploreMnemonic(mnemonic);
    dispatch(setAddress(address.bech32()));
  }, [mnemonic]);

  React.useEffect(() => {
    if (!address) return;
    trigger({address: address});
  }, [address]);

  const onPasteMnemonic = async () => {
    const mnemonic = await Clipboard.getString();
    dispatch(setMnemonic(mnemonic));
  };

  const onImport = async () => {
    navigation.navigate('Wallet');
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
