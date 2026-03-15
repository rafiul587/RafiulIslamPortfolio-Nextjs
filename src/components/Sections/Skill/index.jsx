"use client";
import skillsList from "@/utils/skillsList.json";
import { Fade } from "react-reveal";
import Title from "../Title";
import Image from "next/image";

export default function Skill() {
  return (
    <>
      <div className=" containerCustom gap">
        <Title title="skill" titleDes="Skills acquired over the years" />

        {skillsList?.length > 0 &&
          skillsList?.map((skill, idx) => {
            const { name, list } = skill;
            return (
              <div className="mb-8" key={idx}>
                <Fade up delay={idx * 50}>
                  <div className="mb-4 flex items-center gap-4">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#9333ea] dark:text-[#a855f7]">
                      {name}
                    </span>
                    <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {list?.map((skillItem, sIdx) => {
                      const {
                        name: skillName,
                        icon,
                        position,
                        progress,
                      } = skillItem || {};

                      return (
                        <div
                          className="group px-3.5 py-2 w-fit dark:bg-[#0f172a]/80 bg-white border border-gray-100 dark:border-gray-800/60 rounded-xl transition-all duration-300 hover:border-[#9333ea]/40 dark:hover:border-[#9333ea]/40 hover:shadow-lg hover:shadow-purple-500/5 flex items-center gap-3 backdrop-blur-sm"
                          key={sIdx}
                        >
                          <div className="w-7 h-7 flex items-center justify-center p-1 rounded-md bg-gray-50 dark:bg-[#1e293b]/50 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <Image
                              src={
                                icon ||
                                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                              }
                              alt={skillName}
                              className="w-full h-full object-contain"
                              height={28}
                              width={28}
                              unoptimized
                            />
                          </div>
                          <div className="flex flex-col text-left">
                            <div className="capitalize font-bold text-gray-900 dark:text-gray-100 text-[12px] tracking-tight leading-none mb-0.5">
                              {skillName}
                            </div>
                            <div className="text-[9px] text-gray-400 dark:text-gray-500 font-medium uppercase tracking-tighter">
                              {position}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            );
          })}
        {/* </div> */}
      </div>
    </>
  );
}
