import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {Wallet, ImportWallet, SendTransaction, Confirmation} from 'screens';

const stackScreenOptions = {
  headerShown: false,
};

const WalletStack = createNativeStackNavigator<RootStackParamList>();

const WalletStackNavigator = () => {
  return (
    <WalletStack.Navigator screenOptions={stackScreenOptions}>
      <WalletStack.Screen name="ImportWallet" component={ImportWallet} />
      <WalletStack.Screen name="Wallet" component={Wallet} />
      <WalletStack.Screen name="SendTransaction" component={SendTransaction} />
      <WalletStack.Screen name="Confirmation" component={Confirmation} />
    </WalletStack.Navigator>
  );
};

export default WalletStackNavigator;
