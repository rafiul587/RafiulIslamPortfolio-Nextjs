import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard({ img, title, description }) {
  const Img = ({ src }) => {
    return src;
  };

  return (
    <>
      <div className="group w-full h-full flex flex-col my-3 bg-white dark:bg-[#0b1327]/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            loader={Img}
            className="h-full object-cover w-full group-hover:scale-105 transition-transform duration-500"
            src={img}
            alt={title}
            width={400}
            height={256}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="font-normal text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 text-sm leading-relaxed">
            {description}
          </p>
          <div className="mt-auto">
            <span className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
              Read Article
              <svg
                aria-hidden="true"
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
