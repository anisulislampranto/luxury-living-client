import React, { useEffect } from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import AOS from 'aos';
import Gallery from '../Gallery/Gallery';

const Home = () => {

    useEffect(() => {
        AOS.init({duration : 2000});
      }, []);

    return (
        <div>
            <Header/>
            <Projects />
            <Services />
            <Reviews />
            <Gallery/>
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;