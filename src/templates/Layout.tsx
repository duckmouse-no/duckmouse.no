import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import favicon from '../images/favicon.png';

export const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'duckmouse - en veldig tøff datamus',
        },
      ]}
    >
      <meta charSet='utf-8' />
      <title>duckmouse</title>
      <link rel='icon' href={favicon} />
    </Helmet>
    <Navbar />
    {children}
    <Footer />
  </React.Fragment>
);
