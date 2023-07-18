import React from 'react';
import {Input} from '@chakra-ui/react';
import {ViewPropTypes} from './types';

const SearchFieldView: React.FC<ViewPropTypes> = ({ onTyping, value }) => (
  <Input onChange={onTyping} placeholder="Seach Movie" size="md" value={value} />
)
export default SearchFieldView;