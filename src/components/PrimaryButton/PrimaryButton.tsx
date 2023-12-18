import React from 'react';
import Button from 'components/Button';
import {PressableProps, StyleProp, Text, ViewProps} from 'react-native';

const PrimaryButton = ({
  label,
  style,
  ...props
}: PressableProps & {
  label: string;
  style?: StyleProp<ViewProps>;
}) => {
  return (
    <Button
      {...props}
      style={[
        style,
        {
          padding: 8,
          alignSelf: 'flex-start',
          borderRadius: 4,
          backgroundColor: 'cyan',
        },
      ]}>
      <Text>{label}</Text>
    </Button>
  );
};

export default PrimaryButton;
