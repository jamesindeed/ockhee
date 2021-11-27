import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className='pb-5 mb-8 bg-white border border-gray-200 rounded-lg'>
      <h3 className='px-5 py-3 text-lg font-semibold border-b'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className='flex items-center w-full px-5 pt-5'>
          <div className='w-8 h-8 overflow-hidden align-middle rounded-full'>
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              height='60px'
              width='60px'
              alt={post.title}
              className='align-middle'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-xs text-gray-500'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <p className='text-sm'>
              <Link href={`/post/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;

// posts.slice(0, 3).map Returns first 3 from array
