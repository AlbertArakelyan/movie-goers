import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import {MOVIE_TYPES} from "@/common/enums";
import {IMovie} from "@/common/interfaces";

export interface IQueryState {
  isFetching: boolean,
  data?: Array<IMovie>,
  error?: string,
}
interface IMovieState {
  queryState: IQueryState,
  filterKey: MOVIE_TYPES;
  searchQuery: string;
}

const initialState: IMovieState = {
  queryState: {
    isFetching: false,
    data: [],
  },
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
    setQueryState: (state: IMovieState, { payload }: PayloadAction<IQueryState>) => {
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