import React from 'react';
import {Pressable, PressableProps} from 'react-native';

const Button = ({children, onPress, ...props}: PressableProps) => {
  return (
    <Pressable onPress={onPress} {...props}>
      {children}
    </Pressable>
  );
};

export default Button;
