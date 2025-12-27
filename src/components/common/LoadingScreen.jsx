import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { FaReact, FaAndroid, FaApple, FaCode } from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase, SiKotlin, SiSwift } from 'react-icons/si';

const LoadingScreen = ({ onComplete }) => {
    const containerRef = useRef(null);
    const phoneRef = useRef(null);
    const orbitalRef = useRef(null);
    const [loadingText, setLoadingText] = useState("Initializing...");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // Slide up reveal
                gsap.to(containerRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power2.inOut",
                    onComplete: onComplete
                });
            }
        });

        // Initial State
        gsap.set(phoneRef.current, { scale: 0.5, opacity: 0, rotationY: 45 });

        // Entry Animation
        tl.to(phoneRef.current, {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.75)"
        });

        // Orbiting Rings Animation
        gsap.to(".orbit-ring", {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "none"
        });

        gsap.to(".orbit-ring-reverse", {
            rotation: -360,
            duration: 25,
            repeat: -1,
            ease: "none"
        });

        // Floating Icons (Planets)
        gsap.to(".floating-icon", {
            y: -20,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut",
            stagger: 0.5
        });

        // Build Process Simulation
        const steps = [
            { text: "Resolving dependencies...", percent: 15 },
            { text: "Compiling Dart code...", percent: 35 },
            { text: "Linking libraries...", percent: 55 },
            { text: "Building APK...", percent: 75 },
            { text: "Installing on device...", percent: 90 },
            { text: "Starting Activity...", percent: 100 }
        ];

        let currentStepIndex = 0;

        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev + 1;

                // Update text based on checkpoints
                if (currentStepIndex < steps.length && next >= steps[currentStepIndex].percent) {
                    setLoadingText(steps[currentStepIndex].text);
                    currentStepIndex++;
                }

                if (next >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return next;
            });
        }, 40); // Approx 4 seconds total

        // Keep timeline waiting for progress
        tl.to({}, { duration: 4.5 });

        return () => {
            clearInterval(interval);
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden font-sans"
        >
            {/* Matrix Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">

                {/* Main Visual: Phone & Tech Orbit */}
                <div className="relative mb-12">

                    {/* Orbital Rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-dash border-blue-500/30 rounded-full orbit-ring"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dotted border-purple-500/30 rounded-full orbit-ring-reverse"></div>

                    {/* Orbiting Icons (positioned absolutely on the rings conceptually, simplified here with float) */}
                    <SiFlutter className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 text-blue-400 text-3xl floating-icon" />
                    <FaReact className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-24 text-cyan-400 text-3xl floating-icon delay-75" />
                    <SiFirebase className="absolute top-1/2 left-0 -translate-x-24 -translate-y-1/2 text-orange-400 text-3xl floating-icon delay-150" />
                    <FaAndroid className="absolute top-1/2 right-0 translate-x-24 -translate-y-1/2 text-green-500 text-3xl floating-icon delay-100" />

                    {/* Phone Emulator */}
                    <div ref={phoneRef} className="relative w-40 h-72 bg-black border-4 border-gray-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                        {/* Status Bar */}
                        <div className="w-full h-6 bg-gray-800 flex justify-between items-center px-3 text-[8px] text-gray-400">
                            <span>9:41</span>
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                            </div>
                        </div>

                        {/* Screen */}
                        <div className="flex-1 bg-gray-900 p-3 relative font-mono text-[8px] leading-3 text-green-400 overflow-hidden">
                            <span className="text-blue-300">➜</span> <span className="text-yellow-300">~</span> flutter run<br />
                            <span className="opacity-50">Launching lib/main.dart...</span><br />
                            <br />
                            <span className={progress > 20 ? "block" : "hidden"}>✓ Built build/app.apk</span>
                            <span className={progress > 50 ? "block" : "hidden"}>✓ Installed 12.4MB</span>
                            <span className={progress > 80 ? "block" : "hidden"}>✓ Syncing files...</span>

                            {/* Flutter Logo on Screen Center */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                <SiFlutter className="text-6xl text-white" />
                            </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="w-full h-4 bg-black flex justify-center items-center">
                            <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Loading Bar & Text */}
                <div className="w-64 space-y-3">
                    <div className="flex justify-between text-xs font-mono text-blue-300/80 uppercase tracking-widest">
                        <span>{loadingText}</span>
                        <span>{progress}%</span>
                    </div>

                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden relative">
                        <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-75 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>

                        {/* Progress Glow */}
                        <div
                            className="absolute top-0 h-full w-2 bg-white blur-[2px] opacity-70"
                            style={{ left: `${progress}%`, transition: 'left 0.075s ease-out' }}
                        ></div>
                    </div>
                </div>

            </div>

            {/* Corner Decor */}
            <FaCode className="absolute bottom-8 right-8 text-gray-700 text-4xl opacity-50" />
            <div className="absolute bottom-8 left-8 text-xs font-mono text-gray-600">
                v1.0.0
            </div>

        </div>
    );
};

export default LoadingScreen;
