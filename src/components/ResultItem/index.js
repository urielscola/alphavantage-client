import React from 'react';
import { Link } from 'react-router-dom';
import Spacing from '../Spacing';
import Cell from './Cell';
import { Container } from './styles';

const ResultItem = ({ cells, symbol }) => (
  <Container key={symbol}>
    <div>
      {!!cells &&
        cells.map(cell => (
          <Cell key={cell.value} name={cell.name} value={cell.value} />
        ))}
    </div>
    <Spacing appearence="Small" />
    <Link to={`/company/${symbol}`}>Ver detalhes</Link>
  </Container>
);

ResultItem.Cell = Cell;

export default ResultItem;
