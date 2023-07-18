import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import {MOVIE_TYPES} from "@/common/enums";
import {IMovie} from "@/common/interfaces";

export interface IQueryState {
  isFetching: boolean,
  data?: Array<IMovie>,
  error?: string,
}
interface FilterState {
  key: 'search' | 'category',
  value: string
}
interface IMovieState {
  queryState: IQueryState,
  filterKey: MOVIE_TYPES;
  searchQuery: string;
  filterState: FilterState,
}

const initialState: IMovieState = {
  queryState: {
    isFetching: true,
    data: [],
  },
  filterKey: MOVIE_TYPES.NOW_PLAYING,
  searchQuery: '',
  filterState: {
    key: 'category',
    value: MOVIE_TYPES.NOW_PLAYING,
  }
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
    setFilterState: (state: IMovieState, { payload }: PayloadAction<FilterState>) => {
      state.filterState = payload;
    },
    setQueryState: (state: IMovieState, { payload }: PayloadAction<IQueryState>) => {
      state.queryState = payload;
    },
  },
});

export default movieSlice;
export const { setFilterState, setQueryState, setFilterKey, setSearchValue } = movieSlice.actions;
const selectMovie = state => state.movie;
export const selectMovieFilters = createSelector(
  selectMovie,
  ({filterKey, searchQuery}) => ({ filterKey, searchQuery })
);
export const selectMovieQueryState = createSelector(
  selectMovie,
  ({ queryState }) => queryState
);