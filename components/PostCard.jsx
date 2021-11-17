import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="p-0 pb-12 mb-8 transition-all bg-white border border-gray-200 rounded-lg cursor-pointer card hover:-translate-y-1 duration-400 lg:p-6">
        <div className="relative mb-6 overflow-hidden pb-80">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="absolute object-cover object-top w-full rounded-t-lg shadow-lg h-80 lg:rounded-lg"
          />
        </div>

        <h1 className="px-2 mb-8 text-2xl font-semibold text-center transition cursor-pointer duration-400 hover:text-indigo-500">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="items-center justify-center block w-full mb-8 text-center lg:flex">
          <div className="flex items-center justify-center w-full mb-4 mr-8 lg:mb-0 lg:w-auto">
            <div className="w-8 h-8 overflow-hidden align-middle rounded-full">
              <img alt={post.author.name} src={post.author.photo.url} />
            </div>
            <p className="inline ml-2 text-base font-medium text-gray-700 align-middle">
              {post.author.name}
            </p>
          </div>
          <div className="text-base font-medium text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline w-6 h-6 mr-2 text-indigo-500"
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
        <p className="px-5 text-base font-normal text-center text-gray-700 lg:px-20">
          {post.excerpt}{" "}
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
