import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {HStack, Spinner} from "@chakra-ui/react";
import View from './view';
import {useLazyGetMovieQuery} from '@/api/movieApi';

const MovieContainer = () => {
  const router = useRouter()
  const [getMovie, {data, error, isLoading}] = useLazyGetMovieQuery();

  const handleGetMovie = async () => {
    await getMovie(router.query.id);
  }

  useEffect(() => {
    handleGetMovie();
  }, []);

  useEffect(() => {
    console.log(data)
  }, [data]);

  if (!data || isLoading) {
    return <HStack mt="4" justifyContent="center">
      <Spinner />
    </HStack>
  }

  return (
    <View
      title={data.title}
      tagline={data.tagline}
      overview={data.overview}
      poster_path={data.poster_path}
      release_date={data.release_date}
      budget={data.budget}
      production_companies={data.production_companies}
      genres={data.genres}
      homepage={data.homepage}
      isLoading={isLoading}
    />
  );
};

export default MovieContainer;
