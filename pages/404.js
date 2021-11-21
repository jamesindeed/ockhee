import React from "react";

const Error = () => {
  return (
    <div className="h-full bg-white-800">
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center justify-center mx-4 bg-white border rounded-lg md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <img
              className="hidden px-4 md:block"
              src="/109-map-location.png"
              alt=""
              width="250px"
              height="250px"
            />
            <img
              width="200px"
              height="200px"
              className="md:hidden"
              src="/109-map-location.png"
              alt=""
            />
            <h1 className="px-4 pt-8 pb-4 text-5xl font-bold leading-10 text-center text-gray-800">
              OOPS!{" "}
            </h1>
            <p className="px-6 pb-10 text-base leading-none text-center text-gray-600">
              404 Error! We cannot find the page you are looking for.{" "}
            </p>
            <button className="h-10 mx-4 text-base text-white bg-red-600 border rounded-md w-44 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">
              <a href="/">Go Home</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
