import React from 'react';
import { render } from '@testing-library/react';
import Logo from '../../components/Logo';

describe('Logo component', () => {
  it('Should render the component with provided props', () => {
    const { container } = render(<Logo />);

    const element = container.querySelector('h1');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe('Alpha Vantage');
  });
});
