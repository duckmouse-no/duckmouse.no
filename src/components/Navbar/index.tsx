import React from 'react';
import background from '../../images/bg.png';

export const Navbar = () => (
  <nav
    className='w-screen border-b-4 p-6 bg-repeat'
    style={{ backgroundImage: `url(${background})` }}
  />
);
