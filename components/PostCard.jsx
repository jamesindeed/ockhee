import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="card cursor-pointer hover:-translate-y-1 transition-all duration-400 bg-white border border-gray-200 rounded-lg p-0 lg:p-6 pb-12 mb-8">
        <div className="relative overflow-hidden pb-80 mb-6">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>

        <h1 className="px-2 transition duration-400 text-center mb-8 cursor-pointer hover:text-indigo-500 text-2xl font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <div className="align-middle rounded-full h-8 w-8 overflow-hidden">
              <img alt={post.author.name} src={post.author.photo.url} />
            </div>
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-base">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-base text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
        <p className="text-center text-base text-gray-700 font-normal px-5 lg:px-20">
          {post.excerpt}{" "}
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
