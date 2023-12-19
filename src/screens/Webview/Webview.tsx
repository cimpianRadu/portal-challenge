import {WebviewScreenRouteProp} from 'navigation/types';
import React from 'react';
import {Text, View} from 'react-native';
import {WebView as RNWebview} from 'react-native-webview';

const Webview = ({route}: {route: WebviewScreenRouteProp}) => {
  const {uri} = route.params;

  function getQueryParams(url: string): Record<string, string> {
    // Extract the query string from the URL
    const queryStartIndex = url.indexOf('?');

    if (queryStartIndex === -1) {
      return {};
    }

    const queryString = url.substring(queryStartIndex + 1);

    // Split the query string into key-value pairs
    const pairs = queryString.split('&');
    const queryParams: Record<string, string> = {};

    pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      queryParams[key] = decodeURIComponent(value);
    });

    console.log(queryParams);
    return queryParams;
  }

  if (!uri) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Invalid URL</Text>
      </View>
    );
  }
  return (
    <RNWebview
      source={{uri: uri}}
      style={{marginTop: 20}}
      onMessage={event => {
        console.log('on message ', event);
      }}
      onNavigationStateChange={event => {
        console.log('what event ', event);
        if (event.url !== uri) {
          getQueryParams(event.url);
          console.log(event.url);
          // this.webview.stopLoading();
          // Linking.openURL(event.url);
        }
      }}
    />
  );
};

export default Webview;
