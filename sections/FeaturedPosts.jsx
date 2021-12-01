import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FeaturedPostCard, Loader } from '../components';
import { getFeaturedPosts } from '../services';

const responsive = {
  xxlDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 5,
  },
  xlDesktop: {
    breakpoint: { max: 1535, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  if (dataLoaded === false) {
    return (
      <div className='pt-5'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='mt-5 max-w-7xl'>
      <Carousel ssr infinite responsive={responsive} itemClass='px-4'>
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
