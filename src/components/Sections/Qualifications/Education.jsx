import icon from "@/assets/images/png/university.png";
import useWindowDimensions from "@/hook/getWindowDimensions";
import Image from "next/image";
import { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import CertificateModal from "./CertificateModal";

export default function Education({ education }) {
  const {
    description,
    endDate,
    startDate,
    educationTitle,
    edu_logo,
    position,
    location,
    certificates,
  } = education || {};
  const { width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);
  const [contents, setContent] = useState([]);

  const handleOpen = () => {
    setOpen(true);
    setContent(certificates);
  };

  return (
    <>
      <div className="group relative p-3 md:p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0b1327]/30 hover:shadow-lg transition-all duration-300">
        <div className="w-full">
          <div className="flex items-center gap-3 md:gap-4 mb-2.5">
            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
              <Zoom>
                <Image
                  src={edu_logo ? edu_logo : icon}
                  alt={educationTitle}
                  className="w-full h-full rounded-lg bg-gray-50 dark:bg-gray-800 p-1 object-contain"
                  width={48}
                  height={48}
                />
              </Zoom>
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-3">
                <h4 className="text-sm md:text-base font-bold text-gray-900 dark:text-white leading-tight truncate">
                  <Fade left>{educationTitle}</Fade>
                </h4>
                <div className="text-[9px] md:text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full whitespace-nowrap w-fit">
                  <Fade right duration={1300}>
                    <span>{startDate} — {endDate}</span>
                  </Fade>
                </div>
              </div>
              <div className="flex flex-col mt-1 gap-0.5">
                <p className="text-[10px] md:text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide flex items-center gap-1.5">
                  <i className="bx bxs-graduation text-xs"></i> {position}
                </p>
                <div className="flex items-center gap-1 text-[9px] md:text-[10px] text-gray-500 dark:text-gray-400 opacity-80">
                  <i className="fa-solid fa-location-dot text-[9px]"></i> {location}
                </div>
              </div>
            </div>
          </div>

          <div className="text-[11px] md:text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
            <Fade up>
              <>
                <p className="line-clamp-2 hover:line-clamp-none transition-all duration-300 mb-2">{description}</p>
                
                {certificates && certificates.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {certificates.map((certificate, idx) => {
                      const { image, title } = certificate || {};
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 p-1 pr-2 rounded cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900/30"
                          onClick={handleOpen}
                        >
                          <Image
                            loader={() => image}
                            src={image}
                            alt={title}
                            className="h-8 w-10 rounded-sm object-cover shadow-sm"
                            height={32}
                            width={40}
                          />
                          <span className="text-[9px] font-bold leading-tight line-clamp-1 max-w-[80px]">
                            {title}
                          </span>
                        </div>
                      );
                    })}
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
    </>
  );
}
