/** @jsx jsx */
import { withPrefix } from "gatsby";
import { jsx, Box, Heading, Paragraph, Link } from "theme-ui";
import PostMeta from "./PostMeta";

const Post = ({ title, date, slug, excerpt, categories, tags }) => {
  return (
    <Box bg="muted" p={3} sx={{ my: "16px" }}>
      <Heading>
        <Link href={withPrefix(slug || "#")}>{title || "--"}</Link>
      </Heading>
      <Paragraph>{excerpt}</Paragraph>
      <PostMeta date={date} categories={categories} tags={tags} />
    </Box>
  );
};

export default Post;
