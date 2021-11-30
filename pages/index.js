import { FeaturedPosts } from '../sections';
import Head from 'next/head';
import { CardAlt, PostWidget, Categories } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className='container px-10 mx-auto mb-8 max-w-7xl'>
      <Head>
        <title>Ockhee</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap'
        />
        <link rel='icon' href='/letter-o72.ico' />
      </Head>
      <span className='hidden sm:contents'>
        <FeaturedPosts />
      </span>
      <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-8 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8 md:col-span-5'>
          {posts.map((post) => (
            <CardAlt key={post.node.title} post={post.node} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4 md:col-span-3'>
          <div className='relative lg:sticky md:sticky md:top-8'>
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
