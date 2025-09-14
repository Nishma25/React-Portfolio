import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { FaGraduationCap, FaAward } from 'react-icons/fa';

const education = [
  {
    degree: 'Master of Science in Information Technology and Management',
    school: 'The University of Texas at Dallas',
    gpa: '4.0/4.0',
    year: 'Aug 2023 - May 2025',
    honor: 'Summa Cum Laude',
  },
  {
    degree: 'Bachelor of Technology in Electrical Engineering',
    school: 'Indian Institute of Technology Hyderabad',
    gpa: '8.13/10',
    year: 'Jul 2017 - Aug 2021',
  },
];

const achievements = [
  {
    title: 'McKinsey Forward Program',
    desc: 'Global digital apprenticeship (2025)',
    icon: <FaAward className="text-accent-green text-xl" />,
  },
  {
    title: 'Lars Magnus Ericsson Fellowship',
    desc: '2024-2025',
    icon: <FaAward className="text-accent-green text-xl" />,
  },
  {
    title: 'Impact Award',
    desc: 'Carelon Global Solutions (2022)',
    icon: <FaAward className="text-accent-green text-xl" />,
  },
];

const About = () => {
  return (
    <div className="mt-12 card rounded-[20px] p-4 sm:p-8">
      <motion.div variants={textVariant()}>
        <p className="text-accent-green text-lg font-semibold">01. Introduction</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-text dark:text-white font-sans mt-2 mb-4">My name is Nishma.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-text-secondary dark:text-white text-[17px] max-w-3xl leading-[30px] font-sans"
      >
        I'm a full-stack engineer with over two years of experience developing scalable, user-focused web applications.
        I'm currently working as a Software Developer Intern at Open Legal, building LLM-powered backend services and micro-frontend applications, while actively seeking full-time opportunities where I can contribute to meaningful products and continue growing within a collaborative and forward-thinking engineering team.      </motion.p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Timeline */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="flex flex-col gap-6"
        >
          <h3 className="text-text dark:text-white text-[20px] font-bold mb-2">Education</h3>
          <div className="relative pl-10 border-l-2 border-accent-green">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="mb-8 last:mb-0 relative"
              >
                <span className="absolute -left-6 top-2 bg-card dark:bg-card-dark border-2 border-accent-green rounded-full p-1 flex items-center justify-center">
                  <FaGraduationCap className="text-accent-green text-base" />
                </span>
                <div className="ml-2">
                  <div className="font-bold text-text dark:text-white text-[16px]">{edu.degree}</div>
                  <div className="text-text-secondary dark:text-white text-[15px]">{edu.school}</div>
                  <div className="text-accent-green font-mono text-[14px]">GPA: {edu.gpa} &nbsp; | &nbsp; {edu.year}</div>
                  {edu.honor && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-yellow-400"><FaAward className="inline text-lg" /></span>
                      <span className="text-yellow-400 font-semibold text-[14px]">{edu.honor}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements as Cards */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="flex flex-col gap-4"
        >
          <h3 className="text-text dark:text-white text-[20px] font-bold mb-2">Key Achievements</h3>
          <div className="grid grid-cols-1 gap-4">
            {achievements.map((ach, idx) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="flex items-center gap-4 bg-card dark:bg-card-dark border border-accent-green rounded-lg p-4 shadow-sm"
              >
                <div>{ach.icon}</div>
                <div>
                  <div className="font-bold text-text dark:text-white text-[16px]">{ach.title}</div>
                  <div className="text-text-secondary dark:text-white text-[14px]">{ach.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");