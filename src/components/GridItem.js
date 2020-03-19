import React, { useState, useEffect, useContext } from 'react';
import { StyledGridItems } from '../styles/StyledGridItem';

import { AppContext } from '../context';

const GridItem = ({ title, pageId }) => {
  const [articleData, setArticleData] = useState('');
  const data = useContext(AppContext);
  const articleUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=query&pageids=${pageId}&prop=info|extracts&exintro=&explaintext=&inprop=url&format=json&formatversion=2`;

  useEffect(() => {
    (async () => {
      const request = await fetch(`${articleUrl}`);
      const result = await request.json();
      setArticleData(result.query.pages[0]);
    })();
  }, []);

  return (
    <StyledGridItems className='grid justify-center items-center border-2 border-blue-500'>
      <div className='text-lg font-bold' style={{ padding: '0 0.5em' }}>
        {/* Article title*/}
        {title.substring(0, 30).replace(/"/g, '')}
      </div>
      <div>
        <hr className='bg-blue-600' />
      </div>
      <div>
        {/* First words of the article */}
        {articleData.extract &&
          `${articleData.extract.substring(0, 50).replace(/\\|"/g, '')}...`}
      </div>
      <div>
        {/* Link to the page*/}
        <a
          href={data.articles.fullurl}
          target='_blank'
          rel='noopener noreferrer'
          className='italic font-semibold text-gray-500'
        >
          Read more
        </a>
      </div>
    </StyledGridItems>
  );
};

export default GridItem;
