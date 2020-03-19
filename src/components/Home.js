// import React, { useState } from 'react';
// import SearchBar from './SearchBar';
// import RandomButton from './RandomButton';
// import Grid from './Grid';
// import { useFetchArticles } from './hooks/useFetchArticles';
// import { SEARCH_URL, LOAD_MORE_URL } from '../config';

// const Home = () => {
//   const [search, setSearch] = useState('');
//   const [isLoadMore, setIsLoadMore] = useState(false);
//   // if (isLoadMore) {
//   //   const [
//   //     {
//   //       data: { articles, totalResults, displayedResults }
//   //     },
//   //     fetchArticles
//   //   ] = useFetchArticles(search)
//   // } else {
//   //   const [
//   //     {
//   //       data: { articles, totalResults, displayedResults }
//   //     },
//   //     fetchArticles
//   //   ] = useFetchArticles(search, 1)
//   // }
//   // const [
//   //   {
//   //     data: { articles, totalResults, displayedResults }
//   //   },
//   //   fetchArticles
//   // ] = isLoadMore ? useFetchArticles(search) : useFetchArticles(search, 1);

//   const searchArticles = search => {
//     const endpoint = `${SEARCH_URL}${search}`;

//     setSearch(search);
//     fetchArticles(endpoint);
//   };

//   const loadMoreArticles = () => {
//     setIsLoadMore(true);

//     if (displayedResults < totalResults) {
//       const endpoint = `${LOAD_MORE_URL}${search}&sroffset=${displayedResults +
//         10}`;

//       fetchArticles(endpoint);
//     }
//   };

//   return (
//     <>
//       <SearchBar searchArticles={searchArticles} />
//       <RandomButton />
//       <Grid />
//     </>
//   );
// };

// export default Home;
