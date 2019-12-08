import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header component', () => {
  it('Should render the component with provided props', () => {
    const { getByTestId } = render(<Header />);

    const element = getByTestId('header');
    expect(element).toBeInTheDocument();
  });
});
