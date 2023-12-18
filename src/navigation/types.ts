import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  ImportWallet: undefined;
  Wallet: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ImportWallet',
  'Wallet'
>;
