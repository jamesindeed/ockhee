import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="px-8 pt-10 pb-4 bg-white border border-gray-200 rounded-lg">
          <h3 className="pb-4 mb-2 text-lg font-semibold">
            {comments.length >= 2 ? (
              <span>{comments.length} Comments</span>
            ) : (
              <span>1 Comment</span>
            )}
          </h3>
          {comments.map((comment, index) => (
            <div
              key={index}
              className="pb-4 mb-4 text-sm prose border-gray-100 order-b text-md"
            >
              <p className="mb-4">
                <span className="font-semibold"> {comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="w-full whitespace-pre-line stext-gray-600">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
