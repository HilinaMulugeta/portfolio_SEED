import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            {/* <img alt="card img" className="rounded-t float-right" src={img} /> */}
                            <DotLottieReact
                           

      src="https://lottie.host/f58d863b-9a37-47c4-9a5c-ee3f5791ddf3/BFEY6HlARd.json"
      loop
      autoplay
    />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h4 className="text-3xl  text-[#5c999e] font-bold">
                            With a Bachelor’s in Computer Science and a Master’s in Computer Engineering, my career is built on creating reliable software solutions and leading complex projects.</h4>
                            <div>
                                <p className='my-3 text-lg text-gray-400 font-semibold'>Starting as a developer and growing into a project leader, I’ve led teams, designed systems, and implemented solutions that improve organizational efficiency and user experiences.</p>
                            </div>
                            
                            
                            <Link to="/contact" className="text-white bg-[#5c999e] hover:bg-[#8ed0d5] inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Get in touch
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;