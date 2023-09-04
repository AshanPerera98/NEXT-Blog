import AllPosts from "@/components/posts/all-posts";
import React from "react";
import { getAllPosts } from "../../../lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     title: "getting-started",
//     slug: "getting-started-1",
//     image: "getting-started-nextjs.png",
//     excerpt: "bla bla blaaaa.... getting started",
//     date: "2023-08-23",
//   },
//   {
//     title: "getting-started",
//     slug: "getting-started-2",
//     image: "getting-started-nextjs.png",
//     excerpt: "bla bla blaaaa.... getting started",
//     date: "2023-08-23",
//   },
//   {
//     title: "getting-started",
//     slug: "getting-started-3",
//     image: "getting-started-nextjs.png",
//     excerpt: "bla bla blaaaa.... getting started",
//     date: "2023-08-23",
//   },
//   {
//     title: "getting-started",
//     slug: "getting-started-4",
//     image: "getting-started-nextjs.png",
//     excerpt: "bla bla blaaaa.... getting started",
//     date: "2023-08-23",
//   },
// ];

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
}

export default AllPostsPage;
