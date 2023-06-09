import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './core/axios-base-query';
import { ArticleFeedTypes } from './@types/article-feed';

interface ArticleFeedParams {
  page:number
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<ArticleFeedTypes, ArticleFeedParams>({
      query: ({page}) => ({
        url: '/articles',
        method: 'get',
        params:{
     
        offset: page
        }
      }),
    }),
  }),
});


export const {useGetGlobalFeedQuery} = feedApi
