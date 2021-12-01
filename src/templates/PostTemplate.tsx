/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { graphql } from "gatsby";
import { Container } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PostMeta from "../components/PostMeta";

const PostTemplate = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout header={<Header />}>
      <Container py={4}>
        <Themed.h1 sx={{ textAlign: "center" }}>
          {post.frontmatter.title}
        </Themed.h1>
        <PostMeta
          date={post.frontmatter.date}
          categories={post.frontmatter.categories}
          tags={post.frontmatter.tags}
          sx={{
            justifyContent: "center",
            marginBottom: "36px",
          }}
        />
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
        tags
        categories
        date(formatString: "YYYY, MM/DD")
      }
    }
  }
`;
