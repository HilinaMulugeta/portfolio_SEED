import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
// import heroImg from '../images/Hero.jpg';
{/* <canvas id="dotlottie-canvas" style="width: 300px; height: 300px;"></canvas> */}

const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">

                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-2xl text-xl font-bold text-gray-500">
                            {/* We build digital solutions to help businesses scale */}
                            Welcome!</h1>
                            <h1 className="mb-5 md:text-3xl text-2xl font-bold text-[#5c999e]">
                            I’m Gashaw Taye, a seasoned software engineer with over 10 years of experience. </h1>
                            
                            <div className="text-lg font-semibold tracking-tight mb-5 text-gray-500">
                            My expertise covers full-stack web development, mobile app creation, and project leadership, using modern technologies like React, Next.js, Python, React Native, and Laravel. 
                            Explore to learn more about my journey, skills, and the impactful projects I've worked on.                          
                                </div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <Link to="/contact" className="text-white bg-[#5c999e] hover:bg-[#92d4db] inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                                {/* <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Get Started
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link> */}
                                {/* <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-gray-500 hover:bg-gray-400 shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Learn More
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                </a> */}
                            </div>
                        </div>
                        {/* HERO IMAGE  */}
                       

                       


                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                        <DotLottieReact
      src="https://lottie.host/d6aa5845-56a4-47e0-86b1-593a4b25c259/vLaBjv3Oxg.json"
      loop
      autoplay
    />
                            {/* <img alt="Hero_img" className="rounded-t float-right duration-1000 w-half" src={heroImg} /> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;