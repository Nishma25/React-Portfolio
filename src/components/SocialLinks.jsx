import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const SocialLinks = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/nalari-nishma/",
      color: "text-black-100 dark:text-white-100 hover:text-accent dark:hover:text-accent"
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/Nishma25",
      color: "text-black-100 dark:text-white-100 hover:text-green-light dark:hover:text-green-light"
    },
    {
      name: "Email",
      icon: <FaEnvelope size={24} />,
      url: "mailto:nalarinishma@gmail.com",
      color: "text-black-100 dark:text-white-100 hover:text-accent-light dark:hover:text-accent-light"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div className="flex flex-col items-center space-y-6 bg-card dark:bg-card-dark backdrop-blur-md p-4 rounded-r-lg shadow-lg border border-gray-200 dark:border-gray-700">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${link.color}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {link.icon}
          </motion.a>
        ))}
        
        <motion.button
          onClick={toggleTheme}
          className="text-black-100 dark:text-white-100 hover:text-accent dark:hover:text-accent transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDarkTheme ? <FaSun size={24} /> : <FaMoon size={24} />}
        </motion.button>

        <div className="h-24 w-0.5 bg-gradient-to-b from-accent via-green-light to-accent-light"></div>
      </div>
    </motion.div>
  );
};

export default SocialLinks; 