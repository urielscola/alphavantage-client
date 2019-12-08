import React from 'react';
import Spacing from '../Spacing';
import Cell from './Cell';
import { Container } from './styles';

const ResultItem = ({ cells, symbol, children }) => (
  <Container key={symbol}>
    <div>
      {!!cells &&
        cells.map((cell, index) => (
          <Cell key={cell.value + index} name={cell.name} value={cell.value} />
        ))}
    </div>
    {children && (
      <>
        <Spacing appearence="Small" />
        {children}
      </>
    )}
    <Spacing appearence="Small" />
  </Container>
);

export default ResultItem;
