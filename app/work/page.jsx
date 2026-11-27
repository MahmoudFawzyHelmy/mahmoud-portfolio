"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "BetiFood",
    description:
      "A home-cooked meals and food-donation platform serving clients, cooks, delivery partners and administrators.",
    stack: [
      { name: "React" },
      { name: "Redux Toolkit" },
      { name: "REST APIs" },
      { name: "Node.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/project1.png",
    live: "https://betifood.vercel.app/",
    github: "https://github.com/BetiFood/BetiFood-Frontend",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Testly — Online Exam System",
    description: `Developed exam-related screens and application routing using Angular standalone components.`,
    stack: [
      { name: "TypeScript" },
      { name: "Angular" },
      { name: "REST APIs" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/project2.png",
    live: "https://testly-sand.vercel.app/",
    github: 'https://github.com/QuizNest/Testly',
  },
  
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="work-section flex min-h-[calc(100vh-118px)] items-center py-10 xl:py-14"
    >
      <div className="container mx-auto">
        <div className="work-header mb-7 flex items-end justify-between">
          <div>
            <span className="work-eyebrow">Selected projects</span>
            <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Featured Work
            </h1>
          </div>
          <span className="work-count">
            {project.num} <i>/</i> {projects.length <10 ? `0${projects.length}` : projects.length}
          </span>
        </div>

        <div className="work-grid flex flex-col xl:flex-row">
          <motion.div
            key={project.num}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="project-info order-2 xl:order-1 xl:w-[42%]"
          >
            <div className="project-number">{project.num}</div>
            <div className="project-category">{project.category}</div>
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <div className="project-stack" aria-label="Technology stack">
              {project.stack.map((item) => (
                <span key={item.name}>{item.name}</span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="Open live project"
              >
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="project-link-icon">
                        <BsArrowUpRight />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent><p>Live Project</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="Open GitHub repository"
              >
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="project-link-icon">
                        <BsGithub />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent><p>GitHub Repository</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </motion.div>

          <div className="work-slider order-1 w-full xl:order-2 xl:w-[58%]">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              speed={650}
              pagination={{ clickable: true }}
              className="project-swiper"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item) => (
                <SwiperSlide key={item.num}>
                  <div className="project-preview">
                    <div className="browser-bar">
                      <span />
                      <span />
                      <span />
                      <div>{item.title}</div>
                    </div>
                    <div className="project-image-wrap">
                      <Image
                        src={item.image}
                        alt={`${item.title} preview`}
                        fill
                        sizes="(max-width: 1200px) 100vw, 58vw"
                        className="project-image"
                        priority={item.num === "01"}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
