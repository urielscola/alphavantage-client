import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';

import Home from '../../pages/Home';
import ALPHA_VILLAGE_API from '../../services/alphavillage';
import * as Context from '../../contexts/application';

describe('Home page', () => {
  beforeEach(() => {
    ALPHA_VILLAGE_API.getSymbols = () => [];
    const setLoading = jest.fn();
    const setError = jest.fn();
    const mockContext = { setLoading, setError };
    jest
      .spyOn(Context, 'useApplicationContext')
      .mockImplementation(() => mockContext);
  });

  it('Should render the page correctly with given params', async () => {
    const { getByTestId } = render(<Home />);

    await waitForDomChange();

    const element = getByTestId('home');
    expect(element).toBeInTheDocument();
  });
});
