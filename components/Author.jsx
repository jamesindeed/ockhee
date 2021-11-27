import React from 'react';

const Author = ({ author }) => {
  return (
    <div className='relative p-6 my-8 text-center bg-white border border-gray-200 rounded-lg'>
      <div className='flex'>
        <div className='w-20 h-20 mx-auto overflow-hidden bg-cover rounded-full'>
          <img alt={author.name} src={author.photo.url} />
        </div>
      </div>
      <h3 className='my-4 text-lg font-bold'>{author.name}</h3>
      <p className='mx-auto text-sm prose'>{author.bio}</p>
    </div>
  );
};

export default Author;
