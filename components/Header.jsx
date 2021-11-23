import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuAlt3Icon,
  PlayIcon,
  XIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";
import { getRecentPosts, getCategories } from "../services";
import Link from "next/link";

const solutions = [
  {
    name: "Contact",
    description: "Contact Me.",
    href: "/contact",
    icon: ChatAlt2Icon,
  },
];

export default function Header() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getRecentPosts().then((res) => setRecentPosts(res));
    getCategories().then((res) => setCategories(res));
  }, []);

  return (
    <Popover className="relative bg-white">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 md:px-8 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Logo</span>
              <img
                id="logo"
                className="w-auto h-10"
                // *Logo
                src="/logo1.gif"
                alt="Logo"
              />
              {/* 
              // !Animated Logo
              <div className="scotch-logo liquid-clip--hidden">
                <img className="scotch-logo__image" src="" />
                <svg className="scotch-logo__liquid" viewBox="0 0 30 48">
                  <defs>
                    <clipPath id="clip-path--glass">
                      <path
                        className="liquid__path-container"
                        d="M 8.6 1.5 c 0 13.33 -4.17 20 -3.75 23.33 a 9.17 8.33 0 0 0 20.83 0 c 0.42 -3.33 -3.75 -10 -3.75 -23.33 Z"
                      ></path>
                    </clipPath>
                    <clipPath id="clip-path--liquid">
                      <path
                        className="liquid__path liquid__path--top-clip"
                        d="M -80 22 C -75.08 16 -69.08 16 -64.17 22 S -53.25 28 -48.33 22 S -37.42 16 -32.5 22 S -21.58 28 -16.67 22 S -5.75 16 -0.83 22 S 10.08 28 15 22 S 25.92 16 30.83 22 S 41.75 28 46.67 22 S 57.58 16 62.5 22 S 73.42 28 78.33 22 S 89.25 16 94.17 22 S 105.08 28 110 22 l 0 30 l -190 0"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clip-path--glass)">
                    <circle
                      className="liquid__drop liquid__drop--top liquid__drop--1"
                      cx="18.3"
                      cy="3.3"
                      r="1.5"
                    ></circle>
                    <circle
                      className="liquid__drop liquid__drop--bottom liquid__drop--2"
                      cx="12"
                      cy="5"
                      r="1.5"
                    ></circle>
                    <path
                      className="liquid__path liquid__path--top"
                      d="M -80 22 C -75.08 16 -69.08 16 -64.17 22 S -53.25 28 -48.33 22 S -37.42 16 -32.5 22 S -21.58 28 -16.67 22 S -5.75 16 -0.83 22 S 10.08 28 15 22 S 25.92 16 30.83 22 S 41.75 28 46.67 22 S 57.58 16 62.5 22 S 73.42 28 78.33 22 S 89.25 16 94.17 22 S 105.08 28 110 22 l 0 30 l -190 0"
                    ></path>
                    <path
                      className="liquid__path liquid__path--bottom"
                      d="M -70 24.5 C -65.92 18.5 -59.92 18.5 -55.83 24.5 S -45.75 30.5 -41.67 24.5 S -31.58 18.5 -27.5 24.5 S -17.42 30.5 -13.33 24.5 S -3.25 18.5 0.83 24.5 S 10.92 30.5 15 24.5 S 25.08 18.5 29.17 24.5 S 39.25 30.5 43.33 24.5 S 53.42 18.5 57.5 24.5 S 67.58 30.5 71.67 24.5 S 81.75 18.5 85.83 24.5 S 95.92 30.5 100 24.5 l 0 30 l -170 0"
                    ></path>
                    <g
                      className="liquid__path--clip-container"
                      clip-path="url(#clip-path--liquid)"
                    >
                      <path
                        className="liquid__path liquid__path--bottom-clip"
                        d="M -70 24.5 C -65.92 18.5 -59.92 18.5 -55.83 24.5 S -45.75 30.5 -41.67 24.5 S -31.58 18.5 -27.5 24.5 S -17.42 30.5 -13.33 24.5 S -3.25 18.5 0.83 24.5 S 10.92 30.5 15 24.5 S 25.08 18.5 29.17 24.5 S 39.25 30.5 43.33 24.5 S 53.42 18.5 57.5 24.5 S 67.58 30.5 71.67 24.5 S 81.75 18.5 85.83 24.5 S 95.92 30.5 100 24.5 l 0 30 l -170 0"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div> */}
            </a>
          </div>
          <div className="-my-2 -mr-2">
            {" "}
            <Popover.Button className="inline-flex items-center justify-center p-1 m-1 text-black bg-white rounded-md hover:text-black hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuAlt3Icon className="w-7 h-7" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 p-2 mx-auto transition origin-top-right transform max-w-7xl md:pt-5"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-10"
                    // *Logo for mobile menu
                    src="/logo1.gif"
                    alt="Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-black bg-white rounded-md hover:text-black hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-8">
                <nav className="grid bg-white gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 w-6 h-6 text-black"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}

                  <span className="text-base font-bold text-gray-900">
                    Catagories
                  </span>

                  {categories.slice(0, 4).map((category, index) => (
                    <a
                      key={index}
                      href={`/category/${category.slug}`}
                      className="flex p-2 -m-3 rounded-md categorys-center hover:bg-gray-50"
                    >
                      <PlayIcon
                        className="flex-shrink-0 w-6 h-6 text-black"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900 capitalize">
                        {category.name}
                      </span>
                    </a>
                  ))}

                  <div className="text-sm">
                    <a
                      href="/category"
                      className="font-medium text-indigo-500 hover:text-indigo-400"
                    >
                      {" "}
                      View all catagories <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>

            <div className="px-5 py-5 rounded-b-lg bg-gray-50">
              <div>
                <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                  Recent Posts
                </h3>
                <ul role="list" className="mt-3 space-y-3">
                  {recentPosts.map((post, index) => (
                    <li
                      key={index}
                      className="text-base font-medium text-gray-900 truncate hover:text-gray-700"
                    >
                      <Link href={`/post/${post.slug}`}>{post.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 text-sm">
                <a
                  href="/"
                  className="font-medium text-indigo-500 hover:text-indigo-400"
                >
                  {" "}
                  View all posts <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
