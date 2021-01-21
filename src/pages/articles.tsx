import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Post from "../components/Post";

const Articles = ({ data }) => {
  return (
    <Layout
      mainSxProp={{
        maxWidth: 'container',
        mx: "auto",
      }}
    >
      {data.allMarkdownRemark.nodes.map((node) => {
        return (
          <Post
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            slug={node.frontmatter.slug}
            excerpt={node.excerpt}
          />
        );
      })}
    </Layout>
  );
};

export default Articles;

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 100, truncate: true)
        frontmatter {
          date(formatString: "YYYY, MM/DD")
          slug
          title
        }
      }
    }
  }
`;
