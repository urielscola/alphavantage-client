import React from 'react';
import { render } from '@testing-library/react';
import InputField from '../../components/InputField';

describe('InputField component', () => {
  it('Should render the component with provided props', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <InputField
        value=""
        name="search"
        label="Pesquisar"
        placeholder="Pesquise aqui"
        onChange={onChange}
      />
    );

    const element = getByTestId('input-field');
    const input = element.querySelector('input');
    const label = element.querySelector('label');
    expect(element).toBeInTheDocument();
    expect(input.getAttribute('value')).toBe('');
    expect(input.getAttribute('placeholder')).toBe('Pesquise aqui');
    expect(input.getAttribute('name')).toBe('search');
    expect(label.textContent).toBe('Pesquisar');
  });
});
