import React from 'react';
import {ContainerPropTypes} from './types';
import View from './view';
import {selectMovieFilters, setFilterKey, setFilterState, setSearchValue} from "@/store/slices/movie";
import {useRTKDispatch, useRTKSelector} from "@/store/hooks";

const MovieSelectTypesContainer: React.FC<ContainerPropTypes> = () => {
  const dispatch = useRTKDispatch();
  const { filterKey } = useRTKSelector(selectMovieFilters);

  const onChange = (e) => {
    dispatch(setFilterKey(e.target.value));
    dispatch(setSearchValue(''));
    dispatch(setFilterState({
      key: 'category',
      value: e.target.value,
    }));
  }

  return <View selectedValue={filterKey} onChange={onChange} />
}
export default React.memo(MovieSelectTypesContainer);