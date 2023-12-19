import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';

type AddressState = {
  address: string;
  status: 'IDLE' | 'LOADING' | 'FAILED' | 'SUCCESS';
};

const initialState: AddressState = {
  address: '',
  status: 'IDLE',
};

const slice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
  },
});

export const {setAddress} = slice.actions;

export default slice.reducer;

export const getAddressSelector = (state: RootState) => state.address.address;
