import React from 'react';
import {MOVIE_TYPES} from "@/common/enums";

export type ContainerPropTypes = {}

export type ViewPropTypes = {
  selectedValue: MOVIE_TYPES,
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}