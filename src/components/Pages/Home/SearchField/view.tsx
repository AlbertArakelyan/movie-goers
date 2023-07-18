import React from 'react';
import {Input} from '@chakra-ui/react';
import {ViewPropTypes} from './types';

const SearchFieldView: React.FC<ViewPropTypes> = ({ onTyping }) => (
  <Input onInput={onTyping} placeholder="Seach Movie" size="md" />
)
export default SearchFieldView;