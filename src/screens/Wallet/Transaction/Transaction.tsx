import React from 'react';
import {Text, View} from 'react-native';
import {formatTransactionDate} from 'utils';
import styles from './styles';

const Transaction = ({
  hash,
  sender,
  receiver,
  timestamp,
}: {
  hash: string;
  sender: string;
  receiver: string;
  timestamp: number;
}) => {
  return (
    <View
      style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 8,
      }}>
      <Text>
        <Text style={styles.label}>Hash:</Text>
        {hash}
      </Text>
      <Text>
        <Text style={styles.label}>From:</Text>
        {sender}
      </Text>
      <Text>
        <Text style={styles.label}>To:</Text>
        {receiver}
      </Text>
      <Text>
        <Text style={styles.label}>When:</Text>
        {formatTransactionDate(timestamp)}
      </Text>
    </View>
  );
};

export default Transaction;
