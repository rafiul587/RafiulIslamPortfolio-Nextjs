"use client";
import aboutInfo from "@/utils/about";
import Image from "next/image";
import { Fade, Zoom } from "react-reveal";
import picture from "@/assets/images/jpg/myPic.jpg";
import Title from "../Title";
import Info from "./Info";

export default function About() {
  const { heading, description, information } = aboutInfo || {};

  return (
    <div className=" flex items-center flex-wrap relative">
      <div className="containerCustom gap overflow-hidden">
        <Title title="about me" titleDes="Ge to know about me" />

        <div className="md:grid items-center md:gap-3 lg:gap-4 grid-cols-9 md:col-start-9">
          <div className="md:col-span-5 lg:col-span-5 lg:pr-28">
            <Fade up cascade>
              <h3 className="text-3xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                {heading}
              </h3>{" "}
              <div className="text-base flex flex-col gap-4 text-gray-600 dark:text-gray-300 leading-relaxed text-justify md:text-left">
                {description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-5">
                <Fade up>
                  {information?.map((info, idx) => {
                    const { name, details } = info || {};
                    return <Info name={name} details={details} key={idx} />;
                  })}
                </Fade>
              </div>
            </Fade>
          </div>
          <Zoom>
            <div className="relative h-auto w-full mt-5 md:mt-0 overflow-hidden rounded-xl md:col-span-4 lg:col-span-4 aspect-[4/4]">
              <Image
                fill
                priority
                src={picture}
                alt="Rafiul's image"
                className="w-full h-auto object-top object-cover"
              />
            </div>{" "}
          </Zoom>
        </div>
      </div>
    </div>
  );
}
