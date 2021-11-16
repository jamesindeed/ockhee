import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
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

  console.log(recentPosts);

  return (
    <Popover className="relative bg-white">
      <div className="max-w-full mx-auto">
        <div className="px-8 flex justify-between items-center border-b border-gray-200 py-3 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Logo</span>
              <img
                className="h-10 w-auto"
                // *Logo
                src="/letter-o.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2">
            {" "}
            {/* md:hidden */}
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-black hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* Contact Button */}
          {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="/contact"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800"
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
          className="z-50 absolute max-w-7xl mx-auto md:pt-5 top-0 inset-x-0 p-2 transition transform origin-top-right"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-10 w-auto"
                    // *Logo for mobile menu
                    src="/letter-o.png"
                    alt="Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-black hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-8">
                <nav className="grid gap-y-8 bg-white">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-black"
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

                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href={`/category/${category.slug}`}
                      className="-m-3 p-3 flex categorys-center rounded-md hover:bg-gray-50"
                    >
                      <PlayIcon
                        className="flex-shrink-0 h-6 w-6 text-black"
                        aria-hidden="true"
                      />
                      {/* <img className="h-6 w-auto" src={item.icon} alt="Logo" /> */}
                      <span className="ml-3 capitalize text-base font-medium text-gray-900">
                        {category.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
              <div>
                <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                  Recent Posts
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {recentPosts.map((post, index) => (
                    <li>
                      <Link
                        key={index}
                        href={`/post/${post.slug}`}
                        className="text-base truncate font-medium text-gray-900 hover:text-gray-700"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="mt-5 text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-500 hover:text-indigo-400"
                >
                  {" "}
                  View all posts <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
