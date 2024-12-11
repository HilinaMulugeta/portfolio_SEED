import React from 'react';
import {Link} from 'react-router-dom';
const Cta = () => {
    return ( 
        <div className="w-full flex items-center justify-center text-white cta">
            <div className="mx-8 h-96 text-center lg:text-left py-16 px-12 flex lg:justify-center items-center">                    
                <div className="w-full flex flex-col lg:flex-row">
                    <div className="mb-4">
                        <p className='text-2xl md:text-4xl font-bold mb-4'>Contact Me</p>
                        <p className="text-lg md:text-2xl">I’m always interested in new projects, collaborations, and challenges in frontend website development. Feel free to reach out</p>
                    </div>
                    
                    <div className="w-60 items-center lg:w-70 pt-6 ml-9 lg:mx-8">
                        <a href="/#contact" className="bg-transparent border hover:bg-[#eda2bf] hover:border-[#b25d7e] text-white rounded-lg px-5 py-2 flex ">Send Message
                        <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cta;