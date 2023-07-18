import React from 'react';
import {Box, Icon, HStack, Card, CardBody, Heading, Text} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import {MdCalendarToday, MdRemoveRedEye} from 'react-icons/md';
import {ViewPropTypes} from './types';

const CardView: React.FC<ViewPropTypes> = ({data}) => (<Card maxW="sm">
  <CardBody
    boxShadow="outline"
    borderTopLeftRadius="lg"
    borderTopRightRadius="lg"
    p={0}>
    <Link href={`movie/${data.id}`}>
      <Box position="relative" overflow="hidden" data-group>
        <Box
          width="100%"
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
          height="200"
          position="relative"
          overflow="hidden"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt="Green double couch with wooden legs"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Heading
          _groupHover={{
            visibility: 'visible',
            opacity: 1,
            transform: 'translateY(0px)'
          }}
          fontSize="sm"
          variant="cardTitle"
        >{data.title}</Heading>
      </Box>
    </Link>
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
  </CardBody>
</Card>);
export default CardView;