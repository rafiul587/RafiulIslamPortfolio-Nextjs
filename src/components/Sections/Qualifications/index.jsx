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
        <span key={idx}>
          <WorkExperience work={work} />
        </span>
      );
    });

  university = educationList
    .sort((b, a) => a.id - b.id)
    .map((education, idx) => {
      return (
        <span key={idx}>
          <Education education={education} />
        </span>
      );
    });

  return (
    <div className="containerCustom gap overflow-hidden">
      <Title title="Experience & Education" titleDes="My professional journey and academic background" />

      <div className="relative mt-12 overflow-hidden">
        {/* Central Timeline Line (visible on large screens) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 hidden lg:block -translate-x-1/2"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
          {/* Work Experience Column */}
          <div className="flex flex-col relative h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <i className="bx bxs-briefcase-alt-2 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-wider">
                Experience
              </h3>
            </div>
            <div className="space-y-4 flex-grow">
              {experience}
            </div>
          </div>

          {/* Education Column */}
          <div className="flex flex-col relative h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <i className="fa-solid fa-graduation-cap text-2xl"></i>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-wider">
                Education
              </h3>
            </div>
            <div className="space-y-4 flex-grow">
              {university}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
