import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './core/axios-base-query';
import { ArticleFeedTypes } from './@types/article-feed';

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<ArticleFeedTypes, any>({
      query: () => ({
        url: '/articles',
        method: 'get',
      }),
    }),
  }),
});


export const {useGetGlobalFeedQuery} = feedApi
