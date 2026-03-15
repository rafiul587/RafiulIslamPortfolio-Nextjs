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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillsList?.length > 0 &&
          skillsList?.map((skill, idx) => {
            const { name, list } = skill;
            return (
              <div 
                className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800/60 bg-white/50 dark:bg-[#030712]/50 backdrop-blur-sm h-full" 
                key={idx}
              >
                <Fade up delay={idx * 50}>
                  <h3 className="text-lg md:text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    {name}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {list?.map((skillItem, sIdx) => {
                      const { name: skillName, icon } = skillItem || {};

                      return (
                        <div
                          className="group py-2 px-3 flex items-center gap-2.5 dark:bg-[#0f172a] bg-gray-50 border border-gray-200 dark:border-[#1e293b] rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#1e293b] hover:border-gray-300 dark:hover:border-[#334155]"
                          key={sIdx}
                        >
                          <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center transition-all duration-300">
                            <Image
                              src={icon || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}
                              alt={skillName}
                              width={20}
                              height={20}
                              className="object-contain"
                              unoptimized
                            />
                          </div>
                          <span className="text-xs md:text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 truncate">
                            {skillName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            );
          })}
      </div>
        {/* </div> */}
      </div>
    </>
  );
}
