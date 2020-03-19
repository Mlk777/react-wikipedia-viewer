import React from 'react';
import logo from '../images/logo.png';

const Header = () => (
  <header
    className='flex flex-col md:flex-row items-center text-center md:justify-center p-4 text-blue-900 text-6xl font-bold tracking-wide'
    style={{
      textShadow: 'rgba(0, 9, 10, 0.7) 1px 1px 5px',
      lineHeight: '4.5rem'
    }}
  >
    <img src={logo} alt='Wikipedia logo svg' className='m-4 w-32 sm:mr-4 ' />
    Wikipedia Viewer
  </header>
);

export default Header;
