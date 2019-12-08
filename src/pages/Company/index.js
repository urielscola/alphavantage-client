import React, { useState, useEffect } from 'react';
import Head from '../../components/Head';
import Grid from '../../components/Grid';
import Link from '../../components/Link';
import List from '../../components/List';
import ResultItem from '../../components/ResultItem';
import Spacing from '../../components/Spacing';

import { useApplicationContext } from '../../contexts/application';
import { ALPHA_VILLAGE_API } from '../../services';
import { formatMoney } from '../../helpers/strings';

const Company = ({ match }) => {
  const [company, setCompany] = useState([]);
  const { setLoading, setError } = useApplicationContext();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await ALPHA_VILLAGE_API.getTimeSeriesDaily({
        symbol: match.params.id
      });
      console.log(response);
      setCompany(response);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Spacing appearence="XLarge" />
      <Head title={match.params.id} />

      <Grid.Container>
        <Link path="/" title="Voltar" />
        <Spacing appearence="Medium" />

        <h2>{match.params.id}</h2>
        <Spacing appearence="Large" />

        {company.map(item => (
          <List label={item.formattedDate}>
            <Spacing appearence="Medium" />
            <ResultItem
              symbol="opaa"
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
            <Spacing appearence="Large" />
          </List>
        ))}

        <Spacing appearence="Large" />
      </Grid.Container>
    </>
  );
};

export default Company;
