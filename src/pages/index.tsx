import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Layout } from '../templates/Layout';
import { Button } from '../components/Button';

const IndexPage = () => (
  <Layout>
    <main className='text-center'>
      <StaticImage
        src='../images/duckmouse.png'
        alt='Duckmouse'
        width={500}
        className='mt-16'
        placeholder='none'
      />
      <h1 className='text-3xl mb-4'>DØKKMOUSE</h1>
      <Button label='Kjøp' />
    </main>
  </Layout>
);

export default IndexPage;
