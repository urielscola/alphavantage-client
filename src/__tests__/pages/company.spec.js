import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Company from '../../pages/Company';
import ALPHA_VILLAGE_API from '../../services/alphavillage';
import * as Context from '../../contexts/application';

describe('Company page', () => {
  beforeEach(() => {
    ALPHA_VILLAGE_API.getTimeSeriesDaily = () => [];
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
        <Company match={{ params: { id: 'SINQIA' } }} />
      </BrowserRouter>
    );

    await waitForDomChange();

    const element = getByTestId('company');
    expect(element).toBeInTheDocument();
  });
});
