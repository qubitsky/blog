module.exports = {
  pathPrefix: "/blog",
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/_posts`,
      },
    },
    process.env.NODE_ENV === "development" && {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `drafts`,
        path: `${__dirname}/src/_drafts`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Alegreya`, `Josefin Sans`, `Noto Sans SC`],
        display: "swap",
      },
    },
    "gatsby-plugin-theme-ui",
  ].filter(Boolean),
};
