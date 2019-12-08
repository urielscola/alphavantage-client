import React from 'react';
import { render } from '@testing-library/react';
import List from '../../components/List';

describe('List component', () => {
  it('Should render the component with provided props', () => {
    const { getByTestId } = render(
      <List label="List">
        <h1>List element</h1>
      </List>
    );

    const element = getByTestId('list');
    const label = element.querySelector('div');
    const children = element.querySelector('h1');
    expect(element).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(children.textContent).toBe('List element');
    expect(label.textContent).toBe('List');
  });
});
