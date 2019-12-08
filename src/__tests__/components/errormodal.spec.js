import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorModal from '../../components/ErrorModal';

describe('ErrorModal component', () => {
  it('Should render the component with provided props', () => {
    const setError = jest.fn();
    const { container, getByTestId } = render(
      <BrowserRouter>
        <ErrorModal setError={setError} />
      </BrowserRouter>
    );

    const element = getByTestId('error-modal');
    const childrenElement = container.querySelectorAll('p');
    const linkElement = container.querySelectorAll('a');
    expect(element).toBeInTheDocument();
    expect(childrenElement.length).toBe(2);
    expect(linkElement.length).toBe(1);
  });

  it('Should handle go back action', () => {
    const setError = jest.fn();

    const { container } = render(
      <BrowserRouter>
        <ErrorModal setError={setError} />
      </BrowserRouter>
    );

    const linkElement = container.querySelector('a');
    fireEvent.click(linkElement);

    expect(setError).toHaveBeenCalled();
  });
});
