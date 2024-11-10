import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-[#7cb9be] uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-[#7cb9be] mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-600 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-14 h-12 text-[#5c999e]">Registrar System for Amhara Police College</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">

                                <span className='font-bold'>Since 2013</span>, I have designed and implemented a registrar system that has been successfully operational for over a decade, transforming the way student data is managed and accessed, 
                                ensuring efficiency, accuracy, and ease of use.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-[#7cb9be] hover:bg-[#a1ebf2] inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-600 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-14 h-12 text-[#5c999e]">Examiners Placement Management System</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                <span className='font-bold'>Since 2015</span>, I have developed a comprehensive system to streamline examiner placement across various regions, including <span className='font-bold'>Debre Markos, Bahir Dar, Dessie, Gondar, Debre Birhan, and Woldia.</span> 
                                This system optimizes resource allocation while ensuring fairness, enhancing the efficiency and transparency of the placement process across multiple zones.</p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-[#7cb9be] hover:bg-[#aef8ff] inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                                
                                {/* <ul className="border-t border-gray-300 py-8 space-y-6">
                                    <li className="flex items-center space-x-2 px-8">
                                        <span className="bg-blue-600 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="text-gray-600 capitalize">Free Setup Guidance</span>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-600 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-14 h-12 text-[#5c999e]">Learning Management System (LMS) for Amhara Education Bureau</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                In 2022, I developed a scalable Learning Management System (LMS) using Laravel and Visual Studio Code. 
                                This platform supports <span className='font-bold'>online learning, exams, and resource sharing</span>, offering vital tools that empower both teachers and students in the digital education space.
</p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-[#7cb9be] hover:bg-[#aef8ff] inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-600 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-14 h-12 text-[#5c999e]">Student Information Management System (SIMS) at Debre Markos University</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Our event management system helps to manage different types of <span className='font-bold'>events , whether weddings, burials or any kind of event.</span> With an easily customizable menu, you get to define your user experience and make your event fully customizable and memorable.
                                    With use cases already recorded for quite a number of events, we can assure you of a stress-less event mangement platform.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-[#7cb9be] hover:bg-[#9ce5ec] inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;