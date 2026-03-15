import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ProjectList from "@/utils/projectList.json";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";
import { IoIosArrowBack } from "react-icons/io";

function ProjectSlide({ setOpen, open, projectId }) {
  const handleClose = () => {
    document.body.classList.remove("overflow-hidden");
    setOpen(false);
  };

  const findProject = ProjectList.find((project) => project?.id === projectId);

  if (!findProject) return null;

  const {
    name,
    imageSrc = [],
    category = [],
    link,
    source,
    description,
  } = findProject || {};

  if (open) {
    document.body.classList.add("overflow-hidden");
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-full w-full bg-gray-50 dark:bg-[#111827] z-30 shadow-lg"
        >
          <PageLayout>
            <div className="h-[calc(100vh-4.2rem)] w-full overflow-y-auto">
              <div className="containerCustom max-w-screen-lg py-5">
                {/* Close Button */}
                <button
                  className="mb-8 pl-3 pr-5 py-2 rounded-full dark:bg-gray-800 bg-white shadow-sm border border-gray-100 dark:border-gray-700 hover:border-[#1dbf73]/50 dark:hover:border-[#1dbf73]/50 dark:text-white text-gray-700 z-50 flex items-center gap-2 transition-all duration-300 group"
                  onClick={handleClose}
                >
                  <IoIosArrowBack className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-bold uppercase tracking-wider">
                    Back to Portfolio
                  </span>
                </button>

                {/* Hero Section of Slide */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7">
                    <div className="overflow-hidden rounded-2xl relative select-none shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                      <PhotoProvider>
                        {imageSrc.length > 1 ? (
                          <Swiper
                            navigation
                            modules={[Navigation, Pagination, Autoplay]}
                            className="mySwiper w-full aspect-video"
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop
                          >
                            {imageSrc.map((img, idx) => (
                              <SwiperSlide key={idx} className="relative">
                                <PhotoView src={img}>
                                  <Image
                                    loader={() => img}
                                    src={img}
                                    alt={name}
                                    width={800}
                                    height={450}
                                    className="w-full h-full object-cover cursor-zoom-in"
                                    unoptimized
                                  />
                                </PhotoView>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        ) : (
                          imageSrc[0] && (
                            <PhotoView src={imageSrc[0]}>
                              <Image
                                loader={() => imageSrc[0]}
                                src={imageSrc[0]}
                                alt={name}
                                width={800}
                                height={450}
                                className="w-full h-full object-cover cursor-zoom-in aspect-video"
                                unoptimized
                              />
                            </PhotoView>
                          )
                        )}
                      </PhotoProvider>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col h-full">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 dark:text-white leading-tight">
                      {name}
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.map((cat, idx) => (
                        <span
                          key={idx}
                          className="bg-[#1dbf73]/10 text-[#1dbf73] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#1dbf73]/20"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <div className="prose dark:prose-invert max-w-none mb-8">
                      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {description ||
                          "No description available for this project."}
                      </p>
                    </div>

                    {/* Links */}
                    {(link || source) && (
                      <div className="mt-auto flex flex-wrap gap-3 pt-6 border-t border-gray-100 dark:border-gray-800">
                        {link && (
                          <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 min-w-[140px]"
                          >
                            <button className="w-full bg-[#1dbf73] hover:bg-[#19a463] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#1dbf73]/20 transition-all active:scale-95">
                              <i
                                aria-hidden
                                className="fa-solid fa-external-link text-sm"
                              ></i>
                              <span>Live Demo</span>
                            </button>
                          </a>
                        )}
                        {source && (
                          <a
                            href={source}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 min-w-[140px]"
                          >
                            <button className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 transition-all active:scale-95">
                              <i
                                aria-hidden
                                className="fa-brands fa-github text-lg"
                              ></i>
                              <span>Code Base</span>
                            </button>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </PageLayout>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectSlide;
