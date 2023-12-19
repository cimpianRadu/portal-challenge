import React from 'react';
import Button from 'components/Button';
import {PressableProps, StyleProp, Text, View, ViewProps} from 'react-native';
import styles from './styles';

const PrimaryButton = ({
  label,
  style,
  disabled,
  ...props
}: PressableProps & {
  label: string;
  style?: StyleProp<ViewProps>;
}) => {
  return (
    <Button {...props} style={[style, disabled && {opacity: 0.4}]}>
      <View style={[style, styles.buttonContainer]}>
        <Text>{label}</Text>
      </View>
    </Button>
  );
};

export default PrimaryButton;
