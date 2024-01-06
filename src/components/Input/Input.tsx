import React from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import styles from './styles';

const Input = ({
  label,
  labelStyle,
  errorMessage,
  ...props
}: TextInputProps & {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
}) => {
  return (
    <>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput style={styles.input} {...props} />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </>
  );
};

export default Input;
