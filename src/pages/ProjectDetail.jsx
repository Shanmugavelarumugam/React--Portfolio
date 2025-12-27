import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    FiArrowLeft,
    FiGithub,
    FiExternalLink,
    FiCheckCircle,
    FiLock,
    FiUsers,
    FiImage,
    FiZap,
    FiShoppingCart,
    FiCreditCard,
    FiTruck,
    FiBarChart,
    FiPackage,
    FiBell,
    FiTrendingUp,
    FiFileText,
    FiCheckSquare,
    FiCalendar,
    FiAward,
    FiMail
} from 'react-icons/fi';

// Icon mapping
const iconMap = {
    FiLock, FiUsers, FiImage, FiZap, FiShoppingCart, FiCreditCard,
    FiTruck, FiBarChart, FiPackage, FiBell, FiTrendingUp, FiFileText,
    FiCheckSquare, FiCalendar, FiAward
};

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Project data - in production, this would come from a centralized data file
    const projects = [
        {
            slug: "bluechat",
            title: "BlueChat",
            subtitle: "Secure Real-Time Communication Platform",
            description: "A feature-rich real-time chat application designed for seamless communication.",
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
            description: "A comprehensive digital marketplace connecting farmers directly with consumers.",
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
            description: "An enterprise-grade inventory solution offering real-time stock tracking.",
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
            description: "A holistic platform digitizing campus operations.",
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

    const project = projects.find(p => p.slug === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-background-dark text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 font-display">Project Not Found</h1>
                    <button onClick={() => navigate('/')} className="text-primary hover:underline">
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    const { caseStudy } = project;

    return (
        <div className="min-h-screen bg-background-dark text-white">
            {/* Hero Section */}
            <section className="relative bg-background-dark pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-dot-white opacity-10 pointer-events-none"></div>
                <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br ${project.gradient} opacity-10 blur-[150px] pointer-events-none`}></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group"
                    >
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-body">Back to Projects</span>
                    </button>

                    <div className={`w-20 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mb-8`}></div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                        {project.title}
                    </h1>

                    <p className="text-2xl text-gray-400 font-light max-w-3xl font-body">
                        {project.subtitle}
                    </p>
                </div>
            </section>

            {/* Overview Cards */}
            <section className="py-20 px-6 bg-black/20 relative">
                <div className="absolute inset-0 bg-grid-white opacity-5"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Client Request */}
                        <div className="glass-panel rounded-2xl p-8 hover:bg-white/10 transition-all group">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <FiCheckCircle className="text-white text-2xl" />
                            </div>
                            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest font-display">Client Request</h3>
                            <p className="text-gray-300 leading-relaxed font-body">
                                {caseStudy.clientRequest}
                            </p>
                        </div>

                        {/* Challenge */}
                        <div className="glass-panel rounded-2xl p-8 hover:bg-white/10 transition-all group">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <FiTrendingUp className="text-white text-2xl" />
                            </div>
                            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest font-display">Challenge</h3>
                            <p className="text-gray-300 leading-relaxed font-body">
                                {caseStudy.challenge}
                            </p>
                        </div>

                        {/* Result */}
                        <div className="glass-panel rounded-2xl p-8 hover:bg-white/10 transition-all group">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <FiAward className="text-white text-2xl" />
                            </div>
                            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest font-display">Result</h3>
                            <p className="text-gray-300 leading-relaxed font-body">
                                {caseStudy.result}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution Section */}
            <section className="py-20 px-6 bg-background-dark relative">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] nebula-glow-purple blur-3xl opacity-20 pointer-events-none"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Text Content */}
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6 font-display">Challenge & Solution</h2>
                            <div className={`h-1 w-16 bg-gradient-to-r ${project.gradient} mb-8`}></div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-3 font-display">The Problem</h3>
                                    <p className="text-gray-400 leading-relaxed font-body">
                                        {caseStudy.problemStatement}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-4 font-display">Our Approach</h3>
                                    <ul className="space-y-3">
                                        {caseStudy.approach.map((step, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                    <FiCheckCircle className="text-white text-sm" />
                                                </div>
                                                <span className="text-gray-300 font-body">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right: Visual */}
                        <div className="relative">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-2xl opacity-20`}></div>
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 px-6 bg-black/20 relative">
                <div className="absolute inset-0 bg-dot-white opacity-5"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4 font-display">Key Features</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
                            Powerful capabilities designed to solve real-world problems
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {caseStudy.features.map((feature, index) => {
                            const IconComponent = iconMap[feature.icon] || FiCheckCircle;
                            return (
                                <div key={index} className="text-center group">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20`}>
                                        <IconComponent className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 font-display">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed font-body">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Results & Impact Section */}
            <section className="py-20 px-6 bg-background-dark relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] nebula-glow blur-3xl opacity-30 pointer-events-none"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4 font-display">Results & Impact</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
                            Measurable outcomes that demonstrate success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 glass-panel rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400 mb-3 font-display">
                                {caseStudy.metrics.users}
                            </div>
                            <div className="text-gray-400 uppercase tracking-wide text-sm font-body">Active Users</div>
                        </div>

                        <div className="text-center p-8 glass-panel rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-pink-400 mb-3 font-display">
                                {caseStudy.metrics.performance}
                            </div>
                            <div className="text-gray-400 uppercase tracking-wide text-sm font-body">Performance Improvement</div>
                        </div>

                        <div className="text-center p-8 glass-panel rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-3 font-display">
                                {caseStudy.metrics.scalability}
                            </div>
                            <div className="text-gray-400 uppercase tracking-wide text-sm font-body">Scalability</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 px-6 bg-black/20 relative">
                <div className="absolute inset-0 bg-grid-white opacity-5"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4 font-display">Tech Stack</h2>
                        <p className="text-xl text-gray-400 font-body">Built with modern, reliable technologies</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {project.stack.map((tech, index) => (
                            <div
                                key={index}
                                className="px-6 py-3 glass-panel border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 hover:border-primary/50 hover:scale-105 transition-all font-body"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className={`py-24 px-6 bg-gradient-to-br ${project.gradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-dot-white opacity-10"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                        Ready to Build Your Next Digital Product?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-body">
                        Let's collaborate to create scalable, high-performance solutions tailored to your business needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/#contact"
                            className="px-8 py-4 bg-white text-background-dark font-bold rounded-xl hover:scale-105 transition-transform shadow-2xl flex items-center gap-3 font-display"
                        >
                            <FiMail />
                            Start Your Project
                        </a>

                        <div className="flex gap-4">
                            <a
                                href={project.demoLink}
                                className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2 font-body"
                            >
                                <FiExternalLink />
                                Live Demo
                            </a>
                            <a
                                href={project.repoLink}
                                className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2 font-body"
                            >
                                <FiGithub />
                                View Code
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
