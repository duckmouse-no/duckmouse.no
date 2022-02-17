import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const Layout = ({ children }) => (
  <React.Fragment>
    <title>duckmouse.no</title>
    <Navbar />
    {children}
    <Footer />
  </React.Fragment>
);
