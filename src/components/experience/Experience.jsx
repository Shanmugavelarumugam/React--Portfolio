import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";

const experiences = [
    {
        type: 'school',
        title: "Electronics and Communication Engineering",
        institution: "Rajalakshmi Engineering College",
        period: "2024 Passed Out",
        description: "Completed degree with a focus on core electronics and communication fundamentals.",
    },
    {
        type: 'work',
        title: "Flutter Developer Intern",
        institution: "MDQuality Apps Solutions",
        period: "Internship",
        description: "Gained hands-on experience in Flutter development, working on real-world mobile applications.",
    },
    {
        type: 'work',
        title: "Flutter Developer Intern",
        institution: "Upturn Technology",
        period: "Internship",
        description: "Further honed skills in mobile app development, state management, and UI implementation.",
    },
    {
        type: 'work',
        title: "Flutter Developer",
        institution: "Burj Tech Consultancy",
        period: "Present",
        description: "Currently working as a full-time Flutter Developer, building scalable and efficient mobile solutions.",
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/40 bg-grid-white opacity-40 pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-40 relative z-10">
                <SectionTitle title="My Journey" subtitle="Education & Experience" />

                <div className="relative max-w-4xl mx-auto">
                    {/* Glowing Central Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/50 shadow-[0_0_15px_rgba(37,175,244,0.6)]"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Icon Node */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_20px_rgba(37,175,244,0.4)]">
                                    {exp.type === 'school' ? (
                                        <FaGraduationCap className="text-primary text-sm" />
                                    ) : (
                                        <FaBriefcase className="text-secondary text-sm" />
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2 px-4 md:px-12">
                                    <div
                                        className={`glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,175,244,0.1)] group relative
                                            ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}
                                        `}
                                    >
                                        {/* Arrow pointing to node for Desktop */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white/10 border-t border-r border-white/20 rotate-45 
                                            ${index % 2 === 0 ? '-left-[9px] border-t-0 border-r-0 border-b border-l bg-black/40' : '-right-[9px] bg-black/40'}
                                         `}></div>

                                        <div className={`flex flex-col gap-2 ${index % 2 !== 0 ? 'md:items-end' : ''}`}>
                                            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-primary font-mono w-fit">
                                                {exp.period}
                                            </span>
                                            <h3 className="text-xl font-bold text-white font-display group-hover:text-primary transition-colors">
                                                {exp.title}
                                            </h3>
                                            <h4 className="text-gray-300 font-medium text-sm">
                                                {exp.institution}
                                            </h4>
                                            <p className="text-gray-400 text-sm leading-relaxed mt-2">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
