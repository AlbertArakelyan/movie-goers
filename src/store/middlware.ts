import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { movieSlice, setQueryState } from '@/store/slices/movie';
import {movieApi} from "@/api/movieApi";
import {MOVIE_TYPES} from "@/common/enums";
import {IMovie} from "@/common/interfaces";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(movieSlice.actions.setSearchValue, movieSlice.actions.setFilterKey),
  effect: async (action: { type: string, payload: any }, listenerApi) => {
    listenerApi.cancelActiveListeners();
    await fetchAppropriateApi(action, listenerApi);
  }
});

async function fetchAppropriateApi(action: { type: string, payload: any }, listenerApi: any) {
  try {
    listenerApi.dispatch(setQueryState({ isFetching: true, data: [] }));
    const actionName: string = action.type.split('/')[1];
    let data: Array<IMovie> = [];
    switch (actionName) {
      case 'setFilterKey':
        let apiName: string | null = null;
        if (action.payload === MOVIE_TYPES.NOW_PLAYING) {
          apiName = 'nowPlaying';
        } else if (action.payload === MOVIE_TYPES.POPULAR) {
          apiName = 'popular';
        } else if (action.payload === MOVIE_TYPES.TOP_RATED) {
          apiName = 'topRated';
        }
        if(apiName) {
          const { results } = await listenerApi.dispatch(movieApi.endpoints?.[apiName]?.initiate?.()).unwrap();
          data = results;
        }
        break;
      case 'setSearchQuery':
        // listenerApi.dispatch(movieApi.endpoints?.topRated?.initiate?.());
        break;
      default:
        break;
    }
    listenerApi.dispatch(setQueryState({ isFetching: false, data }));
  } catch (err) {
    console.error(err);
    listenerApi.dispatch(setQueryState({ isFetching: false, error: 'Something went wrong!' }));
  }
}
export default listenerMiddleware;