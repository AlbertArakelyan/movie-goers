import {FC} from 'react';
import Image from 'next/image';
import {
  Box,
  Container,
  HStack,
  VStack,
  Text,
  Divider,
} from '@chakra-ui/react';
import MovieProperty from './components/MovieProperty';
import {IMovieViewProps} from './types';

const Movie: FC<IMovieViewProps> = ({
  title,
  tagline,
  overview,
  poster_path,
  release_date,
  budget,
  production_companies,
  genres,
  homepage,
  isLoading,
}) => {

  const productionCompaniesContent = (
    <div>
      {production_companies && production_companies.map((company, index, array) => {
        return (
          <span key={company.id}>{company.name}{company.origin_country && `(${company.origin_country})`}{index !== array.length - 1 && ','} </span>
        );
      })}
    </div>
  );

  const genresContent = (
    <div>
      {genres && genres.map((genre, index, array) => {
        return (
          <span key={genre.id}>{genre.name}{index !== array.length - 1 && ','} </span>
        )
      })}
    </div>
  );

  const homepageContent = (
    <a href={homepage} target="_blank">{homepage}</a>
  );

  return (
    <Container maxW="4xl" mt="4">
      <HStack align="start">
        <Box width="40%">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            width={500}
            height={500}
            alt="movie"
            style={{width: '100%'}}
          />
        </Box>
        <Box width="60%">
          <VStack>
            <VStack>
              <Text as="h1" fontSize="4xl" fontWeight="semibold">
                {title}
              </Text>
              <Text as="h2" fontSize="3xl" fontWeight="semibold">
                {tagline}
              </Text>
            </VStack>
            <Text>
              {overview}
            </Text>
            <Divider />
            <VStack alignItems="start" width="full">
              <MovieProperty propertyKey="Relase date" value={release_date || ''} />
              <MovieProperty propertyKey="Budget" value={budget?.toString() || ''} />
              <MovieProperty propertyKey="Production Companies" value={productionCompaniesContent || ''} />
              <MovieProperty propertyKey="Genres" value={ genresContent || ''} />
              {homepage && <MovieProperty propertyKey="Homepage" value={homepageContent}/>}
            </VStack>
          </VStack>
        </Box>
      </HStack>
    </Container>
  );
};

export default Movie;
