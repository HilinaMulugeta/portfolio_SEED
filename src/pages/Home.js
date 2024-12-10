import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import ScrollToTop from '../components/ScrollToTop';
import Contact from './Contact';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />          
            <Portfolio />
            <Clients />
            <ScrollToTop /> 
            <Cta/>
            <Contact/>
            <Footer />
        </>

    )
}

export default Home;

