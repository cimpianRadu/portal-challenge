import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';

type SignTransactionModalState = {
  isOpen: boolean;
};

const initialState: SignTransactionModalState = {
  isOpen: false,
};

const slice = createSlice({
  name: 'signTransactionModal',
  initialState,
  reducers: {
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const {setIsOpen} = slice.actions;

export default slice.reducer;

export const getIsOpenSelector = (state: RootState) =>
  state.signTransactionModal.isOpen;
