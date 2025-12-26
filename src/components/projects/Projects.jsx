import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
    const projects = [
        {
            title: "BlueChat",
            description: "A feature-rich real-time chat application with end-to-end encryption, group chats, and media sharing capabilities.",
            stack: ["Flutter", "Firebase", "Socket.io", "Node.js"],
            image: "https://placehold.co/600x400/0a1a2f/1e88e5?text=BlueChat",
            gradient: "from-blue-900/20 to-cyan-900/10",
            accent: "bg-gradient-to-r from-blue-500 to-cyan-400",
            demoLink: "#",
            repoLink: "#"
        },
        {
            title: "Organic Ecommerce",
            description: "A comprehensive e-commerce platform for organic products with user authentication and secure payment integration.",
            stack: ["Flutter", "RestAPI", "Stripe", "MongoDB"],
            image: "https://placehold.co/600x400/0d281f/10b981?text=Organic+Store",
            gradient: "from-emerald-900/20 to-green-900/10",
            accent: "bg-gradient-to-r from-emerald-500 to-green-400",
            demoLink: "#",
            repoLink: "#"
        },
        {
            title: "Inventory App",
            description: "An efficient inventory management system for tracking stock, managing suppliers, and generating real-time reports.",
            stack: ["Flutter", "Firebase", "Charts_flutter", "Cloud Functions"],
            image: "https://placehold.co/600x400/2e1065/8b5cf6?text=Inventory+App",
            gradient: "from-purple-900/20 to-violet-900/10",
            accent: "bg-gradient-to-r from-purple-500 to-violet-400",
            demoLink: "#",
            repoLink: "#"
        },
        {
            title: "College Management",
            description: "A digital solution for educational institutions to manage records, attendance, timetables, and communication.",
            stack: ["Flutter", "Dart", "SQL", "Provider"],
            image: "https://placehold.co/600x400/7f1d1d/f87171?text=College+CMS",
            gradient: "from-rose-900/20 to-pink-900/10",
            accent: "bg-gradient-to-r from-rose-500 to-pink-400",
            demoLink: "#",
            repoLink: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background - Preserved from original */}
            <div className="absolute inset-0 bg-black/30 bg-dot-white pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 lg:px-8 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto mb-16 lg:mb-24 text-center">


                    <SectionTitle
                        title="Featured Projects"
                        subtitle="What I've built"
                        className="mb-8"
                    />

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        A showcase of my latest work—innovative solutions built with modern technologies
                        and clean architecture principles.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Project Card */}
                            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10">

                                {/* Accent Glow */}
                                <div className={`absolute inset-0 ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60"></div>

                                    {/* Project Badge */}
                                    <div className={`absolute top-6 right-6 w-14 h-14 rounded-2xl ${project.accent} flex items-center justify-center shadow-lg shadow-current/20 z-20`}>
                                        <span className="text-2xl font-bold text-white">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-gray-300 transition-all duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Quick Links */}
                                        <div className="flex gap-3 lg:flex-col">
                                            <a href="#" className="opacity-50 cursor-not-allowed">
                                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                                    <FiGithub className="text-white/70 text-lg" />
                                                </div>
                                            </a>
                                            <a href="#" className="opacity-50 cursor-not-allowed">
                                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                                    <FiExternalLink className="text-white/70 text-lg" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mb-8">
                                        <h4 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-white/90 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4 pt-4 border-t border-white/10">
                                        <a href="#" className="flex-1 opacity-50 cursor-not-allowed">
                                            <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-semibold flex items-center justify-center gap-2 hover:from-white/20 hover:to-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                                <span>View Live Demo</span>
                                                <FiArrowUpRight className="text-lg" />
                                            </button>
                                        </a>
                                        <a href="#" className="flex-1 opacity-50 cursor-not-allowed">
                                            <button className="w-full py-3 px-6 rounded-xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                                <FiGithub />
                                                <span>Source Code</span>
                                            </button>
                                        </a>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className={`absolute inset-0 rounded-3xl border-2 ${project.accent.replace('bg-', 'border-')} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}></div>
                            </div>

                            {/* Floating Shadow Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-50 -z-10 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="max-w-4xl mx-auto mt-20 text-center">
                    <div className="inline-block p-px rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20">
                        <div className="px-8 py-6 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-3">
                                Want to see more?
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Check out my GitHub for additional projects and contributions
                            </p>
                            <a href="https://github.com/Shanmugavelarumugam" target="_blank" rel="noopener noreferrer" className="inline-block">
                                <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 mx-auto hover:scale-105 active:scale-95">
                                    <FiGithub />
                                    Explore All Projects
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;