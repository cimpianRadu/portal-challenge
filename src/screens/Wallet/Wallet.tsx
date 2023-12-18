import React from 'react';
import {Text, View} from 'react-native';
import * as walletSDK from '@multiversx/sdk-wallet';
import {inspectAccount} from '../../api';

import {UserAddress} from '@multiversx/sdk-wallet/out/userAddress';

const Wallet = () => {
  const [wallet, setWallet] = React.useState<UserAddress | null>(null);

  React.useEffect(() => {
    if (!wallet) return;
    inspectAccount(wallet);
  }, [wallet]);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Welcome</Text>

      <Text>Wallet address:</Text>

      {wallet !== null && <Text>{wallet.bech32()}</Text>}
    </View>
  );
};

export default Wallet;
