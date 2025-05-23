//Home.jsx
// Import required components and assets
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon for button
import me from '../assets/me.png'; // Your profile photo
import image from '../assets/image.webp'; // Your profile photo
import { Link } from "react-scroll"; // For smooth scrolling

const Home = () => {
 return (
   // Main container - full screen with dark background
   <div name="home" className="h-screen w-full bg-[#0a192f]">
     {/* Content wrapper - centers content and handles responsive layout */}
     <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
       {/* Left side - Text content */}
       <div className="flex flex-col justify-center h-full">
         {/* Main headline */}
         <h2 className="text-4xl sm:text-7xl font-bold text-white">
           I'm a Full Stack Developer
         </h2>
         {/* Brief introduction */}
         <p className="text-gray-500 py-4 max-w-md">
           I have 2+ years of experience in web and mobile development.
           Currently, Iam pursuing my masters and will graduate in May'25. Iam actively looking for full time roles
         </p>
         {/* About Me button with hover effect */}
         <div>
           <Link
             to="about"
             smooth
             duration={500}
             className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-800 to-violet-400  cursor-pointer"
           >
             About Me
             <span className="group-hover:rotate-90 duration-300">
               <HiArrowNarrowRight size={25} className="ml-3" />
             </span>
           </Link>
         </div>
       </div>
       {/* Right side - Profile image */}
       <div>
         <img
           src={image}  
           alt="my profile"
           className="rounded-2xl mx-auto w-2/3 md:w-full"
         />
       </div>
     </div>
   </div>
 );
};

export default Home;
