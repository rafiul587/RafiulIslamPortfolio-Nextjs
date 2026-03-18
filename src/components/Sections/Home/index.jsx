"use client";
import avatar from "@/assets/images/webp/avater.webp";
import useWindowDimensions from "@/hook/getWindowDimensions";
import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import Wave from "react-wavify";
import SocialBtn from "../../SocialBtn";
import socialBtnList from "./../../../utils/socialBtnList.json";
import Button from "./Button";
import { useTheme } from "next-themes";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BoxReveal from "@/components/magicui/box-reveal";

export default function Home() {
  const { height, width } = useWindowDimensions();

  const stats = [
    { value: "43+", label: "Projects Done" },
    { value: "30+", label: "Clients" },
    { value: "4+", label: "Years Experience" },
  ];

  return (
    <div
      className="lightBg dark:darkBg relative h-screen overflow-hidden flex flex-col"
    >
      <div className="w-full flex-grow background flex flex-col h-full">
        <div className="flex-grow pt-16 md:pt-28 pb-4 containerCustom relative z-10 flex flex-col h-full">
          <div className="backdrop-blur-sm bg-white/10 dark:bg-[#0b1327]/20 border dark:border-[#192544] rounded-2xl flex-grow w-full relative overflow-hidden flex flex-col justify-center max-h-full">
            <div
              className="flex items-center justify-center flex-col w-full relative z-20 py-2 md:py-6 px-4"
            >
              <div className="relative h-16 w-16 md:h-32 md:w-32 overflow-hidden rounded-full border-4 flex-shrink-0 border-[#1dbf73]/30 bg-white mb-2 md:mb-6 shadow-2xl shadow-[#1dbf73]/10">
                <Image
                  src="https://lh3.googleusercontent.com/a/ACg8ocK3LkxY3o3Qlma6xIaP82gQltF8rCI7vdRX6sxxb0QarUQHzJ-YWw=s576-c-no"
                  alt="Rafiul's picture"
                  fill={true}
                  priority={true}
                  className="object-cover"
                />
              </div>

              <BoxReveal boxColor={"#1dbf73"} duration={0.5} width="fit-content">
                <div className="flex items-center justify-center gap-2 px-3 py-1 mb-2 md:mb-4 bg-[#1dbf73]/10 border border-[#1dbf73]/20 rounded-full w-fit mx-auto">
                  <span className="w-2 h-2 rounded-full bg-[#1dbf73] animate-pulse"></span>
                  <span className="text-[10px] md:text-[12px] font-bold text-[#1dbf73] uppercase tracking-wider">
                    Available For New Projects
                  </span>
                </div>
              </BoxReveal>

              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold pb-1 pt-0 text-center text-gray-900 dark:text-white leading-snug">
                <GradualSpacing
                  className="font-display text-center text-lg font-extrabold tracking-tight text-gray-900 dark:text-white md:text-2xl lg:text-3xl leading-tight"
                  text="Building High-Performance"
                />
              </h2>

              <BoxReveal boxColor={"#0b1327"} duration={0.5} width="fit-content">
                <ReactTyped
                  strings={[
                    "Android Applications",
                    "Mobile Experiences",
                    "Kotlin Architectures",
                    "Jetpack Compose UIs",
                  ]}
                  typeSpeed={70}
                  backSpeed={50}
                  loop
                  className="text-base md:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-1 md:mb-4 block text-center min-h-[30px] md:min-h-[40px] px-2"
                />
              </BoxReveal>

              <BoxReveal boxColor={"#0b1327"} duration={0.6}>
                <div className="mt-1 md:mt-4 flex flex-wrap justify-center gap-4 md:gap-12 w-full max-w-[700px] mx-auto z-30 relative">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                        <div className="text-[9px] md:text-[11px] font-semibold text-gray-500 flex items-center gap-1 justify-center mt-0.5 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#0b1327"} duration={0.7}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4 md:mt-10 border-t border-gray-200 dark:border-gray-800/60 pt-4 md:pt-6 z-30 relative w-full max-w-[700px] mx-auto px-6">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1EdZbZ0Z1E0EFrV8kmPqWjWZVajNffdmX"
                    download
                    className="w-full sm:w-44"
                  >
                    <button className="w-full px-4 py-2.5 md:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 font-bold rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-xs md:text-sm flex items-center justify-center gap-2">
                      <span>Download CV</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </button>
                  </a>
                  <Link href="/contact" className="w-full sm:w-44">
                    <button className="w-full px-4 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-xs md:text-sm text-center">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#0b1327"} duration={0.8}>
                <div className="icons mt-2 md:mt-6 text-gray-600 dark:text-gray-400 flex justify-center flex-wrap gap-2 z-30 relative">
                  {socialBtnList.map((btn, idx) => {
                    const { link, hover, icon } = btn || {};
                    return (
                      <span key={idx}>
                        <SocialBtn link={link} hover={hover} icon={icon} />
                      </span>
                    );
                  })}
                </div>
              </BoxReveal>
            </div>
            <Wave
              fill="#fff4"
              paused={false}
              options={{
                height: 50,
                amplitude: 50,
                speed: 0.15,
                points: 3,
              }}
              className="absolute bottom-0 z-10 "
            />
            <Wave
              fill="#fff5"
              paused={false}
              options={{
                height: 70,
                amplitude: 30,
                speed: 0.2,
                points: 5,
              }}
              className="absolute bottom-0 z-10 "
            />
            <BorderBeam
              size={width > 768 ? 400 : 250}
              duration={12}
              className="z-[99999] opacity-70"
            />
          </div>
        </div>
      </div>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.05}
        duration={1}
        repeatDelay={1}
        className={`${cn(
          "md:[mask-image:radial-gradient(700px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(1100px_circle_at_center,white,transparent)] [mask-image:radial-gradient(350px_circle_at_center,white,transparent)] ",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )} opacity-90`}
      />
    </div>
  );
}
