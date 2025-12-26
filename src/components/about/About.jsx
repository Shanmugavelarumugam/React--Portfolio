import React from 'react';
import SectionTitle from '../common/SectionTitle';

const About = () => {
    return (
        <section id="about" className="py-20 lg:py-32 relative overflow-hidden bg-black/20">
            {/* Background glow for this section */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-40 relative z-10">
                <SectionTitle title="About Me" subtitle="A glimpse into my world" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Column */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-square lg:aspect-auto h-[400px]">
                            <img
                                src="https://placehold.co/500x500/101C23/25aff4?text=Profile"
                                alt="Profile"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300 border-l-4 border-l-primary">
                                <p className="text-gray-300 text-lg leading-relaxed font-body">
                                    I’m <span className="text-primary font-bold">Shanmugavel A</span>, a passionate Mobile App Developer specializing in <span className="text-secondary font-bold">Flutter</span> and native mobile technologies. I hold a Bachelor of Engineering in Electronics and Communication Engineering from <span className="text-white font-bold">Rajalakshmi Engineering College</span> (2024), where I built a strong foundation in problem-solving and system thinking.
                                </p>
                            </div>
                            <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300 border-l-4 border-l-secondary">
                                <p className="text-gray-300 text-lg leading-relaxed font-body">
                                    I began my professional journey as a Flutter Developer Intern at <span className="text-white font-bold">MDQuality Apps Solutions</span> and <span className="text-white font-bold">Upturn Technology</span>, gaining hands-on experience in real-world mobile app development. Currently, I work as a Flutter Developer at <span className="text-primary font-bold">Burj Tech Consultancy</span>, focusing on building scalable, production-ready mobile applications and delivering high-performance solutions.
                                </p>
                            </div>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-panel p-4 rounded-xl text-center border border-white/5 hover:border-primary/30 transition-all group">
                                <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">6+</h3>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Months Exp.</p>
                            </div>
                            <div className="glass-panel p-4 rounded-xl text-center border border-white/5 hover:border-secondary/30 transition-all group">
                                <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">4+</h3>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
