/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import ClockIcon from "../icons/clock.svg";
import FolderIcon from "../icons/folder.svg";
import TagIcon from "../icons/tag.svg";

const PostMeta = ({ className = '', date, categories, tags }) => {
  return (
    <Flex
      className={className}
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
  );
};

export default PostMeta;
