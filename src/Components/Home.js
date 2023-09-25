import React from 'react';
import AboutMe from './About/AboutMe';
import ContactMe from './Contact/ContactMe';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';

const Home = () => {
    return (
        <>
        <AboutMe />
        <Experience />
        <Projects />
        <ContactMe />
        </>
    )
}

export default Home;