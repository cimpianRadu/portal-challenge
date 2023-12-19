import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  ImportWallet: undefined;
  Wallet: undefined;
  SendTransaction: undefined;
  Confirmation: undefined;
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
