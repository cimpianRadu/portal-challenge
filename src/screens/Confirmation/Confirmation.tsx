import {useSendTransactionMutation} from 'api';
import React from 'react';
import {Text, View} from 'react-native';

const Confirmation = () => {
  const [_, {isLoading, isError, isSuccess}] = useSendTransactionMutation();

  console.log('isError', isError);
  console.log('isSuccess', isSuccess);
  console.log('isLoading', isLoading);
  return (
    <View style={{flex: 1, alignItems: 'center', paddingHorizontal: 24}}>
      <Text style={{fontSize: 24}}>Confirmation</Text>
    </View>
  );
};
export default Confirmation;
