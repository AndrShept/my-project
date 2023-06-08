import { createApi } from '@reduxjs/toolkit/query';
import { axiosBaseQuery } from './core/axios-base-query';

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api/articles',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query({
      query: () => ({
        url: '/article',
        method: 'get',
      }),
    }),
  }),
});
