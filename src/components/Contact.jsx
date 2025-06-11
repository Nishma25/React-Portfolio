import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaUserCheck, FaCalendarAlt, FaIdBadge, FaFileAlt } from 'react-icons/fa';

const contactInfo = [
  {
    label: 'Email',
    value: 'nalarinishma@gmail.com',
    href: 'mailto:nalarinishma@gmail.com',
    icon: <FaEnvelope className="text-accent-green text-lg" />,
  },
  {
    label: 'Location',
    value: 'Dallas, Texas',
    icon: <FaMapMarkerAlt className="text-accent-green text-lg" />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nalari-nishma/',
    href: 'https://linkedin.com/in/nalari-nishma/',
    icon: <FaLinkedin className="text-accent-green text-lg" />,
  },
  {
    label: 'GitHub',
    value: 'github.com/Nishma25',
    href: 'https://github.com/Nishma25',
    icon: <FaGithub className="text-accent-green text-lg" />,
  },
  {
    label: 'Resume',
    value: 'View Resume',
    href: 'https://drive.google.com/file/d/18UAJNUWeQ50h9rUOPacur6HU8M_-aKjX/view?usp=sharing',
    icon: <FaFileAlt className="text-accent-green text-lg" />,
  },
];

const availability = [
  {
    label: 'Status',
    value: 'Open to Opportunities',
    icon: <FaUserCheck className="text-accent-green text-lg" />,
  },
  {
    label: 'Graduation',
    value: 'May 2025',
    icon: <FaCalendarAlt className="text-accent-green text-lg" />,
  },
  {
    label: 'Work Authorization',
    value: 'F-1 Student Visa (STEM OPT Eligible)',
    icon: <FaIdBadge className="text-accent-green text-lg" />,
  },
];

const Contact = () => {
  return (
    <div className="mt-12 card rounded-[20px] p-4 sm:p-8">
      <motion.div variants={textVariant()}>
        <p className="text-accent-green text-lg font-semibold">05. Get in touch</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-text dark:text-text-dark font-sans mt-2 mb-4">Contact.</h2>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="card p-6 rounded-2xl w-full shadow-md flex flex-col gap-4 justify-center"
        >
          <h3 className="text-text dark:text-text-dark text-[20px] font-bold mb-2">Contact Information</h3>
          <ul className="space-y-4">
            {contactInfo.map((item, idx) => (
              <li key={item.label} className="flex items-center gap-3">
                {item.icon}
                <div>
                  <div className="text-secondary text-secondary dark:text-accent-green text-[14px] font-semibold">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-text dark:text-white text-[16px] hover:text-accent-green transition-colors duration-200 font-mono">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-text dark:text-white text-[16px] font-mono">{item.value}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Availability */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="card p-6 rounded-2xl w-full shadow-md flex flex-col gap-4 justify-center"
        >
          <h3 className="text-text dark:text-text-dark text-[20px] font-bold mb-2">Availability</h3>
          <ul className="space-y-4">
            {availability.map((item, idx) => (
              <li key={item.label} className="flex items-center gap-3">
                {item.icon}
                <div>
                  <div className="text-secondary text-secondary dark:text-accent-green text-[14px] font-semibold">{item.label}</div>
                  <div className="text-text dark:text-white text-[16px] font-mono">{item.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
