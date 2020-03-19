import React, { useRef, useContext, useEffect } from 'react';
import { StyledLoadMoreButton } from '../styles/StyledLoadMoreButton';

import { AppContext } from '../context';

const LoadMoreButton = () => {
  const { loadMoreArticles, articles } = useContext(AppContext);
  const { searchTerm } = useContext(AppContext);
  const scrollBottom = useRef(null);

  const loadMore = e => {
    loadMoreArticles(searchTerm);
  };

  const scrollToBottom = () => {
    scrollBottom.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [articles]);

  return (
    <footer
      onClick={loadMore}
      className='w-full bottom-0 flex justify-center mb-4'
      style={{
        display: articles.length === 0 ? 'none' : '',
        gridRowStart: 2,
        gridRowEnd: 3
      }}
    >
      <StyledLoadMoreButton
        className='px-6 py-2 m-4 bg-gray-200 rounded-lg sm:rounded-full text-lg font-bold'
        ref={scrollBottom}
      >
        Load more !
      </StyledLoadMoreButton>
    </footer>
  );
};

export default LoadMoreButton;
