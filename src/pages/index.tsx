import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../templates/Layout';
import { EmailForm } from '../components/EmailForm';

const IndexPage = () => (
  <Layout>
    <main className='text-center'>
      <div className='flex flex-col justify-center items-center'>
        <StaticImage
          src='../images/wire.png'
          alt='wire'
          width={14}
          className='mr-1'
        />
        <StaticImage
          src='../images/wire.png'
          alt='wire'
          width={14}
          className='mr-1'
        />
        <StaticImage
          src='../images/mouse.png'
          alt='Duckmouse'
          width={500}
          className='-mt-4 -mb-8'
          placeholder='none'
        />
      </div>
      <h1 className='text-2xl mb-2 text-gray-800'>døkkmouse</h1>
      <p className='mt-2 text-gray-400'>Utsolgt</p>
      <EmailForm />
    </main>
  </Layout>
);

export default IndexPage;
