import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className='relative overflow-hidden h-72'>
    <div
      className='absolute inline-block object-contain w-full bg-center bg-no-repeat bg-cover border border-gray-100 rounded-lg h-72'
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className='absolute w-full bg-center rounded-lg opacity-50 bg-gradient-to-b from-gray-400 via-gray-700 to-black h-72' />
    <div className='absolute flex flex-col items-center justify-center w-full h-full p-4 rounded-lg'>
      <p className='mb-4 text-xs font-semibold text-white text-shadow'>
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <p className='mb-4 text-xl font-semibold text-center text-white text-shadow'>
        {post.title}
      </p>
      <div className='absolute flex items-center justify-center w-full bottom-5'>
        <div className='w-8 h-8 overflow-hidden align-middle rounded-full'>
          <img alt={post.author.name} src={post.author.photo.url} />
        </div>
        <p className='inline ml-2 text-sm font-medium text-white align-middle text-shadow'>
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className='absolute w-full h-full cursor-pointer' />
    </Link>
  </div>
);

export default FeaturedPostCard;
