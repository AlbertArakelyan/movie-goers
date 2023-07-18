import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import {MOVIE_TYPES} from "@/common/enums";

interface IMovieState {
  queryState: { [key: string]: any } | null,
  filterKey: MOVIE_TYPES;
  searchQuery: string;
}

const initialState: IMovieState = {
  queryState: null,
  filterKey: MOVIE_TYPES.ALL,
  searchQuery: '',
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setFilterKey: (state: IMovieState, { payload }: PayloadAction<MOVIE_TYPES>) => {
      state.filterKey = payload;
    },
    setSearchValue: (state: IMovieState, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
    setQueryState: (state: IMovieState, { payload }: PayloadAction<any>) => {
      state.queryState = payload;
    },
  },
});

export default movieSlice;
export const { setQueryState, setFilterKey, setSearchValue } = movieSlice.actions;
const selectMovie = state => state.movie;
export const selectMovieFilters = createSelector(
  selectMovie,
  ({filterKey, searchQuery}) => ({ filterKey, searchQuery })
);
export const selectMovieQueryState = createSelector(
  selectMovie,
  ({ queryState }) => queryState
);