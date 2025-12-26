import React from 'react';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
    const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center';
    const mx = align === 'left' ? 'mr-auto' : 'mx-auto';

    return (
        <div className={`flex flex-col gap-3 mb-16 ${alignment}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-wider">
                {subtitle}
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400`}>
                {title}
            </h2>
            <div className={`w-20 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full mt-2 ${mx}`}></div>
        </div>
    );
};

export default SectionTitle;
