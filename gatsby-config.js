module.exports = {
  siteMetadata: {
    title: 'duckmouse.no',
    description: 'duckmouse - en veldig t datamus',
    url: 'https://duckmouse.app',
    author: 'duckmouse.no',
    keywords: 'duckmouse, nettbutikk, vipps',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
