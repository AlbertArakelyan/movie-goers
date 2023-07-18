import React from 'react';

export interface IMoviePropertyContainerProps {
  propertyKey: string;
  value: string | React.JSX.Element;
}

export interface IMoviePropertyViewProps extends IMoviePropertyContainerProps {
}
