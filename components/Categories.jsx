import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-8">
      <h3 className="text-lg font-semibold border-b px-5 py-3">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
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
