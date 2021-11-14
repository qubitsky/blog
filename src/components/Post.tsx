/** @jsx jsx */
import { jsx } from "theme-ui";
import { withPrefix } from "gatsby";
import { Box, Heading, Paragraph, Link } from "theme-ui";

const Post = ({ title, date, slug, excerpt, tags }) => {
  return (
    <Box bg="muted" p={3} sx={{ my: "16px" }}>
      <Heading>
        <Link href={withPrefix(slug || "#")}>{title || "--"}</Link>
      </Heading>
      {/* <div>
        {categories?.map((c, i) => {
          return <span key={i}>#{c}</span>;
        })}
      </div> */}
      <time>{date}</time>
      <Paragraph>{excerpt}</Paragraph>
      <div>
        {tags?.map((c, i) => {
          return (
            <span key={i} sx={{ opacity: 0.5, mr: "8px" }}>
              #{c}
            </span>
          );
        })}
      </div>
    </Box>
  );
};

export default Post;
