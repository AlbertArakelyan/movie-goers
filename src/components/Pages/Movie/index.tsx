import {useEffect} from 'react';
import {useRouter} from 'next/router';
import View from './view';
import {useLazyGetMovieQuery} from '@/api/movieApi';

const MovieContainer = () => {
  const router = useRouter()

  const [getMovie] = useLazyGetMovieQuery();

  useEffect(() => {
    getMovie('444')
  }, []);

  return (
    <View />
  );
};

export default MovieContainer;