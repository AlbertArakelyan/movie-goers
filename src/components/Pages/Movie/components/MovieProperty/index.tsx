import {FC} from 'react';
import View from './view';
import {IMoviePropertyContainerProps} from './types';

const MoviePropertyContainer: FC<IMoviePropertyContainerProps> = ({propertyKey, value}) => {
  return <View propertyKey={propertyKey} value={value} />
};

export default MoviePropertyContainer;
