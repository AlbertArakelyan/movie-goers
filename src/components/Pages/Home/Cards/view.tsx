import React from 'react';
import {Box, Grid, GridItem, Spinner, Text} from '@chakra-ui/react';
import {ViewPropTypes} from './types';
import Card from '../Card';

const CardsView: React.FC<ViewPropTypes> = ({list, error, isFetching}) =>
  isFetching
    ? <Box display="flex" justifyContent="center" py={5}>
      <Spinner size="md" color="gray"/>
    </Box>
    : error
      ? <Text color="tomato" textAlign="center" py={5}>{error}</Text>
      : !list.length
        ? <Text color="gray" textAlign="center" py={5}>No Data</Text>
        : (
          <Grid gap={5} templateColumns="repeat(3, 1fr)">
            {list.map(movie => <GridItem key={movie.id}>
              <Card data={movie}/>
            </GridItem>)}
          </Grid>
        );
export default CardsView;