import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AEB from '../images/clients/AEB.jpeg';
import ARPC from '../images/clients/ARPC.jpeg';
import DMU from '../images/clients/DMU.jpeg';
import Sepastopol from '../images/clients/Sepastopol.jpg';
import SC from '../images/clients/SC.jpeg';
import BC from '../images/clients/BC.jpeg';
import COC from '../images/clients/COC.jpeg';

const clientImage = {
    height: 'auto',
    width: 'auto'
    // mixBlendMode: 'colorBurn'
}

const Clients = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true, // Slides automatically
        autoplaySpeed: 2000, // Slide every 2 seconds
      };
    return (
        
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-[#7cb9be] uppercase font-bold">My Clients</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-[#7cb9be]'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-[#7cb9be]">Some of my clients.</h2>
                    </div>

                <div className="p-16 lg:bg-white justify-center">
                <Slider {...settings}>
                    
                        <div style={clientImage} className= "mb-4 overflow-hidden flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={AEB} alt="client" />                           
                        </div>

                        <div style={clientImage} className="mb-4 overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={ARPC} alt="client" />                            
                        </div> 

                        <div style={clientImage} className="mb-4 overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/4">
                            <img src={Sepastopol} alt="client" />                            
                        </div>

                        <div style={clientImage} className="mb-4 overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={DMU} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={COC} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={SC} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={BC} alt="client" />                            
                        </div>

                        {/* <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={WOLDIYAU} alt="client" />                            
                        </div> */}

                        
                                           
                   
                    </Slider>
                </div>
            </section>
        </div>

    )
}

export default Clients;