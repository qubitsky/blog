/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { graphql } from "gatsby";
import { Container } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { typography } from "../gatsby-plugin-theme-ui";

const PostTemplate = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout header={<Header />}>
      <Container py={4}>
        <Themed.h1 sx={{ textAlign: "center" }}>
          {post.frontmatter.title}
        </Themed.h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Container>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
