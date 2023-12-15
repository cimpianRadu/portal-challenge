import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ImportWallet} from 'screens';

const WalletStack = createNativeStackNavigator();

const WalletStackNavigator = () => {
  return (
    <WalletStack.Navigator>
      <WalletStack.Screen name="ImportWallet" component={ImportWallet} />
    </WalletStack.Navigator>
  );
};

export default WalletStackNavigator;
