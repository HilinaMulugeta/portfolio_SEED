import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4 lg:my-28" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-[#eda2bf] uppercase font-bold">Products</h2>
               
                </div>

                <div className="px-5 lg:mx-8 lg:my-5" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">                            
                        <div className="bg-[#e2f6f8] transition-all ease-in-out duration-400  overflow-hidden text-gray-600 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-14 h-12 text-[#eda2bf]">My first portfolio</h4>
                                
                                 <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7200025271507296256?compact=1" height="480" width="440" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                                 </div>
                        </div>

                        <div className="bg-[#e2f6f8] transition-all ease-in-out duration-400 overflow-hidden text-gray-600 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-14 h-12 text-[#eda2bf]">My second portfolio</h4>
                                
                                <iframe src="https://drive.google.com/file/d/1C_uyH2ecm5lQ23V8-h7aoUaKsuqBouoL/preview" width="440" height="480" allow="autoplay"></iframe>
                               
                            </div>
                        </div>

                        <div className="bg-[#e2f6f8] transition-all ease-in-out duration-400  overflow-hidden text-gray-600  rounded-lg  p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-14 h-12 text-[#eda2bf]">A portfolio that I had done for my client.</h4>
                            <iframe src="https://drive.google.com/file/d/11IwwtvVM_U7LwPcv_tBZqDnRM0NTFlVk/preview" width="440" height="480" allow="autoplay"></iframe>  
                            </div>
                        </div>

                     
                            </div>
                        </div>

               
            
        </>
    )
}

export default Portfolio;