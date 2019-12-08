import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button component', () => {
  it('Should render the component with provided props', () => {
    const { getByTestId } = render(<Button label="Pesquisar" />);

    const element = getByTestId('button');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe('Pesquisar');
  });
});
