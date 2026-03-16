"use client";
import educationList from "../../../utils/educationList.json";
import workList from "../../../utils/workList";
import Title from "../Title";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

export default function Qualifications() {
  let experience;
  let university;

  experience = workList
    .sort((b, a) => a.id - b.id)
    .map((work, idx) => {
      return (
        <div key={idx} className="w-full">
          <WorkExperience work={work} />
        </div>
      );
    });

  university = educationList
    .sort((b, a) => a.id - b.id)
    .map((education, idx) => {
      return (
        <div key={idx} className="w-full">
          <Education education={education} />
        </div>
      );
    });

  return (
    <div className="containerCustom gap overflow-hidden">
      <Title title="Experience & Education" titleDes="My professional journey and academic background" />

      <div className="relative mt-10 overflow-hidden max-w-[1000px] mx-auto min-h-[500px]">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[27px] md:left-[35px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800/50"></div>

        <div className="flex flex-col gap-10 relative">
          {/* Work Experience Section */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <i className="bx bxs-briefcase-alt-2 text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-black text-gray-900 dark:text-white uppercase tracking-wider">
                Work Experience
              </h3>
            </div>
            <div className="space-y-3.5 pl-12 md:pl-20">
              {experience}
            </div>
          </div>

          {/* Education Section */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <i className="bx bxs-graduation text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-black text-gray-900 dark:text-white uppercase tracking-wider">
                Education
              </h3>
            </div>
            <div className="space-y-4 pl-12 md:pl-20">
              {university}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
