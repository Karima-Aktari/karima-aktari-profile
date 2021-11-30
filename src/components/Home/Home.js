import React from 'react';
import Header from '../Header/Header';
import Banner from '../Shared/Banner/Banner';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div id="home" className="bg-dark">
            <Header></Header>
            <Banner></Banner>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;