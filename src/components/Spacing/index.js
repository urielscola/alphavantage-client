import React from 'react';
import { XSmall, Small, Medium, Large, XLarge } from './styles';

const options = {
  XSmall,
  Small,
  Medium,
  Large,
  XLarge
};

const Spacing = ({ appearence }) => {
  const Component = options[appearence];
  return <Component aria-hidden="true" />;
};

export default Spacing;
