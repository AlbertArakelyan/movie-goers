import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {IMovieViewProps} from '@/components/Pages/Movie/types';

const baseUrl = 'https://api.themoviedb.org/3/';
const movieApiHeaders = {
  accept: 'application/json',
};

const createRequest = (url: string) => ({url: `${url}?api_key=f4ae22d790547b2c3a398a0e3952f3ae`, headers: movieApiHeaders});

export const movieApi= createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    nowPlaying: builder.query({
      query: () => createRequest('movie/now_playing'),
    }),
    topRated: builder.query({
      query: () => createRequest('movie/top_rated'),
    }),
    popular: builder.query({
      query: () => createRequest('movie/popular'),
    }),
    search: builder.query({
      query: (query) => createRequest(`search/movie?query=${query}`),
    }),
    getMovie: builder.query({
      query: (id) => createRequest(`movie/${id}`),
    }),
  }),
});

export const {
  useGetMovieQuery,
  useLazyGetMovieQuery
} = movieApi;
