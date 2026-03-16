import React from "react";

export default function Title({ title, titleDes, className }) {
  return (
    <>
      <div className={`text-center mb-12 ${className}`}>
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            {title || "Title"}
          </span>
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-8 md:w-12 bg-gray-200 dark:bg-gray-800"></div>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            {titleDes || "Discover More"}
          </span>
          <div className="h-px w-8 md:w-12 bg-gray-200 dark:bg-gray-800"></div>
        </div>
      </div>
    </>
  );
}
