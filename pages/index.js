import Head from "next/head";

import { FeaturedPosts } from "../sections";
import { CardAlt, PostWidget, Categories } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container px-10 mx-auto mb-8 max-w-7xl">
      <Head>
        <title>Ockhee</title>
        <link rel="icon" href="/letter-o.png" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8 md:col-span-5">
          {posts.map((post, index) => (
            <CardAlt post={post.node} key={index} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4 md:col-span-3">
          <div className="relative lg:sticky md:sticky md:top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}
