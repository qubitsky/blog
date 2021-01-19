module.exports = {
  pathPrefix: "/blog",
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/_posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
