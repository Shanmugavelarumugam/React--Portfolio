import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { IoIosSend, IoIosMail } from "react-icons/io";
import { FaGithub, FaTwitter, FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { SiLinkedin } from "react-icons/si";
import gsap from 'gsap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        _gotcha: '' // Honeypot field
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    const buttonRef = useRef(null);
    const formRef = useRef(null);
    const successRef = useRef(null);
    const particlesContainerRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const animateParticles = () => {
        if (!buttonRef.current || !particlesContainerRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Create 30 particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('fixed', 'w-1', 'h-1', 'bg-primary', 'rounded-full', 'pointer-events-none', 'z-50');
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;
            // Randomize size slightly
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.boxShadow = `0 0 ${size * 2}px var(--color-primary)`;

            particlesContainerRef.current.appendChild(particle);

            // Animate
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 100 + 50;

            gsap.to(particle, {
                x: Math.cos(angle) * (Math.random() * 50),
                y: -window.innerHeight * 0.5 - (Math.random() * 200), // Fly up
                opacity: 0,
                scale: 0,
                duration: 1 + Math.random(),
                ease: "power2.out",
                onComplete: () => {
                    if (particle.parentNode) particle.parentNode.removeChild(particle);
                }
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Bot detection
        if (formData._gotcha) {
            setStatus({ loading: false, success: true, error: null });
            return;
        }

        // Rate Limiting
        const lastContactTime = localStorage.getItem('lastContactTime');
        const now = Date.now();
        if (lastContactTime && now - parseInt(lastContactTime) < 60000) {
            const waitTime = Math.ceil((60000 - (now - parseInt(lastContactTime))) / 1000);
            setStatus({ loading: false, success: false, error: `Rate limit exceeded. Please wait ${waitTime} seconds.` });
            return;
        }

        setStatus({ loading: true, success: false, error: null });

        // Animation Start
        if (buttonRef.current) {
            gsap.to(buttonRef.current, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
        }
        animateParticles();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                }),
            });

            if (!response.ok) throw new Error('Failed to send message.');

            localStorage.setItem('lastContactTime', Date.now().toString());

            setStatus({ loading: false, success: true, error: null });
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Success Animation
            if (formRef.current) {
                gsap.to(formRef.current, { opacity: 0, height: 0, duration: 0.5, ease: "power2.inOut" });
            }
            if (successRef.current) {
                gsap.fromTo(successRef.current,
                    { opacity: 0, scale: 0.8, display: 'none' },
                    { opacity: 1, scale: 1, display: 'flex', duration: 0.5, delay: 0.5, ease: "back.out(1.7)" }
                );
            }

            // Reset after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, success: false }));
                if (formRef.current) {
                    gsap.to(formRef.current, { opacity: 1, height: 'auto', duration: 0.5, ease: "power2.inOut" });
                }
                if (successRef.current) {
                    gsap.to(successRef.current, { opacity: 0, scale: 0.8, display: 'none', duration: 0.3 });
                }
            }, 5000);

        } catch (error) {
            console.error('Contact Form Error:', error);
            let errorMessage = 'Something went wrong. Please try again.';
            if (error.message === 'Failed to fetch') {
                errorMessage = 'Network error: The server might be sleeping. Please try again in a minute.';
            } else if (error.message) {
                errorMessage = error.message;
            }
            setStatus({ loading: false, success: false, error: errorMessage });
        }
    };

    return (
        <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Particles Container */}
            <div ref={particlesContainerRef} className="fixed inset-0 pointer-events-none z-50"></div>

            {/* Decorative blob */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full opacity-30 pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-40 relative z-10">
                <SectionTitle title="Get In Touch" subtitle="Let's build something together" />

                <div className="max-w-2xl mx-auto glass-panel p-8 lg:p-12 rounded-2xl border border-white/10 min-h-[400px] flex flex-col justify-center relative">

                    {/* Success Message View */}
                    <div ref={successRef} className="hidden flex-col items-center justify-center text-center gap-6 absolute inset-0 p-8">
                        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-2 animate-pulse">
                            <FaCheckCircle className="text-5xl text-green-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-white font-display">Message Sent!</h3>
                        <p className="text-gray-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                        <button
                            onClick={() => {
                                setStatus(prev => ({ ...prev, success: false }));
                                if (formRef.current) {
                                    gsap.to(formRef.current, { opacity: 1, height: 'auto', duration: 0.5, ease: "power2.inOut" });
                                }
                                if (successRef.current) {
                                    gsap.to(successRef.current, { opacity: 0, scale: 0.8, display: 'none', duration: 0.3 });
                                }
                            }}
                            className="mt-4 text-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                        >
                            Send Another Message
                        </button>
                    </div>

                    {/* Form View */}
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 origin-top">
                        {status.error && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm font-medium">
                                {status.error}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
                                    placeholder="John Doe"
                                    disabled={status.loading}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
                                    placeholder="john@example.com"
                                    disabled={status.loading}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
                                placeholder="Project Inquiry"
                                disabled={status.loading}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none disabled:opacity-50"
                                placeholder="Tell me about your project..."
                                disabled={status.loading}
                            ></textarea>
                        </div>

                        <div ref={buttonRef} className="self-end">
                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full md:w-auto mt-4 min-w-[160px] relative overflow-hidden group"
                                disabled={status.loading}
                            >
                                <span className="flex items-center gap-2 group-hover:gap-3 transition-all">
                                    {status.loading ? 'Sending...' : 'Send Message'}
                                    <IoIosSend className={`text-lg transition-all ${status.loading ? 'translate-x-10 -translate-y-10 opacity-0' : ''}`} />
                                </span>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
