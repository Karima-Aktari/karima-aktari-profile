import React from 'react';
// import Header from '../Header/Header';
import Banner from '../Shared/Banner/Banner';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Shared/Footer/Footer';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div id="home" className="mx-auto bg-dark">
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;