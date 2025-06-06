import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const projectCategories = [
    {
        name: 'Full-Stack',
        projects: [
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
                    icon: '🌐',
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
        ],
    },
    {
        name: 'System Design',
        projects: [
            {
                name: 'SDMS',
                title: 'Student Database Management System',
                date: 'Full-Stack Web Application | 2024',
                points: [
                    'Designed scalable system architecture with clear separation of concerns using MVC pattern',
                    'Implemented robust database schema with optimized queries and proper indexing',
                    'Created modular portal system for academic, financial, and administrative services',
                    'Utilized Figma for intuitive UI/UX design with responsive layouts',
                ],
                link: {
                    label: 'GitHub',
                    url: 'https://github.com/Nishma25/Student-Database-Management',
                    icon: '🐙',
                },
            },
        ],
    },
    {
        name: 'Games',
        projects: [
            {
                name: 'Quiz-Up',
                title: 'Quiz-Up - Interactive Quiz Platform',
                date: 'Frontend Web Application | 2024',
                points: [
                    'Built an interactive Harry Potter themed quiz using vanilla JavaScript',
                    'Implemented dynamic question loading and score tracking system',
                    'Created responsive UI with modern CSS animations and transitions',
                    'Developed user-friendly interface with immediate feedback on answers',
                ],
                link: {
                    label: 'Live Demo',
                    url: 'https://nishma25.github.io/Quiz-Up/',
                    icon: '🌐',
                },
            },
        ],
    },
    {
        name: 'Python',
        projects: [
            {
                name: 'SRMS',
                title: 'Scooter Rental Management System',
                date: 'Python OOP Project | 2024',
                points: [
                    'Implemented robust OOP design patterns including inheritance, encapsulation, and polymorphism',
                    'Developed comprehensive unit tests achieving 90%+ code coverage using pytest',
                    'Created modular class hierarchy for scooter management, user authentication, and rental operations',
                    'Built interactive CLI interface with input validation and error handling',
                    'Implemented data persistence using file I/O operations',
                ],
                link: {
                    label: 'GitHub',
                    url: 'https://github.com/Nishma25/Scooter-Rental-Management-System',
                    icon: '🐙',
                },
            },
        ],
    },
];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeProject, setActiveProject] = useState(0);
    const category = projectCategories[activeCategory];
    const project = category.projects[activeProject];

    return (
        <div className="mt-12 card rounded-[20px] p-4 sm:p-8">
            <motion.div variants={textVariant()}>
                <p className="text-accent-green text-lg font-semibold">03. My Projects</p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-text dark:text-text-dark font-sans mt-2 mb-4 border-b border-white/10 pb-2">Featured Work.</h2>
            </motion.div>

            <div className="mt-8 flex flex-col gap-8">
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2">
                    {projectCategories.map((cat, idx) => (
                        <button
                            key={cat.name}
                            onClick={() => {
                                setActiveCategory(idx);
                                setActiveProject(0);
                            }}
                            className={`px-4 py-2 rounded-md font-mono text-[18px] transition-all duration-200
                ${activeCategory === idx
                                    ? 'bg-background dark:bg-background-dark text-accent-green border-l-4 border-accent-green font-bold'
                                    : 'text-text-secondary dark:text-text-secondary hover:bg-white/10'}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Project Tabs */}
                <div className="flex md:flex-col gap-2 md:min-w-[180px]">
                    {category.projects.map((p, idx) => (
                        <button
                            key={p.name}
                            onClick={() => setActiveProject(idx)}
                            className={`px-4 py-2 text-left rounded-md font-mono text-[18px] transition-all duration-200
                ${activeProject === idx
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
                    <div className="flex gap-4">
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
                        {project.github && (
                            <a
                                href={project.github.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-accent-green hover:text-accent font-semibold text-[15px] mt-1 mb-2 transition-colors duration-200"
                            >
                                <span>{project.github.icon}</span>
                                <span>{project.github.label}</span>
                            </a>
                        )}
                    </div>
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

export default SectionWrapper(Projects, "projects"); 