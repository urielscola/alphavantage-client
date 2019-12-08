import React, { useState } from 'react';
import Head from '../../components/Head';
import Grid from '../../components/Grid';
import List from '../../components/List';
import Spacing from '../../components/Spacing';
import Search from './partials/Search';
import ResultItem from '../../components/ResultItem';
import { useApplicationContext } from '../../contexts/application';
import { ALPHA_VILLAGE_API } from '../../services';

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
                  <Spacing appearence="Small" />
                  <ResultItem
                    cells={[
                      { name: 'Nome', value: card.name },
                      { name: 'Região', value: card.region }
                    ]}
                    symbol={card.symbol}
                  />
                  <Spacing appearence="XLarge" />
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
