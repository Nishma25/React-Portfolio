import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Skills = () => {
  const skills = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C", "SQL", "VBA", "R", "Go"]
    },
    {
      title: "Frontend Technologies",
      skills: ["React", "Angular", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Flask", "FastAPI", ".NET Framework", "RESTful APIs"]
    },
    {
      title: "Database & Cloud",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "AWS", "Azure", "Docker", "CI/CD"]
    },
    {
      title: "Development Tools",
      skills: ["VS Code", "Postman", "JIRA", "SonarQube", "Figma", "Tableau", "Jupyter"]
    },
    {
      title: "Big Data",
      skills: ["Apache Pig", "Apache Impala", "PySpark", "Hadoop HDFS"]
    }
  ];

  return (
    <div className="mt-20 card rounded-[20px] p-6 sm:p-10">
      <motion.div variants={textVariant()}>
        <p className="text-accent-green text-lg font-semibold">04. What I am good at</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-text dark:text-text-dark font-sans mt-2 mb-4">Technical Skills.</h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.title}
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="card p-5 rounded-2xl w-full min-w-0 shadow-md"
          >
            <h3 className="text-text dark:text-text-dark text-[20px] font-bold">{skillGroup.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skillGroup.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[14px] text-secondary dark:text-white bg-accent/10 dark:bg-accent-green/30 px-3 py-1 rounded-full font-sans"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
