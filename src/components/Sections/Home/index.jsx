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
      className={`lightBg dark:darkBg relative ${height > 720 && width > 992 ? "h-screen" : "min-h-screen"} flex flex-col`}
    >
      <div className="w-full flex-grow background flex flex-col">
        <div className="flex-grow pt-20 pb-4 containerCustom relative z-10 flex flex-col">
          <div className="backdrop-blur-sm bg-white/10 dark:bg-[#0b1327]/20 border dark:border-[#192544] rounded-2xl flex-grow w-full relative overflow-hidden flex flex-col justify-center">
            <div
              className={`flex items-center justify-center flex-col w-full relative z-20 py-8 md:py-12 px-4`}
            >
              <div className="relative h-20 w-20 md:h-28 md:w-28 overflow-hidden rounded-full border-4 flex-shrink-0 border-[#1dbf73]/30 bg-white mb-4 shadow-xl shadow-[#1dbf73]/10">
                <Image
                  src={avatar}
                  alt="Rafiul's picture"
                  fill={true}
                  priority={true}
                  className="object-cover"
                />
              </div>

              <BoxReveal boxColor={"#1dbf73"} duration={0.5} width="100%">
                <div className="flex items-center justify-center gap-2 px-3 py-1 mb-4 bg-[#1dbf73]/10 border border-[#1dbf73]/20 rounded-full w-fit mx-auto">
                  <span className="w-2 h-2 rounded-full bg-[#1dbf73] animate-pulse"></span>
                  <span className="text-[10px] md:text-xs font-bold text-[#1dbf73] uppercase tracking-wider">
                    Available For New Projects
                  </span>
                </div>
              </BoxReveal>

              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold pb-2 pt-1 text-center text-gray-900 dark:text-white leading-snug">
                <GradualSpacing
                  className="font-display text-center text-xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-3xl lg:text-4xl leading-tight"
                  text="Building High-Performance"
                />
              </h2>

              <BoxReveal boxColor={"#0b1327"} duration={0.5} width="100%">
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
                  className="text-lg md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4 block text-center min-h-[50px] md:min-h-[40px] px-2"
                />
              </BoxReveal>

              <BoxReveal boxColor={"#0b1327"} duration={0.6} width="100%">
                <p className="max-w-[550px] mx-auto text-center text-gray-600 dark:text-gray-300 text-sm md:text-base mb-6 px-4 font-medium leading-relaxed">
                  I help businesses and founders build scalable, maintainable,
                  and beautiful mobile applications that users love and trust.
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#0b1327"} duration={0.6}>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-1 z-30 relative">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm md:text-base">
                      Start a Project
                    </button>
                  </Link>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1EdZbZ0Z1E0EFrV8kmPqWjWZVajNffdmX"
                    download
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full sm:w-auto px-6 py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 font-bold rounded-full shadow hover:shadow-md transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2">
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
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#0b1327"} duration={0.7}>
                <div className="mt-6 flex flex-wrap justify-center gap-6 md:gap-12 border-t border-gray-200 dark:border-gray-800/60 pt-6 w-full max-w-[700px] mx-auto z-30 relative">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-[10px] md:text-xs font-semibold text-gray-500 flex items-center gap-1 justify-center mt-0.5 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#0b1327"} duration={0.8}>
                <div className="icons mt-6 text-gray-600 dark:text-gray-400 flex justify-center flex-wrap gap-2 z-30 relative">
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
              size={500}
              duration={12}
              delay={9}
              className="z-[99999]"
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
