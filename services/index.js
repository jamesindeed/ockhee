import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const POSTS = gql`
    query getPosts() {
      postsConnection(orderBy: createdAt_DESC) {
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

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const GET_COMMENTS = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, GET_COMMENTS, { slug });

  return result.comments;
};

export const getFeaturedPosts = async () => {
  const GET_FEATURED_POSTS = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, GET_FEATURED_POSTS);

  return result.posts;
};

export const getCategoryPost = async (slug) => {
  const GET_CATEGORY_POST = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
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

  const result = await request(graphqlAPI, GET_CATEGORY_POST, { slug });

  return result.postsConnection.edges;
};

export const getNextPosts = async (createdAt, slug) => {
  const GET_NEXT_POSTS = gql`
    query GetNextPosts($createdAt: DateTime!, $slug: String!) {
      next: posts(
        first: 1
        orderBy: createdAt_ASC
        where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous: posts(
        first: 1
        orderBy: createdAt_DESC
        where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
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

  const res = await request(graphqlAPI, GET_NEXT_POSTS, { slug, createdAt });

  return { next: res.next[0], previous: res.previous[0] };
};
