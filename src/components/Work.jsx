//Works.jsx
import React from 'react';
import code from '../assets/code2.png';
import quizUp from '../assets/quizUp.png';
import sdbms from '../assets/sdbms.png';

const Work = () => {
  return (
    // Main container with responsive height
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* Section header */}
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>Work</p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>

        {/* Project grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project card with hover overlay */}
            {/* Background Image Div */}
            <div
              className='bg-quiz-up bg-cover bg-center hover:bg-none transition-all duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-[quizUp]hover:bg-none'
            >
            {/* Content Div */}
            <div className="opacity-0 group-hover:opacity-100 group-hover:bg-transparent flex justify-center items-center flex-col transition-opacity duration-300">
              <span className="text-lg font-bold text-white text-center tracking-wider">Quiz Up</span>
              <p className="text-center">Interactive Quiz Portal with dynamic rendering</p>
              {/* Action buttons */}
              <div className="pt-8 text-center">
                <a href="https://nishma25.github.io/Quiz-Up/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className='bg-oops bg-cover bg-center hover:bg-none transition-all duration-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover content */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white text-center tracking-wider'>Scooter Rental Managment System</span>
              <p className='text-center'>Implemented an object-oriented scooter rental management system</p>
              {/* Action buttons */}
              <div className='pt-8 text-center'>
                <a href='https://github.com/Nishma25/Scooter-Rental-Management-System' target="_blank" rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>
          <div
            className='bg-sdbms bg-cover bg-center hover:bg-none transition-all duration-500  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover content */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white text-center tracking-wider'>Student Database Management System</span>
              <p className='text-center'>Comprehensive web-based platform designed to centralize and streamline student data management and services at a university</p>
              {/* Action buttons */}
              <div className='pt-8 text-center'>
                <a href='https://www.figma.com/proto/tCAsJ9WnzgLOavWSBQ2eCP/Sweeety-exams-s-team-library?node-id=3318-73&t=W9KLdWFTto3grg1q-1'  target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
              </div>
            </div>
          </div>
          {/* Additional project cards follow same pattern */}
        </div>
      </div>
    </div>
  );
};

export default Work;