// *************************************************
// *************************************************
// !WIP PAGINATION

import Head from "next/head";

import { FeaturedPosts } from "../sections";
import { CardAlt, PostWidget, Categories } from "../components";
import { getPosts } from "../services";
import { useState } from "react";
import { gql, request } from "graphql-request";
import useSWR from "swr";

const fetcher = (endpoint, query, variables) =>
  request(endpoint, query, variables);

export default function Home({ posts }) {
  const [skip, setSkip] = useState(0);
  const { data, error } = useSWR(
    [
      process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
      `query getPosts($skip: Int!) {
      postsConnection(
        orderBy: createdAt_DESC
        first: 4
        where: { skip: $skip }
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `,
      skip,
    ],
    (endpoint, query) => fetcher(endpoint, query, { skip })
  );

  return (
    <div className="container px-10 mx-auto mb-8 max-w-7xl">
      <Head>
        <title>Ockhee</title>
        <link rel="icon" href="/letter-o.png" />
      </Head>
      <span className="hidden sm:contents">
        <FeaturedPosts />
      </span>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8 md:col-span-5">
          {posts.edges.map((post) => (
            <CardAlt post={post.node} />
          ))}
          <div className="flex justify-end ml-2 space-x-3 text-sm">
            <div>
              <button
                onClick={() => {
                  setSkip(skip - 4);
                }}
                disabled={!posts.pageInfo.hasPreviousPage}
                className="px-3 py-1 text-xs text-white bg-indigo-700 rounded-md disabled:bg-gray-400"
              >
                Prev
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setSkip(skip + 4);
                }}
                disabled={!posts.pageInfo.hasNextPage}
                className="px-3 py-1 text-xs text-white bg-indigo-700 rounded-md w-145 disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
            <div className="py-1 text-xs font-semibold">
              <span className="mr-1 underline">{posts.pageInfo.pageSize}</span>
              Pages
            </div>
          </div>
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
