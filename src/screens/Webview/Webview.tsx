import {WebviewScreenRouteProp} from 'navigation/types';
import React from 'react';
import {Text, View} from 'react-native';
import {WebView as RNWebview} from 'react-native-webview';

const Webview = ({route}: {route: WebviewScreenRouteProp}) => {
  const {uri} = route.params;

  if (!uri) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Invalid URL</Text>
      </View>
    );
  }
  return <RNWebview source={{uri: uri}} style={{marginTop: 20}} />;
};

export default Webview;
