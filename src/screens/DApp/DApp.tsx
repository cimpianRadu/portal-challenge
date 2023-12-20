import {PrimaryButton} from 'components';
import {DAppNavigationProp} from 'navigation/types';
import React from 'react';
import {View} from 'react-native';

const ACC = {
  account:
    '{"address":"erd1hk3hm5keqjcxzj7gjd5fsrkrqh03tjkc8qfy7q23xcck4mt5g3psevppqy","websocketEvent":null,"websocketBatchEvent":null,"accounts":{"erd1hk3hm5keqjcxzj7gjd5fsrkrqh03tjkc8qfy7q23xcck4mt5g3psevppqy":{"address":"erd1hk3hm5keqjcxzj7gjd5fsrkrqh03tjkc8qfy7q23xcck4mt5g3psevppqy","balance":"0","nonce":0,"timestamp":0,"shard":1,"txCount":0,"scrCount":0,"developerReward":"0","isGuarded":false}},"ledgerAccount":null,"publicKey":"bda37dd2d904b0614bc89368980ec305df15cad838124f015136316aed744443","walletConnectAccount":null,"isAccountLoading":false,"accountLoadingError":null,"shard":1}',
  loginInfo:
    '{"loginMethod":"walletconnectv2","walletConnectLogin":{"logoutRoute":"/unlock","loginType":"walletconnectv2","callbackRoute":"/dashboard"},"ledgerLogin":null,"tokenLogin":{"loginToken":"aHR0cHM6Ly9kZXZuZXQudGVtcGxhdGUtZGFwcC5tdWx0aXZlcnN4LmNvbQ.187defd4606481861ab133d21c576fe8a9417417076e23edd74fd497cdabc84c.86400.eyJ0aW1lc3RhbXAiOjE3MDMwMjQzODh9","signature":"3faddb94675bc66dc6dc621fd2d1fd89e3d06b7efe314b1fd633f0e28b7cdb3ec6edb36e430ac986da7e249b289acbef48e0f2edfdda74ae10a6da2700d6c609","nativeAuthToken":"ZXJkMWhrM2htNWtlcWpjeHpqN2dqZDVmc3JrcnFoMDN0amtjOHFmeTdxMjN4Y2NrNG10NWczcHNldnBwcXk.YUhSMGNITTZMeTlrWlhadVpYUXVkR1Z0Y0d4aGRHVXRaR0Z3Y0M1dGRXeDBhWFpsY25ONExtTnZiUS4xODdkZWZkNDYwNjQ4MTg2MWFiMTMzZDIxYzU3NmZlOGE5NDE3NDE3MDc2ZTIzZWRkNzRmZDQ5N2NkYWJjODRjLjg2NDAwLmV5SjBhVzFsYzNSaGJYQWlPakUzTURNd01qUXpPRGg5.3faddb94675bc66dc6dc621fd2d1fd89e3d06b7efe314b1fd633f0e28b7cdb3ec6edb36e430ac986da7e249b289acbef48e0f2edfdda74ae10a6da2700d6c609","nativeAuthConfig":{"origin":"https://devnet.template-dapp.multiversx.com","expirySeconds":86400,"apiAddress":"https://devnet-api.multiversx.com","tokenExpirationToastWarningSeconds":300,"extraInfo":{},"extraRequestHeaders":{}}},"walletLogin":null,"extensionLogin":null,"operaLogin":null,"isLoginSessionInvalid":false,"logoutRoute":"/unlock"}',
  networkConfig:
    '{"network":{"id":"devnet","chainId":"D","name":"customConfig","egldLabel":"xEGLD","decimals":"18","digits":"4","gasPerDataByte":"1500","walletConnectDeepLink":"https://maiar.page.link/?apn=com.multiversx.maiar.wallet&isi=1519405832&ibi=com.multiversx.maiar.wallet&link=https://maiar.com/","walletConnectBridgeAddress":"","walletConnectV2RelayAddress":"wss://relay.walletconnect.com","walletConnectV2ProjectId":"9b1a9564f91cb659ffe21b73d5c4e2d8","walletConnectV2Options":{},"walletAddress":"https://devnet-wallet.multiversx.com","apiAddress":"https://devnet-api.multiversx.com","explorerAddress":"http://devnet-explorer.multiversx.com","apiTimeout":6000,"walletConnectBridgeAddresses":["https://bridge.walletconnect.org"],"xAliasAddress":"https://devnet.xalias.com"},"chainID":"D"}',
};
const DApp = ({navigation}: {navigation: DAppNavigationProp}) => {
  const onPressDApp = () => {
    /**
     * update the properties of the accountObj and loginInfoObj with the current user
     * convert back to string and inject them in the local storage
     */
    const accountObj = JSON.parse(ACC.account);
    console.log('the obj', accountObj);
    const loginInfoObj = JSON.parse(ACC.loginInfo);
    console.log('the obj', loginInfoObj);
    // navigation.navigate('Webview', {
    //   uri: 'https://devnet.template-dapp.multiversx.com/',
    // });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <PrimaryButton label="Go to DApp" onPress={onPressDApp} />
    </View>
  );
};

export default DApp;
