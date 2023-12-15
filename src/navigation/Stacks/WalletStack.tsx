import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import React from 'react';
import {ImportWallet} from 'screens';

const WalletStack = createNativeStackNavigator<RootStackParamList>();

const WalletStackNavigator = () => {
  return (
    <WalletStack.Navigator>
      <WalletStack.Screen name="ImportWallet" component={ImportWallet} />
    </WalletStack.Navigator>
  );
};

export default WalletStackNavigator;
