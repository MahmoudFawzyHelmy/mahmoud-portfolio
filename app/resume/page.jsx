"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FiBriefcase, FiUser, FiCode } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// Data
// about  Data
const about = {
  title: "About Me",
  description:
    "I'm a Full Stack Web Developer specializing in React.js and Node.js. I build modern, scalable, and responsive web applications, with a strong focus on clean code, performance, and user experience.",
  info: [
    { fieldName: "Name", fieldValue: "Mahmoud Fawzy" },
    { fieldName: "Phone", fieldValue: "(+201094755985)" },
    { fieldName: "Nationality", fieldValue: "Egyptian" },
    { fieldName: "Email", fieldValue: "mahmoudfawzy.helmy@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Arabic, English" },
  ],
};
// experience
const experience = {
  title: "My Experience",
  description:
    "Building thoughtful digital products and responsive interfaces with a focus on usability, maintainable code, and real-world performance.",
  items: [
    {
      company: "Freelance",
      position: "Front-End Developer",
      duration: "2023 - Present",
      summary:
        "Creating responsive web experiences and modern React applications.",
    },
  ],
};
// education data
const education = {
  title: "My Education",
  description:
    "Continuous learning and practical training in modern full-stack development technologies.",
  items: [
    {
      institution: "ITI",
      position: "MERN Stack Developer",
      duration: "2025",
    },
    {
      institution: "Udemy",
      position: "Front-End Developer",
      duration: "2020 - 2024",
    },
  ],
};
// skii data 
const skill = {
  title: "My Skills",
  description:
    "Skilled in React.js and Node.js, with experience building responsive interfaces, developing RESTful APIs, and creating complete full-stack applications.",
  skillsList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
  ],
};

const tabs = [
  { value: "experience", label: "Experience", icon: <FiBriefcase /> },
  { value: "education", label: "Education", icon: <LuGraduationCap /> },
  { value: "skills", label: "Skills", icon: <FiCode /> },
  { value: "about", label: "About me", icon: <FiUser /> },
];

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="resume-section flex min-h-[calc(100vh-118px)] items-center py-12 xl:py-16"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          orientation="vertical"
          className="flex flex-col gap-8 xl:flex-row xl:gap-10"
        >
          <aside className="w-full xl:w-64 xl:flex-none">
            <div className="mb-5 text-center xl:text-left">
              <span className="resume-eyebrow">Resume</span>
              <p className="mt-2 text-sm text-white/40">
                My professional profile
              </p>
            </div>
            <TabsList
              variant="line"
              className="resume-tabs-list grid w-full grid-cols-2 gap-2 xl:flex xl:flex-col"
            >
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="resume-tab"
                >
                  <span className="resume-tab-icon">{tab.icon}</span>
                  <span>{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </aside>

          <div className="min-w-0 flex-1">
            <TabsContent value="experience" className="resume-content">
              <div className="resume-heading">
                <span>01</span>
                <h2>{experience.title}</h2>
              </div>
              <p className="resume-description">{experience.description}</p>
              <ScrollArea className="resume-scroll-area">
                <div className="grid gap-5">
                  {experience.items.map((item, index) => (
                    <article key={index} className="resume-card timeline-card">
                      <div className="timeline-marker" />
                      <span className="resume-card-date">{item.duration}</span>
                      <h3>{item.position}</h3>
                      <p className="resume-card-meta">{item.company}</p>
                      {item.summary && (
                        <p className="resume-card-summary">{item.summary}</p>
                      )}
                    </article>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="education" className="resume-content">
              <div className="resume-heading">
                <span>02</span>
                <h2>{education.title}</h2>
              </div>
              <p className="resume-description">{education.description}</p>
              <ScrollArea className="resume-scroll-area">
                <div className="grid gap-5 sm:grid-cols-2">
                  {education.items.map((item, index) => (
                    <article key={index} className="resume-card">
                      <span className="resume-card-date">{item.duration}</span>
                      <h3>{item.position}</h3>
                      <p className="resume-card-meta">{item.institution}</p>
                    </article>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="skills" className="resume-content">
              <div className="resume-heading">
                <span>03</span>
                <h2>{skill.title}</h2>
              </div>
              <p className="resume-description">{skill.description}</p>
              <ScrollArea className="resume-scroll-area">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {skill.skillsList.map((item, index) => (
                    <article key={index} className="skill-card">
                      <span className="skill-icon">{item.icon}</span>
                      <h3>{item.name}</h3>
                    </article>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="about" className="resume-content">
              <div className="resume-heading">
                <span>04</span>
                <h2>{about.title}</h2>
              </div>
              <p className="resume-description">{about.description}</p>
              <ScrollArea className="resume-scroll-area">
                <div className="grid gap-4 sm:grid-cols-2">
                  {about.info.map((item, index) => (
                    <article key={index} className="about-card">
                      <span>{item.fieldName}</span>
                      <strong>{item.fieldValue}</strong>
                    </article>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
