import React, { useRef, useContext } from 'react';
import { useInputChange } from '../utils/useInputChange';
import { StyledSearchBarContent } from '../styles/StyledSearchBar';

//Using context props
import { AppContext } from '../context';

const SearchBar = () => {
  const inputField = useRef(null);
  const [input, handleInputChange] = useInputChange();
  const {
    searchArticles,
    setSearchTerm,
    setArticles,
    setTotalResults
  } = useContext(AppContext);

  const onSubmit = e => {
    e.preventDefault();
    searchArticles(input.search);
    inputField.current.blur();
  };

  const onFocus = e => {
    setSearchTerm('');
    e.target.placeholder = 'What are you looking for today?';
    e.target.value = '';
    setArticles([]);
    setTotalResults(0);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='p-4 mt-2 w-full h-12 flex justify-center'>
          <StyledSearchBarContent
            className='relative flex justify-center max-w-screen-xl w-full h-10'
            extendedSize='50%'
          >
            <input
              type='text'
              name='search'
              ref={inputField}
              onChange={handleInputChange}
              onFocus={onFocus}
              onBlur={e => (e.target.placeholder = 'What....')}
              placeholder='What....'
              className='rounded-full border-2 px-12 outline-none text-sm sm:text-xl w-8/12 sm:w-4/12
                  '
            />
          </StyledSearchBarContent>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
