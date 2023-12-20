import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';

type TransactionInput = {
  data: string;
  value: string;
  receiver: string;
  gasLimit: string;
};

type TransactionState = {
  transaction: TransactionInput | null;
};

const initialState: TransactionState = {
  transaction: null,
};

const slice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransactionInput(state, action: PayloadAction<TransactionInput>) {
      state.transaction = action.payload;
    },
  },
});

export const {setTransactionInput} = slice.actions;

export default slice.reducer;

export const getTransactionInputSelector = (state: RootState) =>
  state.trasaction.transaction;
