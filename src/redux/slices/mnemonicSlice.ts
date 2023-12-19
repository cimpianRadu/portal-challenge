import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';

const initialState = {
  mnemonic: '',
  password: '',
};

const slice = createSlice({
  name: 'mnemonic',
  initialState,
  reducers: {
    setMnemonic(state, action: PayloadAction<string>) {
      state.mnemonic = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

export const {setMnemonic, setPassword} = slice.actions;

export default slice.reducer;

export const getMnemonicSelector = (state: RootState) =>
  state.mnemonic.mnemonic;
