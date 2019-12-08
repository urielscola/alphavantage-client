import React from 'react';
import { render } from '@testing-library/react';
import Spacing from '../../components/Spacing';

describe('Spacing component', () => {
  it('Should render the component with provided props', () => {
    const { getByTestId } = render(<Spacing appearence="Small" />);

    const element = getByTestId('spacing');
    expect(element).toBeInTheDocument();
    expect(element.className.indexOf('Small') > -1).toBe(true);
  });
});
