import React from 'react';
import FontAwesome from 'react-fontawesome';
import { StyledRandomButton } from '../styles/StyledRandomButton';

const RandomButton = () => {
  return (
    <div className='flex justify-center mt-1 p-4 w-full h-4 w-full'>
      <StyledRandomButton
        href='https://en.wikipedia.org/wiki/Special:Random'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesome className='fa-random' name='randomSearch' size='lg' />
      </StyledRandomButton>
    </div>
  );
};

export default RandomButton;
