import React from 'react';
import {Input, LinkButton, PrimaryButton} from 'components';
import {Text, View} from 'react-native';
import {DEFAULT_RECEIVER} from '../../constants';
import {useSendTransaction} from 'hooks/useSendTransaction';
import {SendTransactionNavigationProp} from 'navigation/types';

const SendTransaction = ({
  navigation,
}: {
  navigation: SendTransactionNavigationProp;
}) => {
  const [address, setAddress] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const [sendTransaction] = useSendTransaction();

  const onPressSendTransaction = async () => {
    sendTransaction({receiverAddress: address, amount: amount});
    // navigation.navigate('Confirmation');
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
