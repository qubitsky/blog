import React from "react";
import { Link } from "gatsby";

const Post = ({ title, date, slug, excerpt }) => {
  return (
    <article>
      <h3>
        <Link to={slug || '#'}>{title || '--'}</Link>
      </h3>
      <time>{date}</time>
      <p>{excerpt}</p>
    </article>
  );
};

export default Post;
