import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../../components/Loader';

describe('Loader component', () => {
  it('Should render the component with provided props', () => {
    const { getByTestId } = render(<Loader />);

    const element = getByTestId('loader');
    const childrenElement = element.querySelectorAll('div');
    expect(element).toBeInTheDocument();
    expect(childrenElement.length).toBe(9);
  });
});
