import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getSimilarPosts, getRecentPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-8 pb-5">
      <h3 className="text-lg font-semibold border-b px-5 py-3">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full pt-5 px-5">
          <div className="align-middle rounded-full h-8 w-8 overflow-hidden">
            <img
              alt={post.title}
              className="w-8 h-8 align-middle"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 text-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <p className="text-sm">
              <Link href={`/post/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;

// posts.slice(0, 3).map Returns first 3 from array
