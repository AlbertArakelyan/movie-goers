import React from 'react';
import {Container} from '@chakra-ui/react';
import Image from 'next/image';
import {ViewPropTypes} from './types';

const HeaderView: React.FC<ViewPropTypes> = () => (<header>
  <Container maxW="4xl">
    <Image
      src="/images/logo.png"
      width={120}
      height={50}
      alt="Logo"
    />
  </Container>
</header>)
export default HeaderView;