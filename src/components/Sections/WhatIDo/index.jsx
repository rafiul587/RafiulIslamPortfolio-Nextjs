"use client";
import React from 'react';
import services from "@/utils/services.json";
import aboutInfo from "@/utils/about.json";
import { Code2, Server, GraduationCap, Smartphone, Database, PenTool } from "lucide-react";
import { Fade } from "react-reveal";
import Title from "../Title";

const iconMap = {
  "code": <Code2 className="w-8 h-8 text-blue-500" />,
  "server": <Server className="w-8 h-8 text-blue-500" />,
  "graduation-cap": <GraduationCap className="w-8 h-8 text-blue-500" />,
  "smartphone": <Smartphone className="w-8 h-8 text-blue-500" />,
  "database": <Database className="w-8 h-8 text-blue-500" />,
  "pen-tool": <PenTool className="w-8 h-8 text-blue-500" />
};

export default function WhatIDo() {
  const { description } = aboutInfo || {};

  return (
    <div className="containerCustom gap overflow-hidden">
      <Title title="What I Do" titleDes="Specialized services tailored to meet your development and learning needs" />
      
      {description && (
        <Fade up>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            {description.split('\n\n')[0].replace(/\*\*/g, '')}
          </p>
        </Fade>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <Fade up key={service.id} delay={idx * 100}>
            <div className="bg-white dark:bg-[#0b1327]/50 border dark:border-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden">
              <div className="mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
              
              {/* Subtle bottom gradient effect from the image */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
