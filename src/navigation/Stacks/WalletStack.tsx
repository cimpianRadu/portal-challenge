import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {
  Wallet,
  ImportWallet,
  SendTransaction,
  Confirmation,
  Webview,
} from 'screens';

const stackScreenOptions = {
  headerMode: 'screen',
  headerBackVisible: true,
  headerBackTitle: 'Back',
  gestureEnabled: true,
} as NativeStackNavigationOptions;

const WalletStack = createNativeStackNavigator<RootStackParamList>();

const WalletStackNavigator = () => {
  return (
    <WalletStack.Navigator screenOptions={stackScreenOptions}>
      <WalletStack.Screen
        name="ImportWallet"
        component={ImportWallet}
        options={{title: 'Welcome'}}
      />
      <WalletStack.Screen name="Wallet" component={Wallet} />
      <WalletStack.Screen
        name="SendTransaction"
        component={SendTransaction}
        options={{title: 'Send'}}
      />
      <WalletStack.Screen name="Confirmation" component={Confirmation} />
      <WalletStack.Screen name="Webview" component={Webview} />
    </WalletStack.Navigator>
  );
};

export default WalletStackNavigator;
