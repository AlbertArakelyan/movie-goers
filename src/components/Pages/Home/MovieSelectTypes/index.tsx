import React, {useState} from 'react';
import {ContainerPropTypes} from './types';
import View from './view';
import {MOVIE_TYPES} from "@/common/enums";

const MovieSelectTypesContainer: React.FC<ContainerPropTypes> = () => {
  const [movieType, setMovieType] = useState<MOVIE_TYPES>(MOVIE_TYPES.ALL);

  const onChange = (e) => {
    setMovieType(e.target.value);
  }

  return <View selectedValue={movieType} onChange={onChange} />
}
export default React.memo(MovieSelectTypesContainer);