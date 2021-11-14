import React from "react";
// import { Link } from "gatsby";
import { Box, Heading, Paragraph, Link } from "theme-ui";

const Post = ({ title, date, slug, excerpt, categories }) => {
  return (
    <Box bg="muted" p={3} sx={{ my: "16px" }}>
      <Heading>
        <Link href={slug || "#"}>{title || "--"}</Link>
      </Heading>
      {/* <div>
        {categories?.map((c, i) => {
          return <span key={i}>#{c}</span>;
        })}
      </div> */}
      <time>{date}</time>
      <Paragraph>{excerpt}</Paragraph>
    </Box>
  );
};

export default Post;
