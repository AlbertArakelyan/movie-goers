import React from 'react';
import {ContainerPropTypes} from './types';
import View from './view';

const CardContainer: React.FC<ContainerPropTypes> = ({data}) => {

  return <View data={data} />
}
export default React.memo(CardContainer);