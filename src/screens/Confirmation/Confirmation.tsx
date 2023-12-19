import {useGetTransactionStatusQuery, useSendTransactionMutation} from 'api';
import {LoadingIndicator} from 'components';
import {ConfirmationScreenRouteProp} from 'navigation/types';
import React from 'react';
import {Text, View} from 'react-native';

const Confirmation = ({route}: {route: ConfirmationScreenRouteProp}) => {
  const {transactionHash} = route.params;
  const stopPolling = React.useRef(false);

  const {isLoading, data} = useGetTransactionStatusQuery(
    {
      hash: transactionHash,
    },
    {
      pollingInterval: 5000,
      skip: stopPolling.current,
    },
  );

  React.useEffect(() => {
    if (!isLoading) {
      stopPolling.current = true;
    }
    return () => {
      stopPolling.current = true;
    };
  }, []);

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

      <Text>
        <Text style={{fontSize: 16, color: 'gray'}}>TX hash: </Text>
        {data.txHash}
      </Text>
      <View style={{height: 20}} />
      <Text>
        <Text style={{fontSize: 16, color: 'gray'}}>
          Successfully sent to:{' '}
        </Text>
        {data.receiver}
      </Text>
      <View style={{height: 12}} />
      <Text>{data.value}</Text>
    </View>
  );
};
export default Confirmation;
