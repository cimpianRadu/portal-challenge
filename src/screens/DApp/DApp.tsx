import {PrimaryButton} from 'components';
import {DAppNavigationProp} from 'navigation/types';
import React from 'react';
import {Text, View} from 'react-native';

const DApp = ({navigation}: {navigation: DAppNavigationProp}) => {
  const onPressDApp = () => {
    navigation.navigate('Webview', {
      uri: 'https://devnet.template-dapp.multiversx.com/',
    });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <PrimaryButton label="Go to DApp" onPress={onPressDApp} />
    </View>
  );
};

export default DApp;
