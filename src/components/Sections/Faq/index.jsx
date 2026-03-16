"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import FaqImg from "@/assets/images/png/faq.png";
import faqList from "@/utils/faqList.json";
import Title from "../Title";
import { Zoom, Fade } from "react-awesome-reveal";

export default function Faq() {
  return (
    <div className="containerCustom gap">
      <Title title="FAQ" titleDes="Frequently asked questions" />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-center">
        <div className="lg:col-span-3">
          <Accordion type="single" collapsible className="w-full space-y-3">
            <Fade up cascade duration={150} triggerOnce>
              {faqList.map((faq, idx) => (
                <AccordionItem
                  className="border border-gray-200 dark:border-gray-800 rounded-xl px-4 transition-all duration-300 data-[state=open]:bg-blue-50/30 dark:data-[state=open]:bg-blue-600/5 data-[state=open]:border-blue-500/30"
                  value={faq.id}
                  key={idx}
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-bold py-4 hover:no-underline hover:text-blue-600 dark:hover:text-blue-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 pb-4 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Fade>
          </Accordion>

          <Fade up delay={300}>
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Still have questions?</h3>
                <p className="text-blue-100 opacity-90">I'm here to help you bring your ideas to life.</p>
              </div>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Let's Talk
              </Link>
            </div>
          </Fade>
        </div>
        <div className="lg:col-span-2 hidden lg:block">
          <Zoom triggerOnce>
            <Image
              src={FaqImg}
              alt="Qubartech Faq image"
              height="0"
              width="0"
              className="w-full"
              priority
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
}
