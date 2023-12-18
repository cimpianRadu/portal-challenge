import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import React from 'react';
import {ImportWallet} from '../../screens';

const stackScreenOptions = {
  headerShown: false,
};

const WalletStack = createNativeStackNavigator<RootStackParamList>();

const WalletStackNavigator = () => {
  return (
    <WalletStack.Navigator screenOptions={stackScreenOptions}>
      <WalletStack.Screen name="ImportWallet" component={ImportWallet} />
    </WalletStack.Navigator>
  );
};

export default WalletStackNavigator;
