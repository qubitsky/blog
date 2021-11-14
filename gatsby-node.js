exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve(`./src/templates/PostTemplate.tsx`);

  const result = await graphql(`
    query MdxPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((node) => {
    if (node.frontmatter.slug) {
      createPage({
        path: node.frontmatter.slug,
        component: postTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      });
    }
  });
};
