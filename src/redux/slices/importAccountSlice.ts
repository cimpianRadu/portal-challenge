import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';

type ImportAccountState = {
  isAccountImported: boolean;
};

const initialState: ImportAccountState = {
  isAccountImported: false,
};

const slice = createSlice({
  name: 'importAccount',
  initialState,
  reducers: {
    setAccountImported(state, action: PayloadAction<boolean>) {
      state.isAccountImported = action.payload;
    },
  },
});

export const {setAccountImported} = slice.actions;

export default slice.reducer;

export const getAccountImportedSelector = (state: RootState) =>
  state.importAccount.isAccountImported;
