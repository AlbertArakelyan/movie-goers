import React from 'react';
import {Select} from '@chakra-ui/react';
import {MdArrowDropDown} from 'react-icons/md';
import {ViewPropTypes} from './types';
import {MOVIE_SELECT_ITEMS} from "@/common/constants";
import {IMovieSelectItem} from "@/common/interfaces";

const SelectOptions = Object.values(MOVIE_SELECT_ITEMS);
const MovieSelectTypesView: React.FC<ViewPropTypes> = ({selectedValue, onChange}) => (
  <Select
    icon={<MdArrowDropDown />}
    value={selectedValue}
    onChange={onChange}
  >
    {SelectOptions.map((option: IMovieSelectItem) => <option key={option.value} value={option.value}>{option.label}</option>)}
  </Select>
)
export default MovieSelectTypesView;