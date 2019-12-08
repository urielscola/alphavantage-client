import React from 'react';
import { Link as RLink } from 'react-router-dom';

export const Link = ({ path, children }) => {
  return <RLink to={path}>{children}</RLink>;
};

export default Link;
