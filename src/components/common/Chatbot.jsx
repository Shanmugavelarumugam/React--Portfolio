import React, { useState, useRef, useEffect } from 'react';
import { IoIosSend, IoIosClose, IoIosChatbubbles } from "react-icons/io";
import { RiMindMap } from "react-icons/ri";

const botBrain = [
    {
        keywords: ["hi", "hello", "hey", "greetings", "yo", "hii", "hai", "hola"],
        reply: "Hi 👋 I'm Shanmugavel's portfolio assistant. Ask me about my Skills, Projects, or how to Contact me!"
    },
    {
        keywords: ["skill", "skills", "stack", "tech", "technologies", "tech stack", "what can you do", "expertise"],
        reply: "I verify functionality in Flutter, Dart, Firebase, React, Node.js, and REST APIs. I also have experience with state management (Provider, Bloc) and UI/UX implementation."
    },
    {
        keywords: ["project", "projects", "work", "portfolio", "app", "apps", "applications", "built", "developed"],
        reply: "I've built several high-performance apps, including 'BlueChat', an 'Organic Ecommerce' platform, an 'Inventory App', and a 'College Management' system. Check out the Projects section!"
    },
    {
        keywords: ["contact", "email", "phone", "reach", "reach you", "get in touch", "call", "message"],
        reply: "You can reach me at ashanmugavel821@gmail.com, or call (+91) 6381812437. Alternatively, use the Contact form below."
    },
    {
        keywords: ["experience", "job", "career", "worked", "working", "background", "professional"],
        reply: "I have 6+ months of experience and have worked as a Flutter Developer Intern at MDQuality Apps Solutions and Upturn Technology. Currently, I work at Burj Tech Consultancy."
    },
    {
        keywords: ["location", "city", "where", "where are you", "based", "place"],
        reply: "I am currently based in Chennai, Tamil Nadu, India."
    },
    {
        keywords: ["education", "degree", "college", "university", "study", "studied", "ece", "engineering"],
        reply: "I hold a Bachelor of Engineering in Electronics and Communication Engineering from Rajalakshmi Engineering College (2024), gaining a strong technical foundation."
    },
    {
        keywords: ["hobby", "interest", "passion", "hobbies", "free time", "likes"],
        reply: "Beyond coding, I enjoy exploring new technologies, 3D modeling, and staying updated with the latest UI/UX trends. I'm passionate about solving real-world problems through code."
    },
    {
        keywords: ["flutter", "dart", "mobile", "android", "ios", "cross platform"],
        reply: "Flutter and Dart are my primary stack. I build production-ready apps with real-time sync, custom animations, and seamless state management (Provider/Bloc)."
    },
    {
        keywords: ["react", "javascript", "frontend", "front end", "ui dev", "web"],
        reply: "I work with React, JavaScript, Tailwind CSS, and modern frontend ecosystems. This 3D interactive portfolio itself is built with React!"
    },
    {
        keywords: ["backend", "server", "api", "node", "firebase", "express", "rest"],
        reply: "For backend, I use Node.js, Express, and Firebase (Auth, Firestore, Cloud Functions). I'm experienced in designing efficient databases and integrating REST APIs."
    },
    {
        keywords: ["github", "code", "repository", "git", "source code", "repo"],
        reply: "Check out my code on GitHub! I maintain clean, documented code. The link is available in the 'Follow Me' section."
    },
    {
        keywords: ["resume", "cv", "download", "profile", "pdf"],
        reply: "My resume details my full experience and skills. You can request it via email or download it if a link is provided on the site."
    },
    {
        keywords: ["availability", "hire", "freelance", "work", "job opening", "opportunity"],
        reply: "I'm open to new opportunities and collaborations! Feel free to reach out via the contact form to discuss potential work."
    },
    {
        keywords: ["thank", "thanks", "appreciate", "nice", "cool"],
        reply: "You're welcome! 😊 Let me know if you have any other questions."
    },
    {
        keywords: ["name", "who", "yourself", "about you", "who are you"],
        reply: "I'm an AI assistant for Shanmugavel A, a passionate Mobile App Developer. I'm here to showcase his work!"
    },
    {
        keywords: ["bye", "goodbye", "see you", "exit", "close"],
        reply: "Goodbye! 👋 Feel free to chat anytime. Have a great day!"
    },
    {
        keywords: ["design", "ui", "ux", "interface", "animation", "layout"],
        reply: "I specialize in intuitive UI/UX, focusing on clean design, smooth animations, and responsive layouts across devices."
    },
    {
        keywords: ["certification", "certificate", "course", "learning", "training"],
        reply: "I continuously upskill through certifications in advanced Flutter development and modern web technologies to stay ahead of the curve."
    },
    {
        keywords: ["language", "programming", "coding", "languages"],
        reply: "I code primarily in Dart (Flutter) and JavaScript (React), with proficiency in HTML/CSS and familiarity with Python/SQL."
    },
    {
        keywords: ["database", "storage", "firestore", "mongodb", "sql", "db"],
        reply: "I work with Firebase Firestore (NoSQL), MongoDB, and SQL databases, optimizing data structures for performance and scalability."
    },
    {
        keywords: ["portfolio", "website", "site", "page", "webpage"],
        reply: "This portfolio is a showcase of my technical skills, featuring 3D elements and a responsive design built with React and Vite."
    },
    {
        keywords: ["linkedin", "social", "media", "connect", "profile"],
        reply: "Connect with me on LinkedIn! The link is in the 'Follow Me' section alongside my GitHub and Email."
    },
    {
        keywords: ["test", "testing", "qa", "quality", "bug"],
        reply: "I ensure app reliability through comprehensive testing, layout checks, and performance optimization before deployment."
    },
    {
        keywords: ["deployment", "publish", "store", "play store", "release", "hosting"],
        reply: "I have experience deploying apps to the Google Play Store and hosting web apps on platforms like Netlify and Vercel."
    }
];


const isPartialMatch = (msg, keyword) => {
    return keyword.startsWith(msg) || msg.startsWith(keyword.slice(0, 3));
};

const getBotReply = (message) => {
    const msg = message.toLowerCase().trim();

    for (const item of botBrain) {
        for (const keyword of item.keywords) {
            // partial match support (skil -> skill, proj -> project)
            if (
                msg.includes(keyword) ||
                keyword.includes(msg) ||
                msg.split(" ").some(word => keyword.startsWith(word)) ||
                isPartialMatch(msg, keyword)
            ) {
                return item.reply;
            }
        }
    }

    return "I can answer questions about my Skills, Projects, Experience, or Contact details. Try asking 'What are your skills?'";
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! 👋 I'm an AI Assistant. Ask me anything about Shanmugavel!", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Auto-open chatbot after 15 seconds, then close after 5 seconds
    useEffect(() => {
        let closeTimer;
        const openTimer = setTimeout(() => {
            setIsOpen(true);
            closeTimer = setTimeout(() => {
                setIsOpen(false);
            }, 5000);
        }, 15000);

        return () => {
            clearTimeout(openTimer);
            clearTimeout(closeTimer);
        };
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // User message
        const userMsg = { text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");

        // Bot reply (simulated delay for realism)
        setTimeout(() => {
            const replyText = getBotReply(userMsg.text);
            setMessages(prev => [...prev, { text: replyText, sender: 'bot' }]);
        }, 600);
    };

    return (
        <div className="fixed bottom-10 right-10 z-50 hidden md:flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-80 md:w-96 h-96 bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slideUp origin-bottom-right">
                    {/* Header */}
                    <div className="p-4 bg-primary/10 border-b border-white/5 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                <RiMindMap className="text-white text-lg" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white font-display">Portfolio Assistant</h3>
                                <p className="text-[10px] text-primary flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <IoIosClose size={24} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                        ? 'bg-primary text-white rounded-br-none'
                                        : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-3 bg-black/20 border-t border-white/5 flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask about skills, projects..."
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 placeholder-gray-500"
                        />
                        <button
                            type="submit"
                            className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
                            disabled={!inputValue.trim()}
                        >
                            <IoIosSend size={18} />
                        </button>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-red-500 rotate-90' : 'bg-primary animate-bounce-subtle'
                    }`}
            >
                {isOpen ? (
                    <IoIosClose size={36} className="text-white" />
                ) : (
                    <IoIosChatbubbles size={32} className="text-white" />
                )}
            </button>
        </div>
    );
};

export default Chatbot;
