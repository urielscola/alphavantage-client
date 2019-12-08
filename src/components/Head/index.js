import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head({ title, children }) {
  return (
    <Helmet>
      {children}
      <title>Alpha Vantage - {title}</title>
    </Helmet>
  );
}
