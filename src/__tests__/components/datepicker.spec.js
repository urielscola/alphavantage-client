import React from 'react';
import { render } from '@testing-library/react';
import Datepicker from '../../components/Datepicker';

describe('Datepicker component', () => {
  it('Should render the component with provided props', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Datepicker
        label={<p>Picker</p>}
        minDate={new Date()}
        maxDate={new Date()}
        onChange={onChange}
      />
    );

    const element = getByTestId('picker');
    expect(element).toBeInTheDocument();
  });
});
