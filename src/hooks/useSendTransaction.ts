import {
  Address,
  GasEstimator,
  TokenTransfer,
  Transaction,
  TransactionPayload,
} from '@multiversx/sdk-core/out';
import {useLazyGetNonceByAddressQuery, useSendTransactionMutation} from 'api';
import React from 'react';
import {useSelector} from 'react-redux';
import {getMnemonicSelector} from 'redux/slices/mnemonicSlice';
import {exploreMnemonic} from 'utils';

export const useSendTransaction = () => {
  const mnemonic = useSelector(getMnemonicSelector);
  const {signer, address} = exploreMnemonic(mnemonic);
  const [send, transResult] = useSendTransactionMutation();

  const sendTransaction = async ({
    receiverAddress,
    amount,
    data,
    nonce,
  }: {
    receiverAddress: string;
    amount: string;
    data?: string;
    nonce: number;
  }) => {
    const gasLimit = new GasEstimator().forEGLDTransfer(data?.length || 0);

    const transaction = new Transaction({
      chainID: 'D',
      gasLimit: gasLimit,
      gasPrice: 1000000000,
      nonce: nonce,
      value: TokenTransfer.egldFromBigInteger(amount),
      data: new TransactionPayload(data),
      sender: address,
      receiver: new Address(receiverAddress),
    });

    const serializedTransaction = transaction.serializeForSigning();
    const signature = await signer.sign(serializedTransaction);

    transaction.applySignature(signature);

    const dataToSend = transaction.toSendable();
    send({transaction: dataToSend});
  };

  return [sendTransaction, transResult];
};
