import React from 'react';
import {Grid, GridItem} from '@chakra-ui/react';
import {ViewPropTypes} from './types';
import Card from '../Card';

const CardsView: React.FC<ViewPropTypes> = ({list}) => (<Grid gap={5} templateColumns="repeat(3, 1fr)">
  {list.map(movie => <GridItem key={movie.id}>
    <Card data={movie} />
  </GridItem>)}
</Grid>);
export default CardsView;