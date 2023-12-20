import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './BottomTab';
import SignTransaction from 'modals/SignTransaction';
import {useSelector} from 'react-redux';
import {ImportWallet} from 'screens';
import {getAccountImportedSelector} from 'redux/slices/importAccountSlice';

const Navigation = () => {
  const isAccountImported = useSelector(getAccountImportedSelector);

  return (
    <NavigationContainer>
      {!isAccountImported ? (
        <ImportWallet />
      ) : (
        <>
          <BottomTab />
          <SignTransaction />
        </>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
