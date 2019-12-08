import React from 'react';
import { Helmet } from 'react-helmet';
import { render } from '@testing-library/react';
import Head from '../../components/Head';

describe('Head component', () => {
  it('should render metadata', () => {
    const prefix = 'Alpha Vantage -';
    const pageTitle = 'Home';
    render(
      <Head title={pageTitle}>
        <link href="test" />
      </Head>
    );

    const helmet = Helmet.peek();
    expect(helmet.title.join('')).toBe(`${prefix} ${pageTitle}`);
    expect(helmet.linkTags[0].href).toBe('test');
  });
});
