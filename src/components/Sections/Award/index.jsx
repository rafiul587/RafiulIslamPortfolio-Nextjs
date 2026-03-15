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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awardList.map((award, idx) => (
          <Fade up delay={idx * 100} key={award.id}>
            <div className="group h-full flex flex-col dark:bg-[#0f172a] bg-white border border-gray-200 dark:border-[#1e293b] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-gray-50 dark:hover:bg-[#1e293b] hover:border-gray-300 dark:hover:border-[#334155]">
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-gray-500 dark:text-[#94a3b8] uppercase tracking-widest bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                    {award.event}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500">
                    {award.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {award.name}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-[#94a3b8] leading-relaxed line-clamp-3">
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
