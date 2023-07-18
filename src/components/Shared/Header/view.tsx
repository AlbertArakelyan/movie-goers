import React from 'react';
import {Container, Box} from '@chakra-ui/react';
import Image from 'next/image';
import {ViewPropTypes} from './types';

const HeaderView: React.FC<ViewPropTypes> = () => (<header>
  <Box py={3} boxShadow="outlineBottom">
    <Container maxW="4xl">
      <Image
        src="/images/logo.png"
        width={120}
        height={50}
        alt="Logo"
      />
    </Container>
  </Box>
</header>)
export default HeaderView;