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
import { Link } from 'react-scroll';

const Navbar = () => {
  // State to handle mobile menu toggle (open/closed)
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const sections = ["Home", "About", "Skills", "Work", "Contact", "Resume"]

  return (
    // Main navbar container - fixed at top, full width
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-violet-900 text-gray-300'>
      {/* Your logo or brand name */}
      <div>
        <h1 className='font-thin text-2xl italic font-serif'>Nishma</h1>
      </div>
      {/* Desktop Menu - hidden on mobile, flex on medium screens and up */}
      <div className="flex cursor-pointer">
        {sections.map((section, index) => (
          <ul className='hidden md:flex gap-x-8 px-4'>
            <li>
              <Link to={section.toLowerCase()} smooth={true} duration={500}>
                {section}
              </Link>

            </li>
          </ul>
        ))}
      </div>
      {/* Hamburger Icon - visible only on mobile */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu - full screen overlay */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
        {sections.map((section, index) => (
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to={section.toLowerCase()} smooth={true} duration={500}>
              {section}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons - hidden on smaller screens, shown on large screens */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {/* LinkedIn - sliding animation on hover */}
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-800 hover:bg-gradient-to-r from-violet-500 to-violet-800'>
            <a href="https://www.linkedin.com/in/nalari-nishma/" target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300 px-4'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-800 hover:bg-gradient-to-r from-violet-500 to-violet-800'>
            <a href="https://github.com/Nishma25" target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300 px-4'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-800 hover:bg-gradient-to-r from-violet-500 to-violet-800'>
            <a href="mailto:nishmanalari@gmail.com" target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300 px-4'>
              Email <FaEnvelope size={30} />
            </a>
          </li>
          {/* ... other social links ... */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;