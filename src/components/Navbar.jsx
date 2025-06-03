//Navbar.jsx

// Import necessary dependencies
import React, { useState } from 'react';
// Import icons we'll use for our navbar
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// Import Link for smooth scrolling between sections
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const RESUME_LINK = 'https://drive.google.com/file/d/18UAJNUWeQ50h9rUOPacur6HU8M_-aKjX/view?usp=sharing';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-background dark:bg-background-dark shadow-md">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto px-4 sm:px-8">
        <ScrollLink
          to="home"
          className="flex items-center gap-2"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-text dark:text-text-dark text-[18px] font-bold cursor-pointer flex font-sans"
          >
            Nishma &nbsp;
            <span className="sm:block hidden">| Software Engineer</span>
          </motion.p>
        </ScrollLink>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-row items-center gap-10">
          <ul className="list-none flex flex-row gap-10 items-center">
            {navLinks.map((nav) => (
              <motion.li
                key={nav.id}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-secondary dark:text-accent-green hover:text-accent dark:hover:text-accent text-[18px] font-medium cursor-pointer font-sans"
              >
                <ScrollLink
                  to={nav.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {nav.title}
                </ScrollLink>
              </motion.li>
            ))}
            <li>
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary dark:text-accent-green hover:text-accent dark:hover:text-accent text-[18px] font-medium cursor-pointer font-sans transition-colors duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="text-text dark:text-text-dark p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl card p-6 shadow-lg"
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="text-secondary dark:text-accent-green hover:text-accent dark:hover:text-accent text-[16px] font-medium cursor-pointer font-sans"
                  >
                    <ScrollLink
                      to={nav.id}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-70}
                      className="hover:text-accent transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {nav.title}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
