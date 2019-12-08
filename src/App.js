import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles, theme } from './assets/styles';
import Routes from './routes';
import { ApplicationProvider } from './contexts/application';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ApplicationProvider>
          <>
            <GlobalStyles />
            <Header />
            <main>
              <Routes />
            </main>
            <ScrollToTop />
          </>
        </ApplicationProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
