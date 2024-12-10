import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b">

                    {/* Top area: Blocks */}
                    {/* <div className="grid sm:grid-cols-6 gap-3 py-8 md:py-12 border-t border-gray-200 lg:mx-11"> */}

                    {/* 1st block */}
                    {/* <div className="col-span-3 lg:col-span-4">
                        <div className="box-border border-b-2 border-[#eda2bf] p-4 bg-gray-200 text-gray-600 text-center rounded-sm xl:w-40 mx-auto">
                            <h3 className="font-bold text-2xl mb-4 text-[#eda2bf]">Hilina Mulugeta</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <h5 className='font-semibold'>Frontend Developer and SCRUM Master</h5>
                                <p>Addis Ababa, Ethiopia</p>
                            </div>
                        </div>
                    </div> */}

                    {/* 2nd block */}
                    {/* <div className="col-span-3 sm:items-center md:col-span-4 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#eda2bf] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="#about" className="lg:text-[#eda2bf] md:text-[#eda2bf] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#services" className="lg:text-[#eda2bf] md:text-[#eda2bf] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#contact" className="lg:text-[#eda2bf] md:text-[#eda2bf] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                        </li>                            
                        </ul>
                    </div> */}

                    
                    {/* 4th block */}
                    

                   

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-[#b54a73] font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-600"
                    >
                       Hilina Mulugeta
                    </HashLink>. All rights reserved.
                    </div>
                    <div className="col-span-3 text-center mx-auto lg:col-span-3 font-bold uppercase lg:text-[#eda2bf] md:text-[#eda2bf]">
                        

                        
                        <div className="mx-auto text-center mt-2">
                            <ul className="flex justify-center mb-4 md:mb-0">
                                <li>
                                <a
                          href="https://github.com/HilinaMulugeta"
                          className="flex justify-center items-center text-[#eda2bf] hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                          aria-label="Github"
                        >
                          <svg
                            className="w-10 h-10"
                            viewBox="0 0 27 27"
                            fill="#b54a73"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              id="body"
                              d="M12.5,13.4v4.3c2.5,0.75,5.05,0.75,7.5,0v-4.3c-0.04-1.11-0.49-2.16-1.27-2.96c3-0.34,5.95-2.35,5.95-6.41c0.09-1.39-0.33-2.77-1.18-3.87c0.41-1.16,0.37-2.44-0.13-3.57c0,0-1.12-0.37-3.75,1.38c-2.21-0.61-4.53-0.61-6.74,0c-2.63-1.75-3.74-1.38-3.74-1.38c-0.5,1.13-0.54,2.41-0.13,3.57c-0.85,1.11-1.27,2.48-1.19,3.87c0.02,3.38,2.64,6.18,6.02,6.41c-0.5,0.47-0.81,1.11-0.86,1.8"
                            />
                            <path
                              id="arm"
                              d="M12.52,10.34c-1.39,0.78-3.15,0.28-3.93-1.12c-0.43-0.77-1.2-1.28-2.07-1.38c-1.12,0-0.46,0.64,0,0.94c0.6,0.51,1.08,1.15,1.38,1.88c0.29,0.74,0.77,2.41,4.15,1.78"
                            />
                           
                          </svg>
                        </a>
                        
                                </li>
                                <li className="ml-4">
                                    <a href="https://www.linkedin.com/in/hilinamulugeta" 
                                          className="flex justify-center items-center text-[#b54a73] hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
                                          aria-label="LinkedIn">
                                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#b54a73">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                    </a>
                                </li>
                                {/* Email Icon  */}
                                <li className="ml-4">
                                    <a href="mailto:hilinamulugeta1557@gmail.com" 
                                       className="flex justify-center items-center text-[#b54a73] hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
                                       aria-label="Email">
                                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="#b54a73" viewBox="0 0 24 24">
                                            <path d="M12 13.293l-11-8V20h22V5.293l-11 8zm11-10H1a1 1 0 0 0-1 1v1.293l12 8.727 12-8.727V4a1 1 0 0 0-1-1z"></path>
                                        </svg>
                                    </a>
                                </li>
                                 {/* Phone Icon  */}
                                <li className="ml-4">
                                    <a href="tel:+251980335070" 
                                       className="flex justify-center items-center text-[#b54a73] hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" 
                                       aria-label="Phone">
                                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="#b54a73" viewBox="0 0 24 24">
                                            <path d="M22.49 17.37l-4.6-2a1 1 0 0 0-1.07.21l-2.2 2.21a15.09 15.09 0 0 1-7.29-7.29L9.54 7.2a1 1 0 0 0 .21-1.07l-2-4.6A1.1 1.1 0 0 0 6.83 1H2a1 1 0 0 0-1 1C1 12.42 9.58 21 21 21a1 1 0 0 0 1-1v-4.84a1.1 1.1 0 0 0-.51-.79z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
                </div>


                {/* <a href="https://www.github.com/HilinaMulugeta" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-[#eda2bf]  w-8  mx-1 text-center pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>                       
                        </a>
                        <a href="https://www.linkedin.com/in/hilinamulugeta" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-[#eda2bf]  w-8  mx-1 text-center pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                        </a>
                        <a href="mailto:hilinamulugeta1557@gmail.com" target="_blank" rel="noreferrer" className="rounded-sm flex justify-center h-8 text-[#eda2bf]  w-8  mx-1 text-center pt-1">
                        <svg viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">	<path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"/>
                        </svg>                        
                        </a> */}

                </div>
                </div>          

{/* </div> */}
            </footer>
        </>
    )
}
export default Footer;
