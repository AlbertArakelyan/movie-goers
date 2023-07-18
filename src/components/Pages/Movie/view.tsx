import Image from 'next/image';
import {Box, Container, HStack, VStack, Text, Divider} from '@chakra-ui/react';
import MovieProperty from './components/MovieProperty';
import {IMovieViewProps} from './types';

const Movie = () => {
  return (
    <Box>
      <Container maxW="4xl">
        <HStack align="start">
          <Box width="40%">
            <Image
              src="https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg"
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
                  The Shawshank Redemption
                </Text>
                <Text as="h2" fontSize="3xl" fontWeight="semibold">
                  Hell or High Water
                </Text>
              </VStack>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores consequuntur eos eum impedit libero nesciunt perspiciatis quo sequi sint!
              </Text>
              <Divider />
              <VStack justify="start">
                <MovieProperty propertyKey="Relase date" value="1972-12-13" />
              </VStack>
            </VStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Movie;
