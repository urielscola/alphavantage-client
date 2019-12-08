import React, { useState } from 'react';
import Head from '../../components/Head';
import Grid from '../../components/Grid';
import List from '../../components/List';
import Link from '../../components/Link';
import Spacing from '../../components/Spacing';
import Search from './partials/Search';
import ResultItem from '../../components/ResultItem';
import { useApplicationContext } from '../../contexts/application';
import { ALPHA_VILLAGE_API } from '../../services';
import { truncate } from '../../helpers/strings';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [hasResults, setHasResults] = useState(false);
  const { setLoading, setError } = useApplicationContext();

  const handleSearch = async keywords => {
    setLoading(true);
    try {
      const response = await ALPHA_VILLAGE_API.getSymbols({ keywords });
      setCards(response);
      setHasResults(!!response.length);
    } catch (err) {
      console.log(err);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <>
      <Spacing appearence="XLarge" />
      <Head title="Home" />
      <Grid.Container>
        <Search onSubmit={handleSearch} />
        <Spacing appearence="XLarge" />

        {hasResults && (
          <>
            {cards.map(card => {
              return (
                <List label={card.symbol} key={card.symbol}>
                  <ResultItem
                    cells={[
                      { name: 'Nome', value: truncate(card.name, 50) },
                      { name: 'Região', value: card.region }
                    ]}
                  >
                    <Link path={`/company/${card.symbol}`}>Ver detalhes</Link>
                  </ResultItem>

                  <Spacing appearence="Medium" />
                </List>
              );
            })}
          </>
        )}

        {!hasResults && <p>Nenhum resultado.</p>}
        <Spacing appearence="Large" />
      </Grid.Container>
    </>
  );
};

export default Home;
