import {AccountOnNetwork} from '@multiversx/sdk-network-providers';

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from './constants';
import {Transaction} from '@multiversx/sdk-core/out';

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
    getTransactions: builder.query<Transaction[], {address: string}>({
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
          url: `accounts/${address}/nonce`,
        };
      },
      transformResponse(response: AccountOnNetwork): number {
        return response.nonce;
      },
    }),
  }),
});

export const {
  useGetAccountQuery,
  useLazyGetAccountQuery,
  useGetTransactionsQuery,
} = api;
