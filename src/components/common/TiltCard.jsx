import React, { useRef, useState } from 'react';

const TiltCard = ({ children, className = '' }) => {
    const cardRef = useRef(null);
    const [transform, setTransform] = useState('');
    const [shadow, setShadow] = useState('');

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg tilt
        const rotateY = ((x - centerX) / centerX) * 5;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);

        // Dynamic shadow based on light source direction
        const shadowX = ((x - centerX) / centerX) * -20;
        const shadowY = ((y - centerY) / centerY) * -20;
        setShadow(`${shadowX}px ${shadowY}px 30px rgba(37, 175, 244, 0.15)`);
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
        setShadow('');
    };

    return (
        <div
            ref={cardRef}
            className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform,
                boxShadow: shadow,
            }}
        >
            {children}
        </div>
    );
};

export default TiltCard;
