import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const CardAlt = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className='p-0 pb-6 mb-8 overflow-hidden transition-all bg-white border border-gray-200 rounded-lg cursor-pointer last:mb-0 card hover:-translate-y-1 duration-00 lg:p-6'>
        <div className='relative mb-6 overflow-hidden rounded-t-lg pb-60 lg:rounded-lg'>
          <Image
            unoptimized
            loader={grpahCMSImageLoader}
            src={post.featuredImage.url}
            alt={post.title}
            className='absolute object-cover object-top w-full shadow-sm h-60'
            layout='fill'
          />
        </div>

        <div className='px-6 py-2 lg:px-0'>
          <h2 className='text-2xl font-bold transition duration-400 hover:text-indigo-500'>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className='mt-2 text-sm prose text-gray-600'>{post.excerpt}</p>
          <div className='flex flex-row items-center mt-4'>
            <div className='w-8 h-8 mr-3 overflow-hidden align-middle rounded-full'>
              <img alt={post.author.name} src={post.author.photo.url} />
            </div>
            <div className='mr-2 text-sm font-bold'>{post.author.name}</div>
            <div className='text-xs text-gray-400'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </div>
          </div>
          <div className='flex flex-row flex-wrap'>
            {post.categories.slice(0, 4).map((category, index) => (
              <div
                key={index}
                className='px-2 py-1 mt-6 mr-2 text-xs text-indigo-700 uppercase bg-indigo-200 rounded-full'
              >
                <p>#{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardAlt;
