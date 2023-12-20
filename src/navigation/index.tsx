import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './BottomTab';
import SignTransaction from 'modals/SignTransaction';

const Navigation = () => {
  return (
    <NavigationContainer>
      <>
        <BottomTab />
        <SignTransaction />
      </>
    </NavigationContainer>
  );
};

export default Navigation;
