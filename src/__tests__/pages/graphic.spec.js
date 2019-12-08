import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Graphic from '../../pages/Graphic';
import ALPHA_VILLAGE_API from '../../services/alphavillage';
import * as Context from '../../contexts/application';

describe('Graphic page', () => {
  beforeEach(() => {
    ALPHA_VILLAGE_API.getTimeSeriesIntraday = () => [];
    const setLoading = jest.fn();
    const setError = jest.fn();
    const mockContext = { setLoading, setError };
    jest
      .spyOn(Context, 'useApplicationContext')
      .mockImplementation(() => mockContext);
  });

  it('Should render the page correctly with given params', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Graphic match={{ params: { id: 'SINQIA' } }} />
      </BrowserRouter>
    );

    await waitForDomChange();

    const element = getByTestId('graphic');
    expect(element).toBeInTheDocument();
  });
});
