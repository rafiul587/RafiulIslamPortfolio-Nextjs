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
      <div className="group relative p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0b1327]/30 hover:shadow-lg transition-all duration-300">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-16 md:h-16 flex-shrink-0">
                <Zoom>
                  <Image
                    src={company_logo ? company_logo : icon}
                    alt={workTitle}
                    className="w-full h-full rounded-xl bg-gray-50 dark:bg-gray-800 p-2 object-contain"
                    width={100}
                    height={100}
                  />
                </Zoom>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  <Fade left>{workTitle}</Fade>
                </h4>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1 uppercase tracking-wide flex items-center gap-2">
                  <i className="bx bxs-briefcase-alt-2"></i> {position}
                </p>
              </div>
            </div>
            <div className="mt-2 md:mt-0 text-gray-500 dark:text-gray-400 text-[10px] md:text-xs font-bold bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap overflow-hidden">
              <Fade right duration={1300}>
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-calendar-days"></i>
                  {startDate} — {endDate}
                </div>
              </Fade>
            </div>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            <Fade up>
              <>
                <div className="flex items-center gap-2 mb-3 text-xs opacity-75">
                  <i className="fa-solid fa-location-dot"></i> {location}
                </div>
                <p>{description}</p>
                {/* Certificates and Projects rendering remains similar but with cleaner spacing */}
                {certificates && certificates.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {certificates.map((certificate, idx) => {
                      const { image, title } = certificate || {};
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800/50 p-2 pr-4 rounded-xl cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors"
                          onClick={handleOpen}
                        >
                          <Image
                            loader={() => image}
                            src={image}
                            alt={title}
                            className="h-12 w-16 rounded-md object-cover shadow-sm"
                            height={100}
                            width={100}
                          />
                          <span className="text-xs font-bold leading-tight line-clamp-2 max-w-[120px]">
                            {title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {relatedProjects.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                    <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Related Projects</h5>
                    <div className="space-y-4">
                      {relatedProjects.map((project, idx) => {
                        const { id, imageSrc, name, description: projectDes, category } = project || {};
                        return (
                          <div
                            className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                            key={idx}
                            onClick={() => handleOpenProject(id)}
                          >
                            <div className="w-20 md:w-24 h-16 md:h-16 flex-shrink-0">
                              <LazyLoadImage
                                src={imageSrc}
                                threshold="100"
                                alt={name}
                                effect="blur"
                                className="w-full h-full object-cover rounded-lg shadow-sm"
                              />
                            </div>
                            <div className="flex-grow min-w-0">
                              <div className="font-bold text-sm text-gray-900 dark:text-white truncate">
                                {name}
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mb-1">
                                {projectDes}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {category.slice(0, 2).map((cat, cIdx) => (
                                  <span key={cIdx} className="text-[10px] px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-bold uppercase">
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
