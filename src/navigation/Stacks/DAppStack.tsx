import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {DApp, Webview} from 'screens';

const stackScreenOptions = {
  headerMode: 'screen',
  headerBackVisible: true,
  headerBackTitle: 'Back',
  gestureEnabled: true,
} as NativeStackNavigationOptions;

const DAppStack = createNativeStackNavigator<RootStackParamList>();

const DAppStackNavigator = () => {
  return (
    <DAppStack.Navigator screenOptions={stackScreenOptions}>
      <DAppStack.Screen
        name="DApp"
        component={DApp}
        options={{title: 'DApp'}}
      />

      <DAppStack.Screen name="Webview" component={Webview} />
    </DAppStack.Navigator>
  );
};

export default DAppStackNavigator;
