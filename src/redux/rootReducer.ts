import {combineReducers} from '@reduxjs/toolkit';
import walletReducer from './slices/walletSlice';
import mnemonicReducer from './slices/mnemonicSlice';

export const rootReducer = combineReducers({
  wallet: walletReducer,
  mnemonic: mnemonicReducer,
});
