/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <h1
        sx={{
          textAlign: "center",
        }}
      >
        {post.frontmatter.title}
      </h1>
      <section
        sx={{
          maxWidth: 'container',
          mx: "auto",
          px: 3,
          py: 4,
        }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY年 MM月DD")
      }
    }
  }
`;
