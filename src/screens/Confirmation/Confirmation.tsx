import React from 'react';
import {useGetTransactionStatusQuery, useSendTransactionMutation} from 'api';
import {LinkButton, LoadingIndicator, PrimaryButton} from 'components';
import {
  ConfirmationScreenRouteProp,
  ConfirmationnNavigationProp,
} from 'navigation/types';
import {Text, View} from 'react-native';
import {formatTransactionAmount} from 'utils';

const Confirmation = ({
  route,
  navigation,
}: {
  route: ConfirmationScreenRouteProp;
  navigation: ConfirmationnNavigationProp;
}) => {
  const {transactionHash} = route.params;
  const [shouldSkipPolling, setShouldSkipPolling] = React.useState(false);

  const {isLoading, data} = useGetTransactionStatusQuery(
    {
      hash: transactionHash,
    },
    {
      pollingInterval: 5000,
      skip: shouldSkipPolling,
    },
  );

  React.useEffect(() => {
    if (data && data.status !== 'pending') {
      console.log('stop polling', data);
      setShouldSkipPolling(true);
    }
    return () => {
      setShouldSkipPolling(true);
    };
  }, [data]);

  const onPressBackToWallet = () => {
    navigation.popToTop();
  };

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
      {formatTransactionAmount(data.value)}
      <View style={{height: 12}} />
      <LinkButton label="View in explorer" onPress={() => {}} />
      <View style={{height: 12}} />
      <PrimaryButton label="Back to wallet" onPress={onPressBackToWallet} />
    </View>
  );
};
export default Confirmation;
