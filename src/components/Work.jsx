//Works.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const companies = [
  {
    name: 'Elevance Health',
    roles: [
      {
        title: 'Software Engineer II',
        date: 'May 2022 - July 2023',
        points: [
          'Led development of enterprise web portal using Angular, achieving 35% reduction in bundle size',
          'Implemented secure RESTful APIs with 92% unit test coverage and CI/CD integration',
          'Enhanced system performance, reducing API response latency by 70%',
        ],
      },
      {
        title: 'Software Engineer',
        date: 'June 2021 - April 2022',
        points: [
          'Optimized React Native app performance, improving user retention by 30%',
          'Developed reusable UI component library increasing reusability by 44%',
          'Implemented comprehensive CI/CD pipelines with AWS, GCP, and Azure',
        ],
      },
    ],
  },
  // Add more companies here if needed
];

const projects = [
  {
    name: 'Nexquared',
    title: 'Nexquared - Job Portal Platform',
    date: 'Production Web Application | March 2025 - present',
    points: [
      'Engineered full-stack job portal using Next.js, TypeScript, and Go',
      'Achieved 95+ Lighthouse performance score with Tailwind CSS',
      'Implemented Docker containerization and CI/CD pipeline',
    ],
    link: {
      label: 'Live Demo',
      url: 'https://app.nexquared.com/',
      icon: '��',
    },
  },
  {
    name: 'Feast-IT',
    title: 'Feast-IT - Food Delivery Platform',
    date: 'Full-Stack Web Application | January 2025 - April 2025',
    points: [
      'Developed multi-role platform with React.js and Flask',
      'Achieved 99.9% system uptime with optimized database queries',
      'Reduced page load times by 45% through frontend optimization',
    ],
    link: {
      label: 'GitHub',
      url: 'https://github.com/Nishma25/FeastIt-app/blob/main/README.md',
      icon: '🐙',
    },
  },
  // Add more projects here if needed
];

const Work = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeProjectTab, setActiveProjectTab] = useState(0);
  const company = companies[activeTab];
  const project = projects[activeProjectTab];

  return (
    <div className="mt-12 card rounded-[20px] p-4 sm:p-8">
      <motion.div variants={textVariant()}>
        <p className="text-accent-green text-lg font-semibold">02. Where I've Worked</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-text dark:text-text-dark font-sans mt-2 mb-4 border-b border-white/10 pb-2">Professional Experience</h2>
      </motion.div>
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        {/* Tabs */}
        <div className="flex md:flex-col gap-2 md:min-w-[180px]">
          {companies.map((c, idx) => (
            <button
              key={c.name}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-left rounded-md font-mono text-[18px] transition-all duration-200
                ${activeTab === idx ? 'bg-background dark:bg-background-dark text-accent-green border-l-4 border-accent-green font-bold' : 'text-text-secondary dark:text-text-secondary hover:bg-white/10'}`}
            >
              {c.name}
            </button>
          ))}
        </div>
        {/* Content */}
        <motion.div
          key={company.name}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          {company.roles.map((role, idx) => (
            <div key={role.title} className="mb-4">
              <h3 className="text-[22px] font-bold text-text dark:text-white">
               {role.title}   {/*<span className="text-accent-green font-mono">@ {company.name}</span> */}
              </h3>
              <p className="text-text-secondary dark:text-accent-green text-[15px] mb-2 font-mono">{role.date}</p>
              <ul className="ml-4 space-y-2">
                {role.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="flex items-start gap-2 text-text-secondary dark:text-white text-[16px]"
                  >
                    <span className="text-accent-green mt-1">▸</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Technical Projects Section as Tabs */}
      <motion.div variants={textVariant()} className="mt-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-text dark:text-text-dark font-sans mt-2 mb-4 border-b border-white/10 pb-2">Projects</h2>
      </motion.div>
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        {/* Project Tabs */}
        <div className="flex md:flex-col gap-2 md:min-w-[180px]">
          {projects.map((p, idx) => (
            <button
              key={p.name}
              onClick={() => setActiveProjectTab(idx)}
              className={`px-4 py-2 text-left rounded-md font-mono text-[18px] transition-all duration-200
                ${activeProjectTab === idx
                  ? 'bg-background dark:bg-background-dark text-accent-green border-l-4 border-accent-green font-bold'
                  : 'text-gray-400 dark:text-gray-300 hover:text-accent-green hover:bg-white/10'}
              `}
            >
              {p.name}
            </button>
          ))}
        </div>
        {/* Project Content */}
        <motion.div
          key={project.name}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h3 className="text-[22px] font-bold text-text dark:text-white">
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-green hover:text-accent font-semibold text-[15px] mt-1 mb-2 transition-colors duration-200"
            >
              <span>{project.link.icon}</span>
              <span>{project.link.label}</span>
            </a>
          )}
          <p className="text-text-secondary dark:text-accent-green text-[15px] mb-2 font-mono">{project.date}</p>
          <ul className="ml-4 space-y-2">
            {project.points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="flex items-start gap-2 text-text-secondary dark:text-white text-[16px]"
              >
                <span className="text-accent-green mt-1">▸</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Work, "work");