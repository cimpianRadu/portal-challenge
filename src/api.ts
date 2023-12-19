import {
  AccountOnNetwork,
  ApiNetworkProvider,
} from '@multiversx/sdk-network-providers';
import {Account} from '@multiversx/sdk-core';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiNetworkProvider = new ApiNetworkProvider(
  'https://devnet-api.multiversx.com',
);

export const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'https://devnet-api.multiversx.com'}),
  endpoints: builder => ({
    getAccount: builder.query<AccountOnNetwork, {address: string}>({
      query: ({address}) => `accounts/${address}`,
    }),
    getTransactions: builder.query({
      query({address}) {
        return {
          url: `accounts/${address}/transactions`,
          params: {
            size: 10,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
    }),
  }),
});

export const {
  useGetAccountQuery,
  useLazyGetAccountQuery,
  useGetTransactionsQuery,
} = api;
