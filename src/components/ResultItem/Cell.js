import React from 'react';
import { Cell as CellContainer } from './styles';

const Cell = ({ name, value }) => (
  <CellContainer>
    <span>{name}:</span>
    <p>{value}</p>
  </CellContainer>
);

export default Cell;
