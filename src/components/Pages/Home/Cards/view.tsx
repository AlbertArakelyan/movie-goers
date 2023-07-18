import React from 'react';
import {HStack} from '@chakra-ui/react';
import {ViewPropTypes} from './types';
import Card from '../Card';

const CardsView: React.FC<ViewPropTypes> = ({list}) => (<HStack spacing={5}>
  {list.map(movie => <Card key={movie.id} data={movie} />)}
</HStack>);
export default CardsView;