import {
  Address,
  GasEstimator,
  TokenTransfer,
  Transaction,
  TransactionPayload,
} from '@multiversx/sdk-core/out';
import {useLazyGetNonceByAddressQuery, useSendTransactionMutation} from 'api';
import {useSelector} from 'react-redux';
import {getMnemonicSelector} from 'redux/slices/mnemonicSlice';
import {exploreMnemonic} from 'utils';

export const useSendTransaction = () => {
  const mnemonic = useSelector(getMnemonicSelector);
  const {signer, address} = exploreMnemonic(mnemonic);
  const [send] = useSendTransactionMutation();
  const [trigger, result] = useLazyGetNonceByAddressQuery();

  const sendTransaction = async ({
    receiverAddress,
    amount,
    data,
  }: {
    receiverAddress: string;
    amount: string;
    data?: string;
  }) => {
    const gasLimit = new GasEstimator().forEGLDTransfer(data?.length || 0);
    trigger({address: receiverAddress});
    const transaction = new Transaction({
      chainID: 'D',
      gasLimit: gasLimit,
      gasPrice: 1000000000,
      nonce: result.data || 0,
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

  return [sendTransaction];
};
