import {AccountOnNetwork} from '@multiversx/sdk-network-providers';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from './constants';
import {RootState} from 'redux/store';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: builder => ({
    getAccount: builder.query<AccountOnNetwork, {address: string}>({
      query: ({address}) => `accounts/${address}`,
    }),
    getTransactions: builder.query<unknown[], {address: string}>({
      query({address}) {
        return {
          url: `accounts/${address}/transactions`,
          params: {
            size: 10,
          },
        };
      },
    }),
    getNonceByAddress: builder.query<number, {address: string}>({
      query({address}) {
        return {
          url: `accounts/${address}`,
        };
      },
      keepUnusedDataFor: 0,
      transformResponse(response: AccountOnNetwork): number {
        return response.nonce;
      },
    }),
    sendTransaction: builder.mutation({
      query: ({transaction}) => ({
        url: 'transactions',
        method: 'POST',
        body: transaction,
      }),
    }),
    getTransactionStatus: builder.query({
      query: ({hash}) => `transactions/${hash}`,
    }),
  }),
});

export const {
  useGetAccountQuery,
  useLazyGetAccountQuery,
  useGetTransactionsQuery,
  useSendTransactionMutation,
  useLazyGetNonceByAddressQuery,
  useGetTransactionStatusQuery,
} = api;

export const getAccountSelector = (state: RootState) =>
  state.api.queries['getAccount'];
