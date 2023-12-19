import {useGetTransactionStatusQuery, useSendTransactionMutation} from 'api';
import {LoadingIndicator} from 'components';
import {ConfirmationScreenRouteProp} from 'navigation/types';
import React from 'react';
import {Text, View} from 'react-native';

const Confirmation = ({route}: {route: ConfirmationScreenRouteProp}) => {
  const {transactionHash} = route.params;

  const {isLoading, data} = useGetTransactionStatusQuery(
    {
      hash: transactionHash,
    },
    {
      pollingInterval: 5000,
    },
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={{flex: 1, alignItems: 'center', paddingHorizontal: 24}}>
      <Text style={{fontSize: 24}}>Confirmation</Text>
      {data.status === 'pending' && <Text style={{fontSize: 50}}>⏳</Text>}
      {data.status === 'success' && <Text style={{fontSize: 50}}>✅</Text>}
      {data.status === 'error' && <Text>❌</Text>}
      <Text>Transaction status {data.status}</Text>
    </View>
  );
};
export default Confirmation;
