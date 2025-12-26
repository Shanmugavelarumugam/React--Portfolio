import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState("Initializing...");

    useEffect(() => {
        const textStates = [
            "Initializing Core Systems...",
            "Loading Assets...",
            "Establishing Secure Connection...",
            "Welcome User."
        ];

        let currentTextIndex = 0;

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // Slight delay before unmounting
                    return 100;
                }

                // Random jumps in progress to look realistic
                const jump = Math.random() * 10;
                return Math.min(prev + jump, 100);
            });
        }, 150);

        const textInterval = setInterval(() => {
            currentTextIndex = (currentTextIndex + 1) % textStates.length;
            if (currentTextIndex < textStates.length) {
                setText(textStates[currentTextIndex]);
            }
        }, 800);

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-[#020617] flex flex-col items-center justify-center font-mono">
            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full animate-pulse pointer-events-none"></div>

            <div className="relative z-10 w-64 md:w-80 flex flex-col gap-4">
                {/* Progress Bar Container */}
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
                    {/* Progress Fill */}
                    <div
                        className="h-full bg-primary shadow-[0_0_15px_rgba(37,175,244,0.5)] transition-all duration-200 ease-out"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="w-full h-full bg-white/30 animate-shimmer"></div>
                    </div>
                </div>

                {/* Text and Percentage */}
                <div className="flex justify-between text-xs md:text-sm text-primary font-bold tracking-widest uppercase">
                    <span>{text}</span>
                    <span>{Math.round(progress)}%</span>
                </div>
            </div>

            {/* Decorative Cyber Lines */}
            <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
    );
};

export default LoadingScreen;
