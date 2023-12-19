import React from 'react';
import Button from 'components/Button';
import {PressableProps, StyleProp, Text, View, ViewProps} from 'react-native';
import styles from './styles';

const LinkButton = ({
  label,
  style,
  ...props
}: PressableProps & {
  label: string;
  style?: StyleProp<ViewProps>;
}) => {
  return (
    <Button {...props}>
      <View style={[style, styles.buttonContainer]}>
        <Text>{label}</Text>
      </View>
    </Button>
  );
};

export default LinkButton;
