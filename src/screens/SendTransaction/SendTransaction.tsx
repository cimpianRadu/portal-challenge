import {Transaction} from '@multiversx/sdk-core/out';
import {useLazyGetAccountQuery} from 'api';
import {PrimaryButton} from 'components';
import React from 'react';
import {Text, TextInput, View} from 'react-native';

// erd13qr4xsl2pux0kcnxzav4zutp0sm7nc90k0r84l7dqs5pa0u3ms4qtx0754

const SendTransaction = () => {
  const [trigger, result] = useLazyGetAccountQuery();

  React.useEffect(() => {
    trigger({
      address: 'erd13qr4xsl2pux0kcnxzav4zutp0sm7nc90k0r84l7dqs5pa0u3ms4qtx0754',
    });
  }, []);

  const onPressSendTransaction = () => {
    try {
      const transaction = new Transaction({
        nonce: 0,
        sender:
          'erd1uhhzsvwnfd9tlpjawgpvm5tcc05sz2eu2yrq3q9lckrw6zyuftjqeckyhx',
        receiver:
          'erd13qr4xsl2pux0kcnxzav4zutp0sm7nc90k0r84l7dqs5pa0u3ms4qtx0754',
        value: 1,
      });
      transaction.applySignature('test');
    } catch (error) {
      console.log('Error on transaction: ', error);
    }
  };

  console.log(result);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>Send</Text>

      <Text>To</Text>
      <TextInput
        style={{
          width: '100%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}></TextInput>

      <Text>Amount</Text>
      <TextInput
        inputMode="numeric"
        style={{
          width: '100%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}></TextInput>

      <PrimaryButton
        label="Send transaction"
        onPress={onPressSendTransaction}
      />
    </View>
  );
};
export default SendTransaction;
