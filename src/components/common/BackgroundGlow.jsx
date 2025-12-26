import React, { useEffect, useState } from 'react';

const BackgroundGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            });
        };

        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

    return (
        <div
            className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden"
            style={{ background: 'transparent' }}
        >
            <div
                className="absolute w-[600px] h-[600px] rounded-full mix-blend-screen opacity-20 transition-transform duration-300 ease-out will-change-transform"
                style={{
                    background: 'radial-gradient(circle, rgba(37, 175, 244, 0.4) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%)',
                    left: 0,
                    top: 0,
                    transform: `translate(${position.x - 300}px, ${position.y - 300}px)`,
                }}
            ></div>
        </div>
    );
};

export default BackgroundGlow;
