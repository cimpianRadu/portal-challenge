import React from 'react';
import {Input, LinkButton, PrimaryButton, Spacer} from 'components';
import {View} from 'react-native';
import {DEFAULT_RECEIVER} from '../../constants';
import {useSendTransaction} from 'hooks/useSendTransaction';
import {SendTransactionNavigationProp} from 'navigation/types';
import {useGetNounceForCurrentUser} from 'hooks/useGetNounceForCurrentUser';

const SendTransaction = ({
  navigation,
}: {
  navigation: SendTransactionNavigationProp;
}) => {
  const [address, setAddress] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const [sendTransaction, result] = useSendTransaction();
  const [nonceResult] = useGetNounceForCurrentUser();

  React.useEffect(() => {
    if (result.isSuccess) {
      navigation.navigate('Confirmation', {
        transactionHash: result.data.txHash,
      });
    }
  }, [result]);

  const onPressSendTransaction = async () => {
    sendTransaction({
      receiverAddress: address,
      amount: amount,
      nonce: nonceResult.data,
    });
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
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
      }}>
      <Input label="To" value={address} onChangeText={onAddressChange} />

      <LinkButton
        label="Tap to prefill a default address"
        onPress={onTapToPrefillDefaultAddress}
      />

      <Spacer height={16} />

      <Input label="Amount" value={amount} onChangeText={onAmountChange} />

      <Spacer height={16} />

      <PrimaryButton
        disabled={!address || !amount}
        label="Send transaction"
        onPress={onPressSendTransaction}
      />
    </View>
  );
};
export default SendTransaction;
