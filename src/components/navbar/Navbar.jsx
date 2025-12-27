import React, { useState, useEffect } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <div className={`w-full fixed top-0 z-50 px-4 lg:px-40 transition-all duration-500 ${scrolled ? 'py-3 bg-gray-900/95 backdrop-blur-lg shadow-2xl shadow-primary/10' : 'py-5'
                }`}>
                <header className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo (Text Only, Signature Style) */}
                    <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <h2 className="text-white text-3xl font-bold tracking-tight font-signature">
                            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                                Shanmugavel A
                            </span>
                        </h2>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        <nav className="flex items-center gap-1 mr-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 relative group ${activeSection === item.id
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    <span className="relative z-10 font-medium text-sm">
                                        {item.label}
                                    </span>
                                    {activeSection === item.id && (
                                        <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm"></div>
                                    )}
                                    <div className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            ))}
                        </nav>

                        {/* Resume Button */}
                        <button className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-transparent transition-all duration-300">
                                <span className="text-white font-semibold text-sm bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    Resume
                                </span>
                                <span className="ml-2 text-primary group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden size-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 group"
                    >
                        {/* Icon Switch with Rotation Animation */}
                        <div className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                            {mobileMenuOpen ? (
                                <MdOutlineClose className="text-white text-2xl" />
                            ) : (
                                <RiMenu3Fill className="text-white text-2xl" />
                            )}
                        </div>
                    </button>
                </header>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 top-20 z-40 md:hidden">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
                    <div className="absolute right-4 top-0 w-64 bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-slideIn">
                        <div className="p-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full text-left px-4 py-4 rounded-xl mb-2 transition-all duration-300 ${activeSection === item.id
                                        ? 'bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/30'
                                        : 'hover:bg-white/5 border border-transparent'
                                        }`}
                                >
                                    <span className={`font-medium ${activeSection === item.id
                                        ? 'text-white'
                                        : 'text-gray-300'
                                        }`}>
                                        {item.label}
                                    </span>
                                    {activeSection === item.id && (
                                        <span className="ml-2 text-primary">●</span>
                                    )}
                                </button>
                            ))}

                            <div className="pt-4 mt-4 border-t border-gray-800">
                                <button className="w-full px-4 py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 flex items-center justify-center group">
                                    <span className="text-white font-semibold">Download Resume</span>
                                    <span className="ml-2 text-white group-hover:translate-x-1 transition-transform duration-300">↓</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
};

export default Navbar;