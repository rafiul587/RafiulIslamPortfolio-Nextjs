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
              <div className="my-8" key={idx}>
                <Fade up delay={idx * 50}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
                    <div className="capitalize text-sm font-bold tracking-widest text-[#1dbf73] dark:text-[#1dbf73] px-2 text-center">
                      {name}
                    </div>
                    <div className="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {list?.map((skillItem, sIdx) => {
                      const {
                        name: skillName,
                        icon,
                        position,
                        progress,
                      } = skillItem || {};

                      return (
                        <div
                          className="group px-4 py-4 dark:bg-[#111827] bg-white border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-[#1dbf73]/40 dark:hover:border-[#1dbf73]/40 rounded-xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                          key={sIdx}
                        >
                          {/* Modern Progress Indicator (Subtle bottom bar) */}
                          <div className="absolute bottom-0 left-0 h-[3px] bg-gray-100 dark:bg-gray-800 w-full z-0"></div>
                          <div
                            className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#1dbf73] to-blue-500 transition-all duration-700 ease-in-out z-10 opacity-30 group-hover:opacity-100"
                            style={{ width: progress + "%" }}
                          ></div>

                          <div className="flex items-center gap-4 relative z-20">
                            <div className="p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                              <Image
                                src={
                                  icon ||
                                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                }
                                alt={skillName}
                                className="w-6 h-6 object-contain"
                                height={24}
                                width={24}
                                unoptimized
                              />
                            </div>
                            <div className="flex flex-col">
                              <div className="capitalize font-bold text-gray-900 dark:text-gray-100 text-sm">
                                {skillName}
                              </div>
                              <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-tighter">
                                {position}
                              </div>
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
