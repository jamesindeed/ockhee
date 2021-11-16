import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const POSTS = gql`
    query getPosts {
      postsConnection {
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
  `;

  const res = await request(graphqlAPI, POSTS);

  return res.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const POST_DETAILS = gql`
    query getPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
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
        content {
          raw
        }
      }
    }
  `;

  const res = await request(graphqlAPI, POST_DETAILS, { slug });

  return res.post;
};

export const getRecentPosts = async () => {
  const RECENT_POSTS = gql`
    query getRecentPosts() {
      posts(
        orderBy: createdAt_ASC,
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const res = await request(graphqlAPI, RECENT_POSTS);

  return res.posts;
};

export const getSimilarPosts = async (categories, slug) => {
  const SIMILAR_POSTS = gql`
    query getSimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const res = await request(graphqlAPI, SIMILAR_POSTS, { slug, categories });

  return res.posts;
};

export const getCategories = async () => {
  const GET_CATEGORIES = gql`
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `;

  const res = await request(graphqlAPI, GET_CATEGORIES);

  return res.categories;
};
