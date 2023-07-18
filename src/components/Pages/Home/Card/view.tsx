import React from 'react';
import {Box, Icon, HStack, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button, ButtonGroup} from '@chakra-ui/react';
import { MdCalendarToday, MdRemoveRedEye } from 'react-icons/md';
import {ViewPropTypes} from './types';

const CardView: React.FC<ViewPropTypes> = ({data}) => (<Card maxW="sm">
  <CardBody
    boxShadow="outline"
    borderTopLeftRadius="lg"
    borderTopRightRadius="lg"
    p={0}>
    <Box position="relative">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        borderTopLeftRadius="lg"
        borderTopRightRadius="lg"
      />
      <Heading
        fontSize="sm"
        variant="cardTitle"
      >{data.title}</Heading>
    </Box>
    <HStack py={2} px={3} justifyContent="space-between">
      <Text display="flex" color="gray.600" alignItems="center" fontSize="xs" gap={1}>
        <Icon as={MdCalendarToday as 'svg'}/>
        {data.release_date}
      </Text>
      <Text display="flex" color="gray.600" alignItems="center" fontSize="xs" gap={1}>
        <Icon as={MdRemoveRedEye as 'svg'}/>
        {data.vote_count}
      </Text>
    </HStack>
    {/*<Stack mt="6" spacing="3">*/}
    {/*  <Heading size="md">{data.title}</Heading>*/}
    {/*  <Text>*/}
    {/*    {data.overview}*/}
    {/*  </Text>*/}
    {/*  <Text color="blue.600" fontSize="2xl">*/}
    {/*    $450*/}
    {/*  </Text>*/}
    {/*</Stack>*/}
  </CardBody>
  {/*<Divider />*/}
  {/*<CardFooter>*/}
  {/*  <ButtonGroup spacing="2">*/}
  {/*    <Button variant="solid" colorScheme="blue">*/}
  {/*      Buy now*/}
  {/*    </Button>*/}
  {/*    <Button variant="ghost" colorScheme="blue">*/}
  {/*      Add to cart*/}
  {/*    </Button>*/}
  {/*  </ButtonGroup>*/}
  {/*</CardFooter>*/}
</Card>);
export default CardView;