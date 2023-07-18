import {createListenerMiddleware} from '@reduxjs/toolkit';
import {movieSlice, setQueryState, setSearchValue} from '@/store/slices/movie';
import {movieApi} from "@/api/movieApi";
import {MOVIE_TYPES} from "@/common/enums";
import {IMovie} from "@/common/interfaces";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: movieSlice.actions.setFilterState,
  effect: async (action: { type: string, payload: any }, listenerApi) => {
    listenerApi.cancelActiveListeners();
    await fetchAppropriateApi(action, listenerApi);
  }
});

async function fetchAppropriateApi(action: { type: string, payload: any }, listenerApi: any) {
  try {
    listenerApi.dispatch(setQueryState({ isFetching: true, data: [] }));
    let data: Array<IMovie> = [];
    let apiName: string | null = null;
    let query: string | undefined;
    switch (action.payload.key) {
      case 'category':
        if (action.payload.value === MOVIE_TYPES.NOW_PLAYING) {
          apiName = 'nowPlaying';
        } else if (action.payload.value === MOVIE_TYPES.POPULAR) {
          apiName = 'popular';
        } else if (action.payload.value === MOVIE_TYPES.TOP_RATED) {
          apiName = 'topRated';
        }

        break;
      case 'search':
        query = action.payload.value;
        apiName = 'search';
        break;
      default:
        break;
    }
    if(apiName) {
      if(apiName === 'search' && query === '') {
        apiName = 'nowPlaying';
        query = '';
      }
      const { results } = await listenerApi.dispatch(movieApi.endpoints?.[apiName]?.initiate?.(query)).unwrap();
      data = results;
    }
    listenerApi.dispatch(setQueryState({ isFetching: false, data }));
  } catch (err) {
    console.error(err);
    listenerApi.dispatch(setQueryState({ isFetching: false, error: 'Something went wrong!' }));
  }
}
export default listenerMiddleware;