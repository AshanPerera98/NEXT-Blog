import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PostHeader from "./post-header";

import classes from "./post-content.module.css";

// const DUMMY_DATA = {
//   title: "getting-started",
//   slug: "getting-started-1",
//   image: "getting-started-nextjs.png",
//   content: " # getting started",
//   date: "2023-08-23",
// };

function PostContent(props) {
  const { post } = props;

  const image = `/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={image} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
