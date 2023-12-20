import {combineReducers} from '@reduxjs/toolkit';
import mnemonicReducer from './slices/mnemonicSlice';
import addressReducer from './slices/addressSlice';
import transactionReducer from './slices/transactionSlice';
import signTransactionModalReducer from './slices/signTransactionModalSlice';
import {api} from 'api';

export const rootReducer = combineReducers({
  mnemonic: mnemonicReducer,
  address: addressReducer,
  trasaction: transactionReducer,
  signTransactionModal: signTransactionModalReducer,
  [api.reducerPath]: api.reducer,
});
