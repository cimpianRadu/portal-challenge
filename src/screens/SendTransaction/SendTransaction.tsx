import {
  Address,
  GasEstimator,
  TokenTransfer,
  Transaction,
  TransactionPayload,
} from '@multiversx/sdk-core/out';
import {useLazyGetAccountQuery} from 'api';
import {Input, LinkButton, PrimaryButton} from 'components';
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {Account} from '@multiversx/sdk-core';
import {getMnemonicSelector} from 'redux/slices/mnemonicSlice';
import {useSelector} from 'react-redux';
import {exploreMnemonic} from 'utils';
import {DEFAULT_RECEIVER} from '../../constants';
import {useSendTransaction} from 'hooks/useSendTransaction';

const SendTransaction = () => {
  const [address, setAddress] = React.useState('');
  const [amount, setAmount] = React.useState('');
  //   const [trigger, result] = useLazyGetAccountQuery();

  const [sendTransaction] = useSendTransaction();

  //   const mnemonic = useSelector(getMnemonicSelector);
  //   const {signer} = exploreMnemonic(mnemonic);

  //   React.useEffect(() => {
  //     trigger({
  //       address: 'erd13qr4xsl2pux0kcnxzav4zutp0sm7nc90k0r84l7dqs5pa0u3ms4qtx0754',
  //     });
  //   }, []);

  const onPressSendTransaction = async () => {
    sendTransaction({receiverAddress: address, amount: amount});
  };

  const onAddressChange = (text: string) => {
    setAddress(text);
  };

  const onAmountChange = (text: string) => {
    setAmount(text);
  };

  const onTapToPrefillDefaultAddress = () => {
    setAddress(DEFAULT_RECEIVER);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', paddingHorizontal: 24}}>
      <Text style={{fontSize: 24}}>Send</Text>

      <Input label="To" value={address} onChangeText={onAddressChange} />

      <LinkButton
        label="Tap to prefill a default address"
        onPress={onTapToPrefillDefaultAddress}
      />

      <View style={{height: 16}} />

      <Input label="Amount" value={amount} onChangeText={onAmountChange} />
      <View style={{height: 16}} />
      <PrimaryButton
        disabled={!address || !amount}
        label="Send transaction"
        onPress={onPressSendTransaction}
      />
    </View>
  );
};
export default SendTransaction;
