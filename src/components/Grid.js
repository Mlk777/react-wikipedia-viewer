import React, { useContext } from 'react';
import GridItem from './GridItem';
import { StyledGrid } from '../styles/StyledGrid';

import { AppContext } from '../context';

const Grid = () => {
  const data = useContext(AppContext);

  return (
    <div className='mt-12 h-auto'>
      {data.totalResults > 0 && (
        <p className='text-center display-none'>
          <span className='font-extrabold italic'>{data.totalResults}</span>{' '}
          Results found !
        </p>
      )}
      <StyledGrid>
        {/* className='w-full grid gap-5 p-5' */}
        {data.articles &&
          data.articles.map(article => (
            <GridItem
              key={article.pageid}
              title={article.title}
              pageId={article.pageid}
            />
          ))}
      </StyledGrid>
    </div>
  );
};

export default Grid;
