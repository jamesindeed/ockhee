import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className='mb-8 bg-white border border-gray-200 rounded-lg '>
      <h3 className='px-5 py-3 text-lg font-semibold border-b'>Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1 ? 'border-b-0' : 'border-b'
            } px-5 py-3 text-sm`}
          >
            #{category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
