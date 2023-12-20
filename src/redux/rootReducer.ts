import {combineReducers} from '@reduxjs/toolkit';
import mnemonicReducer from './slices/mnemonicSlice';
import addressReducer from './slices/addressSlice';
import transactionReducer from './slices/transactionSlice';
import signTransactionModalReducer from './slices/signTransactionModalSlice';
import importAccountReducer from './slices/importAccountSlice';
import {api} from 'api';

export const rootReducer = combineReducers({
  mnemonic: mnemonicReducer,
  address: addressReducer,
  trasaction: transactionReducer,
  signTransactionModal: signTransactionModalReducer,
  importAccount: importAccountReducer,
  [api.reducerPath]: api.reducer,
});
