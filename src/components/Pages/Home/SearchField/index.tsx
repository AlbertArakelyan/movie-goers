import React, {useCallback, useEffect, useState} from 'react';
import {useDebounce} from "react-use";
import {ContainerPropTypes} from './types';
import View from './view';
import {selectMovieFilters, setFilterKey, setFilterState, setSearchValue} from "@/store/slices/movie";
import {useRTKDispatch, useRTKSelector} from "@/store/hooks";
import {MOVIE_TYPES} from "@/common/enums";

const SearchFieldContainer: React.FC<ContainerPropTypes> = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useRTKDispatch();
  const { searchQuery } = useRTKSelector(selectMovieFilters);

  const [, cancel] = useDebounce(
    () => {
      dispatch(setSearchValue(value));
      dispatch(setFilterKey(MOVIE_TYPES.NOW_PLAYING));
      dispatch(setFilterState({
        key: 'search',
        value,
      }));
    },
    500,
    [value]
  );

  const onTyping = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    setValue(searchQuery);
  }, [searchQuery]);

  useEffect(() => () => {
    cancel();
  });

  return <View onTyping={onTyping} value={value} />
}
export default React.memo(SearchFieldContainer);