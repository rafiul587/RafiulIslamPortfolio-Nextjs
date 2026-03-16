"use client";
import icon from "@/assets/images/webp/work.webp";
import useWindowDimensions from "@/hook/getWindowDimensions";
import Image from "next/image";
import { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import CertificateModal from "./CertificateModal";
import projectList from "@/utils/projectList";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProjectModal from "../Project/ProjectSlide";
import blur from "@/assets/images/webp/blur.webp";

export default function WorkExperience({ work }) {
  const {
    id,
    description,
    endDate,
    startDate,
    workTitle,
    position,
    location,
    certificates,
    company_logo,
  } = work || {};
  const { width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);
  const [OpenProject, setOpenProject] = useState(false);
  const [contents, setContent] = useState([]);
  const [projectId, setProjectId] = useState("");

  const handleOpen = () => {
    setOpen(true);
    setContent(certificates);
  };

  const handleOpenProject = (id) => {
    setOpenProject(true);
    setProjectId(id);
  };

  const relatedProjects = projectList.filter(
    ({ worked_company_id }) => id === worked_company_id
  );

  return (
    <>
      <div className="group relative p-4 md:p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0b1327]/30 hover:shadow-md transition-all duration-300">
        <div className="w-full">
          <div className="flex items-center gap-3 md:gap-5 mb-3">
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center">
              <Zoom>
                <Image
                  src={company_logo ? company_logo : icon}
                  alt={workTitle}
                  className="w-full h-full rounded-lg bg-gray-50 dark:bg-gray-800 p-1.5 object-contain"
                  width={64}
                  height={64}
                />
              </Zoom>
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-4">
                <h4 className="text-base md:text-lg font-bold text-gray-900 dark:text-white leading-tight truncate">
                  <Fade left>{workTitle}</Fade>
                </h4>
                <div className="text-[10px] md:text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full whitespace-nowrap w-fit">
                  <Fade right duration={1300}>
                    <span>{startDate} — {endDate}</span>
                  </Fade>
                </div>
              </div>
              <div className="flex flex-col mt-1.5 gap-1">
                <p className="text-[11px] md:text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide flex items-center gap-1">
                  <i className="bx bxs-briefcase-alt-2"></i> {position}
                </p>
                <div className="flex items-center gap-1 text-[10px] md:text-xs text-gray-500 dark:text-gray-400 opacity-80">
                  <i className="fa-solid fa-location-dot text-[10px]"></i> {location}
                </div>
              </div>
            </div>
          </div>

          <div className="text-[12px] md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <Fade up>
              <>
                <p className="line-clamp-2 hover:line-clamp-none transition-all duration-300 mb-3">{description}</p>
                
                {workTitle.toLowerCase().includes("fiverr") && (
                  <div className="mt-2 mb-4">
                    <a 
                      href="https://fiverr.com/rafiul587" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1dbf73] hover:bg-[#19a463] text-white text-[10px] font-bold rounded-full transition-all shadow-sm hover:shadow-md"
                    >
                      <i className="fa-brands fa-fiverr text-lg"></i>
                      VIEW FIVERR PROFILE
                    </a>
                  </div>
                )}
                
                {certificates && certificates.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {certificates.map((certificate, idx) => {
                      const { image, title } = certificate || {};
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 p-1.5 pr-3 rounded-lg cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors"
                          onClick={handleOpen}
                        >
                          <Image
                            loader={() => image}
                            src={image}
                            alt={title}
                            className="h-10 w-12 rounded object-cover shadow-sm"
                            height={40}
                            width={48}
                          />
                          <span className="text-[10px] font-bold leading-tight line-clamp-1 max-w-[100px]">
                            {title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {relatedProjects.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex flex-wrap gap-4">
                      {relatedProjects.map((project, idx) => {
                        const { id, imageSrc, name, category } = project || {};
                        return (
                          <div
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                            key={idx}
                            onClick={() => handleOpenProject(id)}
                          >
                            <div className="w-10 h-10 flex-shrink-0">
                              <LazyLoadImage
                                src={imageSrc}
                                threshold="100"
                                alt={name}
                                effect="blur"
                                className="w-full h-full object-cover rounded shadow-sm"
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="font-bold text-xs text-gray-900 dark:text-white truncate max-w-[150px]">
                                {name}
                              </div>
                              <div className="flex gap-1 mt-0.5">
                                {category.slice(0, 1).map((cat, cIdx) => (
                                  <span key={cIdx} className="text-[9px] px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded font-bold uppercase">
                                    {cat}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            </Fade>
          </div>
        </div>
      </div>

      <CertificateModal
        contents={contents}
        open={isOpen}
        setOpen={setOpen}
        handleOpen={handleOpen}
      />

      <ProjectModal
        open={OpenProject}
        handleOpen={handleOpenProject}
        setOpen={setOpenProject}
        projectId={projectId}
      />
    </>
  );
}
