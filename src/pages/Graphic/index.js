import React, { useState, useCallback, useEffect } from 'react';
import Head from '../../components/Head';
import Spacing from '../../components/Spacing';
import Grid from '../../components/Grid';
import Link from '../../components/Link';
import LineGraphic from '../../components/LineGraphic';
import { useApplicationContext } from '../../contexts/application';
import { ALPHA_VILLAGE_API } from '../../services';

const Graphic = ({ match }) => {
  const [plotData, setPlotData] = useState(null);
  const { setLoading, setError } = useApplicationContext();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await ALPHA_VILLAGE_API.getTimeSeriesIntraday({
        symbol: match.params.id
      });
      setPlotData(response);
      console.log(response);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }, [match.params.id, setLoading, setError]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Spacing appearence="XLarge" />
      <Head title={`${match.params.id} - Variação`} />

      <Grid.Container>
        <Link path={`/company/${match.params.id}`} title="Voltar" />
        <Spacing appearence="Medium" />
        <h2>{match.params.id} - Variação</h2>
        <Spacing appearence="Large" />
        {!!plotData && <LineGraphic data={plotData} />}
      </Grid.Container>
      <Spacing appearence="XLarge" />
    </>
  );
};

export default Graphic;
