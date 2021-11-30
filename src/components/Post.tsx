/** @jsx jsx */
import { jsx } from "theme-ui";
import { withPrefix } from "gatsby";
import { Box, Heading, Paragraph, Flex, Link } from "theme-ui";
import ClockIcon from "../icons/clock.svg";
import FolderIcon from "../icons/folder.svg";
import TagIcon from "../icons/tag.svg";

const Post = ({ title, date, slug, excerpt, categories, tags }) => {
  return (
    <Box bg="muted" p={3} sx={{ my: "16px" }}>
      <Heading>
        <Link href={withPrefix(slug || "#")}>{title || "--"}</Link>
      </Heading>
      <Paragraph>{excerpt}</Paragraph>
      <Flex
        sx={{
          opacity: 0.5,
          alignItems: "center",
          fontSize: 1,
          svg: {
            width: "16px",
            height: "16px",
            marginRight: "4px",
            verticalAlign: "-4px",
          },
          "& > div": {
            marginRight: "16px",
          },
          span: {
            marginRight: "4px",
          },
        }}
      >
        <div>
          <ClockIcon />
          <time>{date}</time>
        </div>
        {!!categories?.length && (
          <div>
            <FolderIcon />
            {categories.map((c, i) => {
              return <span key={i}>{c}</span>;
            })}
          </div>
        )}
        {!!tags?.length && (
          <div>
            <TagIcon />
            {tags.map((c, i) => {
              return <span key={i}>#{c}</span>;
            })}
          </div>
        )}
      </Flex>
    </Box>
  );
};

export default Post;
