import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Link from '../../components/Link';

describe('Link component', () => {
  it('Should render the component with provided props', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Link path="/some-link">
          <div>Click</div>
        </Link>
      </BrowserRouter>
    );

    const element = getByTestId('link');
    const childrenElement = element.querySelectorAll('div');
    expect(element).toBeInTheDocument();
    expect(childrenElement.length).toBe(1);
    expect(element.getAttribute('href')).toBe('/some-link');
  });
});
