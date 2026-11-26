"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "betiefood",
    description: `Built reusable React components and pages for a home-cooked meals and food-donation platform serving 4 user
roles: client, cook, delivery and admin.`,
    stack: [
      { name: "HTML5" },
      { name: "Css" },
      { name: "Js" },
      { name: "React" },
      { name: "ReduxToolkit" },
      { name: "RESTAPIs" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://betifood.vercel.app/",
    github: "https://github.com/BetiFood/BetiFood-Frontend",
  },
];
export default function Work() {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-20 flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row xl:gap-7.5">
          {/* project info */}
          <div className="w-full xl:w-[50%] xh:h-[460px] flex flex-col xl:justify-between order-2 xl:order-0 ">
            <div className="flex flex-col gap-7.5">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Cateogry */}
              <h2 className="text-[43px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Project description */}
              <p className="text-white/60 ">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live Projcet Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-17.5 h-17.5 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Projcet Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-17.5 h-17.5 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">slider</div>
        </div>
      </div>
    </motion.div>
  );
}
