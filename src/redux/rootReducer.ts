import {combineReducers} from '@reduxjs/toolkit';
import mnemonicReducer from './slices/mnemonicSlice';
import addressReducer from './slices/addressSlice';
import {api} from 'api';

export const rootReducer = combineReducers({
  mnemonic: mnemonicReducer,
  address: addressReducer,
  [api.reducerPath]: api.reducer,
});
