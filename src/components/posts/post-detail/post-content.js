import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const DUMMY_DATA = {
  title: "getting-started",
  slug: "getting-started-1",
  image: "getting-started-nextjs.png",
  content: " # getting started",
  date: "2023-08-23",
};

function PostContent() {
  const image = `/posts/${DUMMY_DATA.slug}/${DUMMY_DATA.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_DATA.title} image={image} />
      <ReactMarkdown>{DUMMY_DATA.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
