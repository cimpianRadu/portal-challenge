import {useGetAccountQuery, useGetTransactionsQuery} from 'api';
import {PrimaryButton} from 'components';
import React from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getAddressSelector} from 'redux/slices/addressSlice';
import {getWallet} from 'redux/slices/walletSlice';
import {getTransactionByAddress} from 'services/getTransactionByAddress';

const Wallet = () => {
  const address = useSelector(getAddressSelector);
  const {isUninitialized, isLoading, isError, isSuccess, data} =
    useGetAccountQuery({address: address.bech32});

  const {isLoading: areTransactionsLoading, data: transactions} =
    useGetTransactionsQuery({address: address.bech32});

  console.log('data', data);
  console.log('isUninitialized', isUninitialized);
  console.log('isLoading', isLoading);
  console.log('isError', isError);
  console.log('isSuccess', isSuccess);

  console.log('transactions', transactions);

  if (isLoading || isUninitialized) {
    return (
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 24}}>Welcome</Text>

      {data !== undefined && (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 16, color: 'grey'}}>Address:</Text>
          <Text style={{textAlign: 'center'}}> {data?.address}</Text>
          <Text style={{fontSize: 16, color: 'grey'}}>Balance:</Text>
          <Text style={{textAlign: 'center'}}>{data?.balance}</Text>
        </View>
      )}
      <PrimaryButton label="Send transaction" onPress={() => {}} />

      <Text style={{fontSize: 16, color: 'grey', marginVertical: 12}}>
        Last 10 transactions for account:
      </Text>
      <ScrollView contentContainerStyle={{paddingHorizontal: 16}}>
        {transactions?.map(transaction => (
          <View
            key={transaction?.txHash}
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              marginVertical: 8,
            }}>
            <Text>
              <Text style={{fontSize: 16, color: 'grey'}}>Hash:</Text>
              {transaction?.txHash}
            </Text>
            <Text>
              <Text style={{fontSize: 16, color: 'grey'}}>From:</Text>
              {transaction.sender}
            </Text>
            <Text>
              <Text style={{fontSize: 16, color: 'grey'}}>To:</Text>
              {transaction.receiver}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Wallet;
