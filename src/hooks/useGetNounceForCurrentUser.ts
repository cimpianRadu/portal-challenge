import {useLazyGetNonceByAddressQuery} from 'api';
import React from 'react';
import {useSelector} from 'react-redux';
import {getMnemonicSelector} from 'redux/slices/mnemonicSlice';
import {exploreMnemonic} from 'utils';

export const useGetNounceForCurrentUser = () => {
  const mnemonic = useSelector(getMnemonicSelector);
  const {address} = exploreMnemonic(mnemonic);
  const [getNonce, nonceResult] = useLazyGetNonceByAddressQuery();

  React.useEffect(() => {
    if (!address) return;
    getNonce({address: address.toString()});
  }, []);

  return [nonceResult];
};
