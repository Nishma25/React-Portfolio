import React from 'react';
const skills = ["Python", "React", "ReactNative","AWS","HTML","Flask","Github","CSS","Node.js","SQL","JavsScript","Hadoop"];

const Skills = () => {
    return (
        // Main container with dark background
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Content wrapper with max width and centering */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                {/* Header section with title and intro */}
                <div className='w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>Skills</p>
                    <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
                </div>
                {/* Skills grid - responsive layout with hover effects */}
                <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-4 text-center py-8'>
                    {/* Individual skill cards with shadow and scale animation */}
                    {skills.map((skill, index) => (
                        <div className="grid gap-4">
                            <div key={index} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                                <p className="my-4">{skill}</p>
                            </div>
                        </div>
                    ))}
                    {/* Additional skill cards follow same pattern... */}
                </div>
            </div>
        </div>
    );
};

export default Skills;
