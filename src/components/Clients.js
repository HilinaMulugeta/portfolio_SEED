import React from 'react';
import AEB from '../images/clients/AEB.jpeg';
import ARPC from '../images/clients/ARPC.jpeg';
import BDU from '../images/clients/BDU.jpeg';
import DMU from '../images/clients/DMU.jpeg';
import GU from '../images/clients/GU.jpeg';
import WOLDIYAU from '../images/clients/WOLDIYAU.jpeg';
import WU from '../images/clients/WU.jpeg';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
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

                <div className="p-16 slide-in-right" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-4 lg:grid-cols-4">
                        <div style={clientImage} className= "mb-4 overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                            <img src={AEB} alt="client" />                           
                        </div>

                        <div style={clientImage} className="mb-4 overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={ARPC} alt="client" />                            
                        </div> 

                        <div style={clientImage} className="mb-4 overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={BDU} alt="client" />                            
                        </div>

                        <div style={clientImage} className="mb-4 overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={DMU} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={GU} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={WOLDIYAU} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={WU} alt="client" />                            
                        </div>

                                           
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;