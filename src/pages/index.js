import React, { Fragment } from "react";

import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

import { getFeaturedPosts } from "../../lib/posts-util";

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

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}

export default HomePage;
