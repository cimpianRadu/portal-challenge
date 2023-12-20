import {
  Address,
  TokenTransfer,
  Transaction,
  TransactionPayload,
} from '@multiversx/sdk-core/out';
import {LinkButton, PrimaryButton, Spacer} from 'components';
import {useGetNounceForCurrentUser} from 'hooks/useGetNounceForCurrentUser';
import React from 'react';
import {Modal, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'redux/hooks';
import {getMnemonicSelector} from 'redux/slices/mnemonicSlice';
import {
  getIsOpenSelector,
  setIsOpen,
} from 'redux/slices/signTransactionModalSlice';
import {getTransactionInputSelector} from 'redux/slices/transactionSlice';
import {exploreMnemonic} from 'utils';

const SignTransaction = () => {
  const dispatch = useAppDispatch();

  const isVisible = useSelector(getIsOpenSelector);
  const mnemonic = useSelector(getMnemonicSelector);
  const transactionInput = useSelector(getTransactionInputSelector);
  const {signer, address} = exploreMnemonic(mnemonic);
  const [nonceResult] = useGetNounceForCurrentUser();

  const onClose = () => {
    dispatch(setIsOpen(false));
  };

  const onSign = async () => {
    if (!transactionInput) return;
    const transaction = new Transaction({
      chainID: 'D',
      gasLimit: transactionInput.gasLimit,
      gasPrice: 1000000000,
      nonce: nonceResult.data,
      value: TokenTransfer.egldFromBigInteger(transactionInput?.value),
      data: new TransactionPayload(transactionInput.data),
      sender: address,
      receiver: new Address(transactionInput?.receiver),
    });

    const serializedTransaction = transaction.serializeForSigning();
    const signature = await signer.sign(serializedTransaction);

    console.log('the sign', signature);
  };
  return (
    <Modal visible={!!isVisible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          ❗️ Plese sign only if you initiated this transaction
        </Text>
        <Spacer height={16} />
        <Text>
          <Text style={{fontSize: 16, color: 'grey'}}>To: </Text>
          {transactionInput?.receiver}
        </Text>
        <Spacer height={16} />
        <Text>
          <Text style={{fontSize: 16, color: 'grey'}}>Value: </Text>
          {transactionInput?.value}
        </Text>
        <Spacer height={16} />
        <Text>
          <Text style={{fontSize: 16, color: 'grey'}}>Info: </Text>
          {transactionInput?.data}
        </Text>
        <View
          style={{
            width: '80%',
            justifyContent: 'space-around',
            marginTop: 32,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <PrimaryButton label="Sign" onPress={onSign} />
          {/* <Spacer height={16} /> */}
          <LinkButton label="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default SignTransaction;
