import React, { useState, useEffect, useRef } from 'react';
import { SiLinkedin } from "react-icons/si";
import { FaGithub, FaArrowRight, FaFlutter } from "react-icons/fa6";
import { IoIosMail, IoIosArrowDown } from "react-icons/io";
import { IoLogoAndroid } from "react-icons/io5";

const Typewriter = ({ text, speed = 100, wait = 3000 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentRole = text[currentIndex];

            if (isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
            } else {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
            }

            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), wait);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % text.length);
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex, text, speed, wait]);

    return (
        <span className="text-primary font-bold">
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculate tilt
        const x = (clientX - centerX) / 50;
        const y = (clientY - centerY) / 50;
        setMousePosition({ x, y });
    };

    return (
        <section
            id="hero"
            className="flex-1 flex flex-col justify-center relative pt-32 pb-12 lg:pt-36 min-h-screen"
            onMouseMove={handleMouseMove}
        >
            {/* Background Atmospheric Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Top Right Blue Glow */}
                <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full nebula-glow blur-3xl opacity-60"></div>
                {/* Bottom Left Purple Glow */}
                <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full nebula-glow-purple blur-3xl opacity-50"></div>

                {/* Dense Starfield */}
                {[...Array(200)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full opacity-20 animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 5 + 3}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-40 h-full flex flex-col justify-center relative z-10">
                <div className="@container w-full">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="flex flex-col gap-8 flex-1 text-center lg:text-left z-20">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-4">
                                    <h1 className="text-white text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight font-playfair">
                                        Hi, I'm <span className="text-primary drop-shadow-[0_0_15px_rgba(37,175,244,0.5)]">Shanmugavel A</span>
                                    </h1>
                                    <h2 className="text-gray-400 text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body min-h-[30px]">
                                        I am <Typewriter text={["Flutter Developer", "Mobile App Developer", "Software Developer", "A Friend"]} speed={100} wait={2000} />
                                    </h2>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <button
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group relative flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-background-dark text-base font-bold overflow-hidden transition-transform active:scale-95 hover:shadow-[0_0_20px_rgba(37,175,244,0.4)] font-playfair"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Projects
                                        <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </button>
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group flex items-center justify-center h-12 px-8 rounded-lg bg-white/5 border border-white/10 text-white text-base font-bold backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95 font-playfair"
                                >
                                    Contact Me
                                </button>
                            </div>
                            {/* Social Proof / Stats */}
                            <div className="pt-8 flex flex-col items-center lg:items-start gap-4 opacity-80">
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold font-playfair">Connect With Me</p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/Shanmugavelarumugam"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group glass-panel p-3 rounded-lg hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center text-white group-hover:text-primary transition-colors">
                                            <FaGithub className="text-2xl" />
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/shanmugavel45/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group glass-panel p-3 rounded-lg hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center text-white group-hover:text-primary transition-colors">
                                            <SiLinkedin className="text-2xl" />
                                        </div>
                                    </a>
                                    <a
                                        href="mailto:ashanmugavel821@gmail.com"
                                        className="group glass-panel p-3 rounded-lg hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center text-white group-hover:text-primary transition-colors">
                                            <IoIosMail className="text-3xl" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* 3D Visual */}
                        <div
                            className="flex-1 w-full max-w-[600px] lg:max-w-none flex justify-center lg:justify-end relative perspective-1000 transition-transform duration-100 ease-out"
                            style={{
                                transform: `rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
                            }}
                        >
                            {/* Decorative ring behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="relative w-full aspect-square max-w-[500px] animate-float">
                                {/* Glass Card Container for 3D element */}
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 backdrop-blur-sm border border-white/5 shadow-[0_0_50px_rgba(37,175,244,0.1)] flex items-center justify-center overflow-hidden">
                                    {/* Abstract Planet / Orb Image */}
                                    <div className="w-[120%] h-[120%] bg-cover bg-center opacity-90 mix-blend-lighten" data-alt="Abstract 3D planet with glowing blue and purple nebula textures floating in space" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWkTuEhxEXxXnGukY56rmYeD5zg5qc_IoG25bOOtrDcru3NszEjY1sDtwP8QGC5I2IqtDD_xZaa9DWUQ91bI-hBTp9L3O-pnue16sqxGdaEW97CcbuBWO3I-zvjmBhhwRq63dbK9Oqna33x4dc3Kibkn6vR2D_LSDRTgZ3txxI6xNMAy04Iivv3zcZTD8sgS_fuIQiMWnyrAry04Z_Xxyos3k-GUbpwXnL9Ls0GSzQqhINNpa1rVTbYFtdI5gNWSbcSlKb1k8lmXc')" }}>
                                    </div>
                                    {/* Reflection/Highlight Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 rounded-full"></div>
                                </div>
                                {/* Floating Code Cards */}
                                <div className="absolute -left-4 top-1/4 glass-panel p-3 rounded-xl animate-pulse-slow shadow-lg shadow-black/40">
                                    <FaFlutter className="text-blue-400 text-3xl" />
                                </div>
                                <div className="absolute -right-4 bottom-1/4 glass-panel p-3 rounded-xl animate-pulse-slow delay-700 shadow-lg shadow-black/40">
                                    <IoLogoAndroid className="text-green-500 text-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
                <IoIosArrowDown className="text-gray-500 text-xl" />
            </div>
        </section>
    );
};

export default Hero;
