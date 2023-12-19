import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WalletStackNavigator from '../Stacks/WalletStack';
import {Text} from 'react-native';
import DAppStackNavigator from '../Stacks/DAppStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarIconStyle: {fontSize: 50},
          tabBarIcon() {
            return <Text style={{fontSize: 28}}>💳</Text>;
          },
          tabBarLabel: 'Wallet',
        }}
        name="WalletStack"
        component={WalletStackNavigator}
      />
      <Tab.Screen
        name="DApp"
        options={{
          tabBarIconStyle: {fontSize: 50},
          tabBarIcon() {
            return <Text style={{fontSize: 28}}>↗️</Text>;
          },
          tabBarLabel: 'DApp',
        }}
        component={DAppStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
