import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { movieSlice, setQueryState } from '@/store/slices/movie';
import {movieApi} from "@/api/movieApi";
import {MOVIE_TYPES} from "@/common/enums";

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
    listenerApi.dispatch(setQueryState({ isFetching: true }));
    const actionName: string = action.type.split('/')[1];
    switch (actionName) {
      case 'setFilterKey':
        if (action.payload === MOVIE_TYPES.NOW_PLAYING) {
          const data = await listenerApi.dispatch(movieApi.endpoints?.nowPlaying?.initiate?.()).unwrap();
          console.log(data);
        } else if (action.payload === MOVIE_TYPES.POPULAR) {
          listenerApi.dispatch(movieApi.endpoints?.popular?.initiate?.());
        } else if (action.payload === MOVIE_TYPES.TOP_RATED) {
          listenerApi.dispatch(movieApi.endpoints?.topRated?.initiate?.());
        }
        break;
      case 'setSearchQuery':
        // listenerApi.dispatch(movieApi.endpoints?.topRated?.initiate?.());
        break;
      default:
        break;
    }
  } catch (err) {

  }
}
export default listenerMiddleware;