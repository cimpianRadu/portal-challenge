import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  ImportWallet: undefined;
  Wallet: undefined;
  SendTransaction: undefined;
  Confirmation: {
    transactionHash: string;
  };
  Webview: {
    uri: string;
  };
};

export type ImportWalletNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ImportWallet'
>;

export type WalletNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Wallet'
>;

export type SendTransactionNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SendTransaction'
>;

export type ConfirmationnNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Confirmation'
>;

export type ConfirmationScreenRouteProp = RouteProp<
  RootStackParamList,
  'Confirmation'
>;

export type WebviewScreenRouteProp = RouteProp<RootStackParamList, 'Webview'>;
