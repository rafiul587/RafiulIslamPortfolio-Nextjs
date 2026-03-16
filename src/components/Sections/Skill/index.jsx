"use client";
import skillsList from "@/utils/skillsList.json";
import { Fade } from "react-reveal";
import Title from "../Title";
import Image from "next/image";

export default function Skill() {
  return (
    <div className="containerCustom gap">
      <Title title="Skills" titleDes="A comprehensive overview of my technical expertise" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsList?.length > 0 &&
          skillsList?.map((skill, idx) => {
            const { name, list } = skill;
            return (
              <div 
                className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b1327]/50 shadow-sm hover:shadow-md transition-all duration-300"
                key={idx}
              >
                <Fade up delay={idx * 50}>
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    {name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {list?.map((skillItem, sIdx) => {
                      const { name: skillName, icon } = skillItem || {};

                      return (
                        <div
                          className="px-3 py-1.5 dark:bg-[#1e293b]/40 bg-gray-50/80 border border-gray-200 dark:border-gray-800 rounded-lg transition-all duration-300 hover:border-blue-500/30 flex items-center gap-2.5"
                          key={sIdx}
                        >
                          {icon && (
                            <Image
                              src={icon}
                              alt={skillName}
                              width={16}
                              height={16}
                              className="object-contain transition-transform duration-300 group-hover:scale-110"
                              unoptimized
                            />
                          )}
                          <span className="text-[13px] font-medium text-gray-600 dark:text-gray-400">
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
    </div>
  );
}
