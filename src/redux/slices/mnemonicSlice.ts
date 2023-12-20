import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';

const initialState = {
  mnemonic: '',
};

const slice = createSlice({
  name: 'mnemonic',
  initialState,
  reducers: {
    setMnemonic(state, action: PayloadAction<string>) {
      state.mnemonic = action.payload;
    },
  },
});

export const {setMnemonic} = slice.actions;

export default slice.reducer;

export const getMnemonicSelector = (state: RootState) =>
  state.mnemonic.mnemonic;
