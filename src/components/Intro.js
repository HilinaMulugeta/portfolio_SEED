import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
              

<div  id='about'>
               
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-14  p-2 md:p-12 h-full" data-aos="zoom-in">

                    <div id='about' className="flex flex-col lg:flex-row lg:mx-4 lg:my-28 py-18 justify-center text-center lg:text-left">
                          {/* HERO IMAGE  */}              
                          
                        <div className="space-x-0 md:space-x-2 lg:w-60% flex flex-col mr-4 lg:mr-8 lg:justify-center " data-aos="zoom-in" data-aos-delay="200">
                            
                            <h1 className="mb-5 md:text-3xl text-2xl font-bold text-[#eda2bf]">Educational Background</h1>
                            
                            <div className="text-lg  font-semibold pl-0 mb-5 text-gray-500">
                            With a Bachelor’s of Science in Electrical and Computer Engineering, I am highly interested in coding and starting my journey by starting online courses and practising by my own.Then I can achieved my first goal and hired as a frontend website developer and as Scrum master at Brana Software Solutions. Beside my coding journey I am also run agile methodology in the programming team, Facilitate meetings and solving different obstacles. I am also participate in the quality assurance team looking deeply in the UI/UX .(User Experience and User 
                            Interface) That improve organizational efficiency and user experiences.                
                                </div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <Link to="/contact" className="text-white bg-[#b54a73] hover:bg-[#f0dee5] inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                Get in touch
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                                
                            </div>
                        </div>
                        <div className="flex  mr-4 lg:mr-8 w-full lg:w-full" data-aos="fade-up" data-aos-delay="700">
                        <DotLottieReact
                         src="https://lottie.host/6eacb645-7b92-4db9-8fd7-74d782378061/iEHLmr4Luq.lottie"
                         loop
                         autoplay
                        />
                     </div>
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;