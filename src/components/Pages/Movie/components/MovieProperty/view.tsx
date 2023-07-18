import {FC} from 'react';
import {HStack, Text} from '@chakra-ui/react';
import {IMoviePropertyViewProps} from './types';

const MoviePropertyView: FC<IMoviePropertyViewProps> = ({propertyKey, value}) => {
  return (
    <HStack>
      <Text>{propertyKey}: </Text>
      <Text>{value}</Text>
    </HStack>
  );
};

export  default MoviePropertyView;
