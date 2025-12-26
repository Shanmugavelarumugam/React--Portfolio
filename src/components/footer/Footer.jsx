import React from 'react';
import Copyright from './Copyright';
import { FaGithub, FaTwitter, FaLocationDot } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-t from-[#020617] via-[#0f172a] to-[#020617] border-t border-white/5 pt-16 pb-8 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-playfair text-white">Shanmugavel A</h3>
                        <p className="text-gray-400 leading-relaxed">
                            A passionate Mobile App Developer specializing in Flutter and native technologies to build seamless digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold font-display text-white">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                            <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold font-display text-white">Contact</h4>
                        <div className="space-y-4 text-gray-400">
                            <a href="mailto:ashanmugavel821@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <IoIosMail className="text-xl" />
                                </div>
                                <span>ashanmugavel821@gmail.com</span>
                            </a>
                            <a href="tel:+916381812437" className="flex items-center gap-3 hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <PiPhoneCallFill className="text-xl" />
                                </div>
                                <span>(+91) 6381812437</span>
                            </a>
                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <FaLocationDot className="text-xl" />
                                </div>
                                <span>Chennai, Tamil Nadu</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold font-display text-white">Follow Me</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Shanmugavelarumugam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shanmugavel45/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                            >
                                <SiLinkedin className="text-xl" />
                            </a>
                            <a
                                href="mailto:ashanmugavel821@gmail.com"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                            >
                                <IoIosMail className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <Copyright />
                    <p className="text-sm text-gray-500">
                        Designed & Built with <span className="text-red-500">♥</span> using React & Flutter logic
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
