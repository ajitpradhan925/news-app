// endpoints.ts
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.example.com'}),
  endpoints: builder => ({
    fetchData: builder.query<any, void>({
      query: () => 'data',
    }),
  }),
});

export const {useFetchDataQuery} = api;
