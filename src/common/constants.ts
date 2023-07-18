import {MOVIE_TYPES} from "@/common/enums";
import {IMovieSelectItem} from "@/common/interfaces";

export const MOVIE_SELECT_ITEMS: Record<keyof typeof MOVIE_TYPES, IMovieSelectItem> = {
  NOW_PLAYING: { value: MOVIE_TYPES.NOW_PLAYING, label: 'Now Playing' },
  TOP_RATED: { value: MOVIE_TYPES.TOP_RATED, label: 'Top rated' },
  POPULAR: { value: MOVIE_TYPES.POPULAR, label: 'Popular' },
}