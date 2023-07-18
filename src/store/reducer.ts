import {combineReducers} from "redux";
import movieReducer from '@/store/slices/movie';
import {movieApi} from '@/api/movieApi';

const reducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
  [movieReducer.name]: movieReducer.reducer,
});

export default reducer;
