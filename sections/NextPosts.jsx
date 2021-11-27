import React, { useState, useEffect } from 'react';

import { NextPostCard } from '../components';
import { getNextPosts } from '../services';

const NextPosts = ({ createdAt, slug }) => {
  const [nextPost, setNextPost] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getNextPosts(createdAt, slug).then((result) => {
      setNextPost(result);
      setDataLoaded(true);
    });
  }, [slug]);

  return (
    <div className='grid grid-cols-1 gap-12 mb-8 lg:grid-cols-8'>
      {dataLoaded && (
        <>
          {nextPost.previous && (
            <div
              className={`${
                nextPost.next
                  ? 'col-span-1 lg:col-span-4'
                  : 'col-span-1 lg:col-span-8'
              } next-post rounded-lg relative h-72`}
            >
              <NextPostCard post={nextPost.previous} position='LEFT' />
            </div>
          )}
          {nextPost.next && (
            <div
              className={`${
                nextPost.previous
                  ? 'col-span-1 lg:col-span-4'
                  : 'col-span-1 lg:col-span-8'
              } next-post rounded-lg relative h-72`}
            >
              <NextPostCard post={nextPost.next} position='RIGHT' />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NextPosts;
