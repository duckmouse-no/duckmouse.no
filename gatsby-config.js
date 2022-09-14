require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "duckmouse.no",
    description: "duckmouse - en veldig tøff datamus",
    url: "https://duckmouse.app",
    author: "duckmouse.no",
    keywords: "duckmouse, nettbutikk, vipps",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://duckmouse.no",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
