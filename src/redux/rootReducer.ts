import {combineReducers} from '@reduxjs/toolkit';
import walletReducer from './slices/walletSlice';
import mnemonicReducer from './slices/mnemonicSlice';
import addressReducer from './slices/addressSlice';
import {api} from 'api';

export const rootReducer = combineReducers({
  wallet: walletReducer,
  mnemonic: mnemonicReducer,
  address: addressReducer,
  [api.reducerPath]: api.reducer,
});
