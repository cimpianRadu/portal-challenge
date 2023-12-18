import {AccountOnNetwork} from '@multiversx/sdk-network-providers/out';
import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';
import {importWalletFromMnemonic} from 'services/importWallet';

type WalletState = {
  wallet: AccountOnNetwork | null;
  status: 'IDLE' | 'LOADING' | 'FAILED' | 'SUCCESS';
};

const initialState: WalletState = {
  wallet: null,
  status: 'IDLE',
};

export const initWallet = createAsyncThunk(
  'wallet/init',
  async (payload: {mnemonic: string}) => {
    const {mnemonic} = payload;
    const res = await importWalletFromMnemonic({mnemonic});
    return res.wallet;
  },
);

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(initWallet.fulfilled, (state, action) => {
      state.wallet = action.payload;
      state.status = 'SUCCESS';
    });

    builder.addCase(initWallet.rejected, state => {
      state.status = 'FAILED';
    });

    builder.addCase(initWallet.pending, state => {
      state.status = 'LOADING';
    });
  },
});

export default walletSlice.reducer;

export const getInitWalletStatus = createSelector(
  (state: RootState) => state.wallet.status,
  status => status,
);

export const getWallet = createSelector(
  (state: RootState) => state.wallet.wallet,
  wallet => wallet,
);
