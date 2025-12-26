import React from 'react';
import SectionTitle from '../common/SectionTitle';
import skills from '../../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background Background for Skills - Tech/Grid feel */}
            <div className="absolute inset-0 bg-black/40 bg-grid-white"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-40 relative z-10">
                <SectionTitle title="My Skills" subtitle="Technologies I master" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <div
                            key={index}
                            className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-primary transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-primary/50 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
