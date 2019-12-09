import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

describe('Header component', () => {
  it('Should render the component with provided props', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const element = getByTestId('header');
    expect(element).toBeInTheDocument();
  });
});
