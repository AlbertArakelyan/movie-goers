import {createSlice} from '@reduxjs/toolkit';

enum FILTERS {
  NOW_PLAYING = 'NOW_PLAYING',
  POPULAR = 'POPULAR',
  TOP_RATED = 'TOP_RATED',
};

interface IMovieState {
  filter: FILTERS;
}

const initialState: IMovieState = {
  filter: FILTERS.NOW_PLAYING,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
});

export default movieSlice;
