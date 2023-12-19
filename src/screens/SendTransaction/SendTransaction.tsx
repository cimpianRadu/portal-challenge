import {
  Address,
  GasEstimator,
  TokenTransfer,
  Transaction,
  TransactionPayload,
} from '@multiversx/sdk-core/out';
import {useLazyGetAccountQuery} from 'api';
import {PrimaryButton} from 'components';
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {Account} from '@multiversx/sdk-core';
import {getMnemonicSelector} from 'redux/slices/mnemonicSlice';
import {useSelector} from 'react-redux';
import {exploreMnemonic} from 'utils';

// erd13qr4xsl2pux0kcnxzav4zutp0sm7nc90k0r84l7dqs5pa0u3ms4qtx0754

const SendTransaction = () => {
  const [trigger, result] = useLazyGetAccountQuery();

  const mnemonic = useSelector(getMnemonicSelector);
  const {signer} = exploreMnemonic(mnemonic);

  React.useEffect(() => {
    trigger({
      address: 'erd13qr4xsl2pux0kcnxzav4zutp0sm7nc90k0r84l7dqs5pa0u3ms4qtx0754',
    });
  }, []);

  const onPressSendTransaction = async () => {
    const data = 'radu test';
    const gasLimit = new GasEstimator().forEGLDTransfer(data.length);
    try {
      const transaction = new Transaction({
        chainID: 'D',
        gasLimit: gasLimit,
        gasPrice: 1000000000,
        // nonce: result.data?.nonce,
        nonce: 4,
        value: TokenTransfer.egldFromBigInteger('111456789000000000'),
        data: new TransactionPayload(data),
        sender: new Address(
          'erd1uhhzsvwnfd9tlpjawgpvm5tcc05sz2eu2yrq3q9lckrw6zyuftjqeckyhx',
        ),
        receiver: new Address(
          'erd13qr4xsl2pux0kcnxzav4zutp0sm7nc90k0r84l7dqs5pa0u3ms4qtx0754',
        ),
      });

      const serializedTransaction = transaction.serializeForSigning();
      const signature = await signer.sign(serializedTransaction);

      transaction.applySignature(signature);

      const dataToSend = transaction.toSendable();

      const response = await fetch(
        'https://devnet-api.multiversx.com/transactions',
        {
          method: 'POST',
          body: JSON.stringify(dataToSend),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(response);

      // await broadcastTransaction(transaction);
    } catch (error) {
      console.log('Error on transaction: ', error);
    }
  };

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
