import React from 'react';
import {Grid, GridItem} from '@chakra-ui/react';
import {ViewPropTypes} from './types';
import SearchField from '../SearchField';
import MovieSelectTypes from '../MovieSelectTypes';

const FiltersView: React.FC<ViewPropTypes> = () => (<Grid templateColumns="3fr 1fr" gap={3}>
  <GridItem>
    <SearchField />
  </GridItem>
  <GridItem>
    <MovieSelectTypes />
  </GridItem>
</Grid>)
export default FiltersView;