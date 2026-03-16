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
      <div className="group relative p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0b1327]/30 hover:shadow-lg transition-all duration-300">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-16 md:h-16 flex-shrink-0">
                <Zoom>
                  <Image
                    src={edu_logo ? edu_logo : icon}
                    alt={educationTitle}
                    className="w-full h-full rounded-xl bg-gray-50 dark:bg-gray-800 p-2 object-contain"
                    width={100}
                    height={100}
                  />
                </Zoom>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  <Fade left>{educationTitle}</Fade>
                </h4>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1 uppercase tracking-wide flex items-center gap-2">
                  <i className="bx bxs-graduation text-lg"></i> {position}
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

          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
            <Fade up>
              <>
                <div className="flex items-center gap-2 mb-3 text-xs opacity-75">
                  <i className="fa-solid fa-location-dot"></i> {location}
                </div>
                <p>{description}</p>
              </>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
