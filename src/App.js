import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RandomButton from './components/RandomButton';
import Grid from './components/Grid';
import LoadMoreButton from './components/LoadMoreButton';
import { AppProvider } from './context';

const App = () => (
  <AppProvider>
    <>
      <GlobalStyle />
      <Header />
      <SearchBar />
      <RandomButton />
      <Grid />
      <LoadMoreButton />
    </>
  </AppProvider>
);

export default App;
