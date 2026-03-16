import icon from "@/assets/images/png/university.png";
import useWindowDimensions from "@/hook/getWindowDimensions";
import Image from "next/image";
import { Fade, Zoom } from "react-reveal";

export default function Education({ education }) {
  const {
    description,
    endDate,
    startDate,
    educationTitle,
    edu_logo,
    position,
    location,
  } = education || {};
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="group relative p-4 md:p-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0b1327]/30 hover:shadow-lg transition-all duration-300">
        <div className="w-full">
          <div className="flex items-center gap-3 md:gap-5 mb-3">
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center">
              <Zoom>
                <Image
                  src={edu_logo ? edu_logo : icon}
                  alt={educationTitle}
                  className="w-full h-full rounded-lg bg-gray-50 dark:bg-gray-800 p-1.5 object-contain"
                  width={64}
                  height={64}
                />
              </Zoom>
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-4">
                <h4 className="text-base md:text-lg font-bold text-gray-900 dark:text-white leading-tight truncate">
                  <Fade left>{educationTitle}</Fade>
                </h4>
                <div className="text-[10px] md:text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full whitespace-nowrap w-fit">
                  <Fade right duration={1300}>
                    <span>{startDate} — {endDate}</span>
                  </Fade>
                </div>
              </div>
              <div className="flex flex-col mt-1.5 gap-1">
                <p className="text-[11px] md:text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide flex items-center gap-1.5">
                  <i className="bx bxs-graduation text-sm"></i> {position}
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
                <p className="line-clamp-2 hover:line-clamp-none transition-all duration-300">{description}</p>
              </>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
