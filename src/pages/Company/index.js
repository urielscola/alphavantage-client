import React, { useState, useEffect, useCallback } from 'react';
import Head from '../../components/Head';
import Grid from '../../components/Grid';
import Link from '../../components/Link';
import List from '../../components/List';
import ResultItem from '../../components/ResultItem';
import Spacing from '../../components/Spacing';
import Filter from './partials/Filter';

import { useApplicationContext } from '../../contexts/application';
import { ALPHA_VILLAGE_API } from '../../services';
import { formatMoney } from '../../helpers/strings';

const Company = ({ match }) => {
  const [company, setCompany] = useState([]);
  const [filteredCompany, setfilteredCompany] = useState([]);
  const { setLoading, setError } = useApplicationContext();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await ALPHA_VILLAGE_API.getTimeSeriesDaily({
        symbol: match.params.id
      });
      setCompany(response);
      setfilteredCompany(response);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }, [match.params.id, setLoading, setError]);

  const handleFilter = ({ startDate, endDate }) => {
    setLoading(true);
    const filtered = company.filter(
      item => item.timestamp <= startDate && item.timestamp >= endDate
    );
    setfilteredCompany(filtered);
    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div data-testid="company">
      <Spacing appearence="XLarge" />
      <Head title={match.params.id} />

      <Grid.Container>
        <Link path="/">Voltar</Link>
        <Spacing appearence="Medium" />

        <h2>{match.params.id}</h2>
        <Spacing appearence="Large" />

        {!!company.length && (
          <>
            <Filter
              initialDate={company[0].timestamp}
              lastDate={company[company.length - 1].timestamp}
              onSubmit={handleFilter}
            />
            <Spacing appearence="Large" />
          </>
        )}

        {filteredCompany.map(item => (
          <div key={item.formattedDate}>
            <Link path={`/company/${match.params.id}/graphic`}>
              <List label={item.formattedDate}>
                <ResultItem
                  cells={[
                    {
                      name: 'Abertura',
                      value: formatMoney(item.open)
                    },
                    { name: 'Máxima', value: formatMoney(item.high) },
                    { name: 'Mínima', value: formatMoney(item.high) },
                    { name: 'Fechamento', value: formatMoney(item.close) }
                  ]}
                />
              </List>
            </Link>
            <Spacing appearence="Medium" />
          </div>
        ))}

        <Spacing appearence="Large" />
      </Grid.Container>
    </div>
  );
};

export default Company;
