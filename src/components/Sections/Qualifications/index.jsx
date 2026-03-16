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

      <div className="relative mt-12 overflow-hidden max-w-[1000px] mx-auto min-h-[500px]">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[31px] md:left-[39px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800/50"></div>

        <div className="flex flex-col gap-12 relative">
          {/* Work Experience Section */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <i className="bx bxs-briefcase-alt-2 text-2xl md:text-3xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white uppercase tracking-wider">
                Work Experience
              </h3>
            </div>
            <div className="space-y-4 pl-14 md:pl-24">
              {experience}
            </div>
          </div>

          {/* Education Section */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <i className="bx bxs-graduation text-2xl md:text-3xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white uppercase tracking-wider">
                Education
              </h3>
            </div>
            <div className="space-y-8 pl-14 md:pl-24">
              {university}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
