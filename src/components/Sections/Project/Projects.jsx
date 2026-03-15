"use client";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import blur from "@/assets/images/webp/blur.webp";
import ProjectSlide from "./ProjectSlide";
import classnames from "classnames";

export default function Projects({ item, isGridView, path }) {
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState("");

  const handleOpen = (id) => {
    setOpen(true);
    setProjectId(id);
  };

  const {
    id = "",
    imageSrc = [],
    placeholderSrc = blur,
    name = "Unknown Project",
    category = [],
    description = "No description available.",
  } = item || {};

  return (
    <>
      <div
        className={classnames(
          "relative projectBtn group object-contain overflow-hidden hover:cursor-pointer w-full min-h-24 rounded-2xl border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:border-[#1dbf73]/30",
          {
            "flex items-center gap-3": !isGridView,
          }
        )}
        onClick={() => handleOpen(id)}
      >
        <div
          className={classnames(
            "overflow-hidden transition-transform duration-700 group-hover:scale-110",
            path === "/" || isGridView
              ? "w-full h-64 sm:h-52 lg:h-56"
              : "w-60 h-24 md:h-32 rounded-xl "
          )}
        >
          <LazyLoadImage
            src={imageSrc[0] || placeholderSrc}
            placeholderSrc={placeholderSrc}
            threshold="100"
            alt={name}
            effect="blur"
            height="100%"
            width="100%"
            className="object-cover min-h-full block w-full"
            loading="lazy"
          />
        </div>

        {path === "/" || isGridView ? (
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-30">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="font-black capitalize text-lg text-white mb-1">
                {name}
              </div>
              <div className="text-gray-300 text-xs font-bold uppercase tracking-widest flex flex-wrap gap-2">
                {category.slice(0, 3).map((cat, idx) => (
                  <span key={idx} className="flex items-center">
                    {idx > 0 && <span className="mx-1 opacity-50">•</span>}
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full pr-4">
            <div className="font-bold text-lg capitalize line-clamp-1 mb-1 dark:text-gray-100">
              {name}
            </div>
            <div className="text-sm line-clamp-2 mb-3 text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              {description}
            </div>
            <div className="flex flex-wrap gap-2">
              {category.slice(0, 4).map((cat, idx) => (
                <span
                  className="bg-gray-100 text-gray-700 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  key={idx}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <ProjectSlide
        open={open}
        handleOpen={handleOpen}
        setOpen={setOpen}
        projectId={projectId}
      />
    </>
  );
}
