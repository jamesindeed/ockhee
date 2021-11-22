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
// const categories = [
//   {
//     name: "React",
//     slug: "#",
//   },
//   {
//     name: "Web Dev",
//     slug: "#",
//   },
//   {
//     name: "Resources",
//     slug: "#",
//   },
//   {
//     name: "Themes",
//     slug: "#",
//   },
// ];

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
        <div className="flex items-center justify-between px-8 py-3 border-b border-gray-200 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Logo</span>
              <img
                className="w-auto h-10"
                // *Logo
                src="/logo1.gif"
                alt="Logo"
              />
            </a>
          </div>
          <div className="-my-2 -mr-2">
            {" "}
            {/* md:hidden */}
            <Popover.Button className="inline-flex items-center justify-center p-1 m-1 text-black bg-white rounded-md hover:text-black hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuAlt3Icon className="w-7 h-7" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* Contact Button */}
          {/* <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-gray-800"
            >
              Contact
            </a>
          </div> */}
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
