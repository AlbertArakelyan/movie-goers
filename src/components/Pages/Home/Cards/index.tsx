import React from 'react';
import {ContainerPropTypes} from './types';
import View from './view';

const CardsContainer: React.FC<ContainerPropTypes> = () => {
  return <View/>
};
export default React.memo(CardsContainer);
