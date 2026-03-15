"use client";
import React from "react";
import Title from "../Title";
import awardList from "@/utils/awardList.json";
import { Fade } from "react-reveal";
import Image from "next/image";

export default function Award() {
  return (
    <div className="containerCustom gap">
      <Title 
        title="Awards & Activities" 
        titleDes="Official recognition and professional milestones" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {awardList.map((award, idx) => (
          <Fade up delay={idx * 100} key={award.id}>
            <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 dark:bg-[#0f172a]/80 bg-white border border-gray-100 dark:border-gray-800/60 rounded-xl transition-all duration-300 hover:border-[#9333ea]/40 dark:hover:border-[#9333ea]/40 hover:shadow-lg hover:shadow-purple-500/5 backdrop-blur-sm">
              <div className="h-full w-full sm:h-20 sm:w-24 aspect-[16/10] sm:aspect-auto relative overflow-hidden rounded-lg flex-shrink-0 border border-gray-100 dark:border-gray-800">
                <Image
                  src={award.image}
                  alt={award.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60 sm:hidden"></div>
                 <div className="absolute bottom-2 left-2 sm:hidden">
                    <span className="bg-[#9333ea] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-widest">
                        {award.date}
                    </span>
                 </div>
              </div>
              
              <div className="flex-grow min-w-0 w-full sm:w-auto mt-2 sm:mt-0">
                <div className="flex justify-between items-start mb-1 gap-2">
                  <div className="text-[10px] font-bold text-[#9333ea] uppercase tracking-widest truncate">
                    {award.event}
                  </div>
                  <span className="hidden sm:inline-block text-[10px] font-bold text-gray-400 dark:text-gray-500 whitespace-nowrap">
                      {award.date}
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-black dark:text-gray-100 text-gray-900 mb-1 leading-tight truncate">
                  {award.name}
                </h3>
                <p className="text-[11px] lg:text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                  {award.description}
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
