import React, { useRef, useState, useEffect } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  });

  const handleSubmit = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!name || !email || !comment) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="p-8 pb-12 mb-8 bg-white border border-gray-200 rounded-lg">
      <h3 className="pb-4 mb-2 text-lg font-semibold">Comments</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          required
          ref={commentEl}
          className="w-full p-4 text-sm text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
        <input
          required
          type="text"
          ref={nameEl}
          className="w-full p-4 text-sm text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
          name="name"
        />
        <input
          required
          type="text"
          ref={emailEl}
          className="w-full p-4 text-sm text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            className="ml-1"
            ref={storeDataEl}
            type="checkbox"
            name="storeData"
            id="storeData"
            value="true"
          />
          <label
            className="pl-2 text-sm text-gray-500 cursor-pointer"
            htmlFor="storeData"
          >
            {" "}
            Save my name and email for the next time I comment.
          </label>
        </div>
        {error && (
          <p className="text-xs text-red-500">All fields are required</p>
        )}
        <div className="mt-2">
          <button
            type="button"
            className="inline-block px-3 py-1 text-white transition duration-500 bg-black rounded-lg cursor-pointer ease hover:bg-indigo-900 text-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {showSuccessMessage && (
            <span className="float-right text-sm font-semibold text-green-500">
              Comment submitted for review.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsForm;
