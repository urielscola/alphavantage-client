import React from 'react';
import { Link as RLink } from 'react-router-dom';

export const Link = ({ path, title }) => {
  return <RLink to={path}>{title}</RLink>;
};

export default Link;
