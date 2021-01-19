import React from "react";

const Post = ({ title, date, excerpt }) => {
  return (
    <article>
      <h3>{title}</h3>
      <time>{date}</time>
      <p>{excerpt}</p>
    </article>
  );
};

export default Post;
