import React from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import NEXT from '../images/clients/NEXT.jpeg';
import JIRA from '../images/clients/JIRA.jpeg';
import HTML from '../images/clients/HTML.png';
import CSS from '../images/clients/CSS.png';
import JS from '../images/clients/JS.png';
import REACT from '../images/clients/REACT.png';
import POSTMAN from '../images/clients/POSTMAN.png';
import VUE from '../images/clients/VUE.png';
import TAILWIND from '../images/clients/TAILWIND.png';


const clientImage = {
    height: 'auto',
    width: 'auto'
    // mixBlendMode: 'colorBurn'
}

const Clients = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true, // Slides automatically
        autoplaySpeed: 2000, // Slide every 2 seconds
      };
    return (
        
        <div className="mt-8 ">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-[#eda2bf] uppercase font-bold">My TECH STACK</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-[#eda2bf]'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-[#eda2bf]">Some of Tech stacks  .</h2>
                    </div>

                <div className="p-16  justify-center">
                <Slider {...settings}>
                    
                        <div style={clientImage} className= "mb-4 overflow-hidden flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={HTML} alt="client" />                           
                        </div>

                        <div style={clientImage} className="mb-4 overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={CSS} alt="client" />                            
                        </div> 

                        <div style={clientImage} className="mb-4 overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/4">
                            <img src={JS} alt="client" />                            
                        </div>

                        <div style={clientImage} className="mb-4 overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={REACT} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={NEXT} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={VUE} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={TAILWIND} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={POSTMAN} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-80 hover:opacity-100 w-1/3">
                            <img src={JIRA} alt="client" />                            
                        </div>

                        
                                           
                   
                    </Slider>
                </div>
            </section>
        </div>

    )
}

export default Clients;