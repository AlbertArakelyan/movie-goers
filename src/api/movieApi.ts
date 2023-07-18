import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.themoviedb.org/3/movie/';
const movieApiHeaders = {
  accept: 'application/json',
};

const createRequest = (url: string) => ({url, headers: movieApiHeaders});

export const movieApi= createApi({
  reducerPath: 'movie',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    nowPlaying: builder.query({
      query: () => createRequest('now_playing'),
    }),
    topRated: builder.query({
      query: () => createRequest('top_rated'),
    }),
    popular: builder.query({
      query: () => createRequest('popular'),
    }),
    getMovie: builder.query({
      query: (id) => createRequest(id),
    }),
  }),
});

export const {
  useNowPlayingQuery,
  useTopRatedQuery,
  usePopularQuery,
  useLazyGetMovieQuery,
} = movieApi;
