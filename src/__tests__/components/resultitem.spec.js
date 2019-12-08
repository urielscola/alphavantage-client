import React from 'react';
import { render } from '@testing-library/react';
import ResultItem from '../../components/ResultItem';

describe('ResultItem component', () => {
  it('Should render the component with provided props', () => {
    const cells = [{ name: 'Opa', value: 22 }];
    const { getByTestId } = render(
      <ResultItem cells={cells}>
        <h1>Result item</h1>
      </ResultItem>
    );

    const element = getByTestId('result-item');
    const childrenCells = getByTestId('result-item-cells');
    const children = element.querySelector('h1');
    expect(element).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    expect(childrenCells.querySelectorAll('div').length).toBe(1);
  });
});
