import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WalletStackNavigator from '../Stacks/WalletStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="WalletStack" component={WalletStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTab;
