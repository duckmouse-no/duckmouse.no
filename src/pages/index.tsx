import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../templates/Layout';
import { EmailForm } from '../components/EmailForm';

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
      <h1 className='text-3xl mb-2 text-gray-800'>døkkmouse</h1>
      <p className='mt-2 text-gray-400'>Utsolgt</p>
      <EmailForm />
    </main>
  </Layout>
);

export default IndexPage;
