import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getWallet} from 'redux/slices/walletSlice';

const Wallet = () => {
  const wallet = useSelector(getWallet);

  console.log('the wallet ', wallet);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Welcome</Text>

      <Text>Wallet address:</Text>

      {wallet !== null && (
        <>
          <Text>{wallet.address.bech32()}</Text>
          <Text>{String(wallet.balance)}</Text>
        </>
      )}
    </View>
  );
};

export default Wallet;
