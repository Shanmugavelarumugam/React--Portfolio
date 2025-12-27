import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import { FiExternalLink, FiGithub, FiArrowUpRight, FiSearch } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const componentRef = useRef(null);
    const sliderRef = useRef(null);

    const projects = [
        {
            slug: "bluechat",
            title: "BlueChat",
            subtitle: "Secure Real-Time Communication Platform",
            description: "A feature-rich real-time chat application designed for seamless communication. It supports end-to-end encryption, dynamic group chats, and instant media sharing, all wrapped in a modern, secure interface.",
            stack: ["Flutter", "Firebase", "Socket.io", "Node.js"],
            image: "https://placehold.co/1920x1080/0a1a2f/1e88e5?text=BlueChat+App",
            gradient: "from-blue-600 to-cyan-400",
            demoLink: "#",
            repoLink: "#",
            caseStudy: {
                clientRequest: "Build a secure messaging platform with end-to-end encryption and real-time capabilities for enterprise teams.",
                challenge: "Implementing E2EE while maintaining real-time performance and ensuring seamless group chat functionality.",
                result: "Delivered a production-ready chat app with 99.9% uptime, supporting 10K+ concurrent users with sub-100ms message delivery.",
                problemStatement: "Modern teams need secure communication tools that don't compromise on speed or user experience. Existing solutions either lack proper encryption or suffer from performance issues at scale.",
                approach: [
                    "Implemented hybrid encryption (RSA + AES) for message security",
                    "Built custom Socket.io architecture for real-time messaging",
                    "Designed scalable Firebase backend with optimized queries",
                    "Created intuitive Flutter UI with Material Design 3"
                ],
                features: [
                    { icon: "FiLock", title: "End-to-End Encryption", description: "Military-grade encryption for all messages and media" },
                    { icon: "FiUsers", title: "Group Chats", description: "Dynamic group creation with admin controls and permissions" },
                    { icon: "FiImage", title: "Media Sharing", description: "Instant sharing of images, videos, and documents" },
                    { icon: "FiZap", title: "Real-Time Sync", description: "Sub-100ms message delivery across all devices" }
                ],
                metrics: {
                    users: "10,000+",
                    performance: "99.9%",
                    scalability: "Sub-100ms delivery"
                }
            }
        },
        {
            slug: "organic-ecommerce",
            title: "Organic Ecommerce",
            subtitle: "Farm-to-Consumer Digital Marketplace",
            description: "A comprehensive digital marketplace connecting farmers directly with consumers. Features include secure Stripe payment integration, real-time order tracking, and a user-friendly admin dashboard.",
            stack: ["Flutter", "RestAPI", "Stripe", "MongoDB"],
            image: "https://placehold.co/1920x1080/0d281f/10b981?text=Organic+Store",
            gradient: "from-emerald-500 to-teal-400",
            demoLink: "#",
            repoLink: "#",
            caseStudy: {
                clientRequest: "Create a direct-to-consumer platform that eliminates middlemen and connects organic farmers with health-conscious buyers.",
                challenge: "Building trust in online organic produce sales while managing complex logistics, payment processing, and inventory across multiple farms.",
                result: "Launched marketplace serving 500+ farmers and 5,000+ customers with 95% customer satisfaction and 40% repeat purchase rate.",
                problemStatement: "Organic farmers struggle to reach consumers directly, losing profits to intermediaries. Consumers lack transparency about product origins and freshness.",
                approach: [
                    "Developed farmer onboarding system with verification process",
                    "Integrated Stripe for secure payment processing",
                    "Built real-time inventory management across multiple vendors",
                    "Implemented order tracking with delivery notifications",
                    "Created admin dashboard for analytics and vendor management"
                ],
                features: [
                    { icon: "FiShoppingCart", title: "Smart Cart", description: "Multi-vendor cart with automatic shipping optimization" },
                    { icon: "FiCreditCard", title: "Secure Payments", description: "Stripe integration with escrow protection" },
                    { icon: "FiTruck", title: "Order Tracking", description: "Real-time delivery updates and notifications" },
                    { icon: "FiBarChart", title: "Analytics Dashboard", description: "Comprehensive insights for farmers and admins" }
                ],
                metrics: {
                    users: "5,000+",
                    performance: "95%",
                    scalability: "500+ vendors"
                }
            }
        },
        {
            slug: "inventory-app",
            title: "Inventory App",
            subtitle: "Enterprise Inventory Management System",
            description: "An enterprise-grade inventory solution offering real-time stock tracking, supplier management, and automated low-stock alerts. Built for scalability and precision.",
            stack: ["Flutter", "Firebase", "Charts_flutter", "Cloud Functions"],
            image: "https://placehold.co/1920x1080/2e1065/8b5cf6?text=Inventory+Dashboard",
            gradient: "from-purple-600 to-violet-400",
            demoLink: "#",
            repoLink: "#",
            caseStudy: {
                clientRequest: "Modernize legacy inventory system with real-time tracking, automated alerts, and predictive analytics for a manufacturing company.",
                challenge: "Migrating from paper-based processes to digital while ensuring zero downtime and maintaining data accuracy across 50+ warehouse locations.",
                result: "Reduced inventory discrepancies by 85%, cut stock-out incidents by 70%, and saved $200K annually in operational costs.",
                problemStatement: "Manual inventory tracking led to frequent stock-outs, overstocking, and significant revenue loss. The company needed real-time visibility across multiple warehouses.",
                approach: [
                    "Designed offline-first architecture for warehouse connectivity issues",
                    "Implemented barcode scanning for instant stock updates",
                    "Built predictive analytics using historical data",
                    "Created automated reorder point calculations",
                    "Developed comprehensive reporting dashboard"
                ],
                features: [
                    { icon: "FiPackage", title: "Real-Time Tracking", description: "Instant stock updates across all locations" },
                    { icon: "FiBell", title: "Smart Alerts", description: "Automated notifications for low stock and reorder points" },
                    { icon: "FiTrendingUp", title: "Predictive Analytics", description: "AI-powered demand forecasting" },
                    { icon: "FiFileText", title: "Custom Reports", description: "Detailed insights and exportable analytics" }
                ],
                metrics: {
                    users: "200+",
                    performance: "85%",
                    scalability: "50+ locations"
                }
            }
        },
        {
            slug: "college-management",
            title: "College Management",
            subtitle: "Comprehensive Campus Digitization Platform",
            description: "A holistic platform digitizing campus operations. Manages student attendance, academic records, and faculty timetables with an intuitive mobile-first interface.",
            stack: ["Flutter", "Dart", "SQL", "Provider"],
            image: "https://placehold.co/1920x1080/7f1d1d/f87171?text=College+CMS",
            gradient: "from-rose-500 to-pink-400",
            demoLink: "#",
            repoLink: "#",
            caseStudy: {
                clientRequest: "Digitize entire campus operations including attendance, grades, timetables, and communication for a 5,000-student institution.",
                challenge: "Replacing decades-old manual processes while training 200+ faculty members and ensuring data privacy compliance.",
                result: "Successfully digitized operations for 5,000 students and 200 faculty, reducing administrative workload by 60% and improving parent engagement by 80%.",
                problemStatement: "Manual attendance tracking, paper-based grade management, and fragmented communication channels created inefficiencies and delayed information flow.",
                approach: [
                    "Developed role-based access system (Admin, Faculty, Student, Parent)",
                    "Built biometric attendance integration",
                    "Created automated timetable generation with conflict detection",
                    "Implemented real-time parent notification system",
                    "Designed offline-capable mobile app for faculty"
                ],
                features: [
                    { icon: "FiCheckSquare", title: "Smart Attendance", description: "Biometric integration with automated reporting" },
                    { icon: "FiCalendar", title: "Timetable Management", description: "AI-powered scheduling with conflict resolution" },
                    { icon: "FiAward", title: "Grade Management", description: "Secure grade entry and transcript generation" },
                    { icon: "FiBell", title: "Parent Portal", description: "Real-time updates on attendance and performance" }
                ],
                metrics: {
                    users: "5,200+",
                    performance: "60%",
                    scalability: "80% engagement"
                }
            }
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            const matchMedia = gsap.matchMedia();

            matchMedia.add("(min-width: 1024px)", () => {
                const totalWidth = sliderRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                const scrollDistance = totalWidth - viewportWidth;

                gsap.to(sliderRef.current, {
                    x: -scrollDistance,
                    ease: "none",
                    scrollTrigger: {
                        trigger: componentRef.current,
                        pin: true,
                        scrub: 1,
                        snap: 1 / projects.length,
                        end: () => "+=" + scrollDistance
                    }
                });
            });

        }, componentRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" className="relative bg-black/20" ref={componentRef}>
            <div className="absolute inset-0 bg-dot-white opacity-20 pointer-events-none"></div>

            {/* Mobile View */}
            <div className="lg:hidden container mx-auto px-6 py-20 flex flex-col gap-12">
                <div className="text-center mb-10">
                    <SectionTitle title="Featured Projects" subtitle="What I've built" />
                </div>
                {projects.map((project, index) => (
                    <Link to={`/project/${project.slug}`} key={index} className="block group">
                        <div className="bg-gray-900/50 border border-white/10 rounded-2xl overflow-hidden glass-panel hover:border-primary/50 transition-colors">
                            <div className="h-48 overflow-hidden relative">
                                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                    Explore Project <FiArrowUpRight />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex overflow-hidden h-screen items-center sticky top-0">
                <div
                    ref={sliderRef}
                    className="flex flex-nowrap h-full items-center"
                    style={{ width: `${(projects.length + 1) * 100}vw` }}
                >
                    {/* Intro Slide */}
                    <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-6 relative text-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                        <SectionTitle title="Featured Projects" subtitle="Interactive Portfolio" className="mb-12" />
                        <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed font-light mx-auto">
                            Scroll to explore a collection of high-performance applications developed with <span className="text-primary font-bold">Flutter</span>, <span className="text-secondary font-bold">React</span>, and modern web technologies.
                        </p>
                        <div className="mt-12 flex flex-col items-center gap-4 text-gray-500 animate-pulse">
                            <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
                            <span className="text-3xl animate-bounce">↓</span>
                        </div>
                    </div>

                    {/* Project Slides */}
                    {projects.map((project, index) => (
                        <div key={index} className="project-panel w-screen h-screen flex-shrink-0 flex items-center justify-center p-20 relative box-border">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 blur-[150px] pointer-events-none`}></div>

                            <div className="w-full max-w-7xl grid grid-cols-12 gap-12 items-center">
                                {/* Image (60%) */}
                                <Link to={`/project/${project.slug}`} className="col-span-12 lg:col-span-7 relative group block">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>
                                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video shadow-2xl bg-black/80">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                                        <div className="absolute top-8 left-8 text-[120px] font-bold text-white/5 font-display leading-none z-0">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                </Link>

                                {/* Content (40%) */}
                                <div className="col-span-12 lg:col-span-5 flex flex-col justify-center h-full pl-8">
                                    <div className={`w-16 h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-8`}></div>
                                    <h2 className="text-5xl font-bold text-white mb-6 font-display leading-tight">{project.title}</h2>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8">{project.description}</p>

                                    <div className="flex flex-wrap gap-3 mb-10">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold bg-white/5 border border-white/10 text-gray-300">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <Link to={`/project/${project.slug}`} className="group">
                                            <button className={`h-14 px-8 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3`}>
                                                <span>Explore Project</span>
                                                <FiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </button>
                                        </Link>
                                        <div className="flex gap-4">
                                            <a href={project.repoLink} className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
                                                <FiGithub size={20} />
                                            </a>
                                            <a href={project.demoLink} className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
                                                <FiExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;