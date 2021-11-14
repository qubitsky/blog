/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Post from "../components/Post";

const Articles = ({ data }) => {
  return (
    <Layout header={<Header />}>
      <Container>
        {data.allMdx.nodes.map((node) => {
          return (
            <Post
              key={node.id}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              slug={node.frontmatter.slug}
              excerpt={node.excerpt}
              tags={node.frontmatter.tags}
            />
          );
        })}
      </Container>
    </Layout>
  );
};

export default Articles;

export const query = graphql`
  query MdxPosts {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt
        frontmatter {
          title
          tags
          categories
          date(formatString: "YYYY, MM/DD")
          slug
        }
        id
      }
    }
  }
`;
