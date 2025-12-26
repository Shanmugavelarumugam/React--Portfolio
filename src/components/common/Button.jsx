import React from 'react';

const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '' }) => {
    const baseStyles = "group relative flex items-center justify-center h-12 px-8 rounded-lg text-base font-bold overflow-hidden transition-all active:scale-95";

    const variants = {
        primary: "bg-primary text-background-dark hover:shadow-[0_0_20px_rgba(37,175,244,0.4)]",
        outline: "bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
        text: "text-gray-400 hover:text-white"
    };

    if (variant === 'primary') {
        return (
            <button
                type={type}
                onClick={onClick}
                className={`${baseStyles} ${variants[variant]} ${className}`}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
