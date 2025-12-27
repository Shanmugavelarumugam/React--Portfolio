import React from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;
