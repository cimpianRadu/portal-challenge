import {WebviewScreenRouteProp} from 'navigation/types';
import React from 'react';
import {Text, View} from 'react-native';
import {WebView as RNWebview, WebViewNavigation} from 'react-native-webview';
import {useAppDispatch} from 'redux/hooks';
import {setIsOpen} from 'redux/slices/signTransactionModalSlice';
import {setTransactionInput} from 'redux/slices/transactionSlice';

const Webview = ({route}: {route: WebviewScreenRouteProp}) => {
  const {uri} = route.params;
  const dispatch = useAppDispatch();
  const webviewRef = React.useRef<RNWebview>(null);

  React.useEffect(() => {
    const script = `
    localStorage.setItem('account', 'value');
    true; // note: this line is important to avoid warnings on iOS
  `;
    if (webviewRef.current) {
      webviewRef.current.injectJavaScript(script);
    }
  }, []);

  const onNavigationStateChange = (event: WebViewNavigation) => {
    if (event.url.includes('hook/transaction')) {
      dispatch(setIsOpen(true));
      const {data, gasLimit, receiver, value} = getQueryParams(event.url);
      dispatch(setTransactionInput({data, gasLimit, receiver, value}));
    }
  };

  const getQueryParams = (url: string): Record<string, string> => {
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
  };

  if (!uri) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Invalid URL</Text>
      </View>
    );
  }
  return (
    <RNWebview
      ref={webviewRef}
      source={{uri: uri}}
      style={{marginTop: 20}}
      onMessage={event => {
        console.log('on message ', event);
      }}
      onNavigationStateChange={onNavigationStateChange}
    />
  );
};

export default Webview;
