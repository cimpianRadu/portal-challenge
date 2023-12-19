import React from 'react';
import Button from 'components/Button';
import {PressableProps, StyleProp, Text, View, ViewProps} from 'react-native';

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

          borderRadius: 4,
          backgroundColor: 'cyan',
        },
      ]}>
      <View style={{alignSelf: 'flex-start'}}>
        <Text>{label}</Text>
      </View>
    </Button>
  );
};

export default PrimaryButton;
