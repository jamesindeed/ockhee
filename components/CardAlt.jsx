import React from "react";
import Link from "next/link";
import moment from "moment";

const CardAlt = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="card overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-00 bg-white border border-gray-200 rounded-lg p-0 lg:p-6 pb-6 mb-8">
        <div className="relative overflow-hidden pb-60 mb-6 rounded-t-lg lg:rounded-lg">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top absolute h-60 w-full object-cover shadow-sm"
          />
        </div>

        <div className="px-6 py-2 lg:px-0">
          <h2 className="text-xl font-bold transition duration-400 hover:text-indigo-500">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
          <div className="flex flex-row mt-4 items-center">
            <div className="align-middle rounded-full h-8 w-8 overflow-hidden mr-3">
              <img alt={post.author.name} src={post.author.photo.url} />
            </div>
            <div className="font-bold mr-2 text-sm">{post.author.name}</div>
            <div className="text-gray-400 text-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </div>
          </div>
          <div className="flex flex-row flex-wrap">
            {post.categories.slice(0, 4).map((category) => (
              <div className="uppercase text-xs text-indigo-700 bg-indigo-200 px-2 py-1 mt-6 rounded-full mr-2">
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
