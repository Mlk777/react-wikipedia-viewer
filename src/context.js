import React, { useState } from 'react';
import { SEARCH_URL, LOAD_MORE_URL } from './config';

const AppContext = React.createContext();

const AppProvider = props => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [offset, setOffset] = useState(10);

  const searchArticles = async searchTerm => {
    try {
      setArticles([]);
      setTotalResults(0);
      const result = await (await fetch(`${SEARCH_URL}${searchTerm}`)).json();

      setSearchTerm(searchTerm);
      setArticles(result.query.search);
      setTotalResults(result.query.searchinfo.totalhits);
    } catch (err) {
      console.error(err);
    }
  };

  const loadMoreArticles = async searchTerm => {
    try {
      setOffset(offset + 10);
      const result = await (
        await fetch(`${LOAD_MORE_URL}${searchTerm}&sroffset=${offset}`)
      ).json();
      setArticles([...articles, ...result.query.search]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        articles,
        totalResults,
        searchArticles,
        loadMoreArticles,
        setSearchTerm,
        setArticles,
        setTotalResults
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
