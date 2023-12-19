import {TokenTransfer} from '@multiversx/sdk-core/out/tokenTransfer';
import {useGetAccountQuery, useGetTransactionsQuery} from 'api';
import {LoadingIndicator, PrimaryButton} from 'components';
import {WalletNavigationProp} from 'navigation/types';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getAddressSelector} from 'redux/slices/addressSlice';
import {formatTransactionDate} from 'utils';
import styles from './styles';
import Transaction from './Transaction';

const Wallet = ({navigation}: {navigation: WalletNavigationProp}) => {
  const address = useSelector(getAddressSelector);

  const {isUninitialized, isLoading, isError, isSuccess, data} =
    useGetAccountQuery({address: address});

  const {isLoading: areTransactionsLoading, data: transactions} =
    useGetTransactionsQuery({address: address});

  const onPressSendTransaction = () => {
    navigation.navigate('SendTransaction');
  };

  if (isLoading || isUninitialized) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      {data !== undefined && (
        <View>
          <Text style={{fontSize: 16, color: 'grey'}}>Address:</Text>
          <Text style={{textAlign: 'center'}}> {data?.address.toString()}</Text>
          <Text style={{fontSize: 16, color: 'grey'}}>Balance:</Text>
          <Text style={{textAlign: 'center'}}>
            {TokenTransfer.egldFromBigInteger(data?.balance).toPrettyString()}
          </Text>
        </View>
      )}
      <PrimaryButton
        label="Send transaction"
        onPress={onPressSendTransaction}
      />

      <Text style={{fontSize: 18, color: 'grey', marginVertical: 12}}>
        Last 10 transactions for account:
      </Text>
      <ScrollView contentContainerStyle={{paddingHorizontal: 16}}>
        {transactions?.map(transaction => (
          <Transaction
            key={transaction.txHash}
            hash={transaction.txHash}
            sender={transaction.sender}
            receiver={transaction.receiver}
            timestamp={transaction.timestamp}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Wallet;
