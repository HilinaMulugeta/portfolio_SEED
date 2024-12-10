import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import img from '../images/MesratGigEconomy.jpeg'; 
import img2 from '../images/ReactJs.jpeg';
import img3 from '../images/PostmanApI.jpeg';
// import img4 from '../images/consultation.svg';
import database from '../images/database.svg';
import placehold from '../images/PostmanApI.jpeg';
const Services = () => {

    return (
       
        <div id="services" className=" py-12 lg:my-28" >
            <section data-aos="zoom-in-down">
                    {/* <div className="my-4 py-4 ">
                        <h2 className="my-2 text-center text-3xl text-[#eda2bf] uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-[#eda2bf]'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-[#eda2bf]">From web applications to cross-platform mobile apps, I bring a comprehensive skill set to each project:
                        </h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Frontend Development</h2>
                                    <p className="text-md font-medium">
                                    Building dynamic user interfaces with React and Next.js for seamless, interactive experiences.    
                                    </p>                                
                                                                   
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Backend Services</h2>
                                    <p className="text-md font-medium">
                                    Utilizing Python and Flask to handle server-side logic and create efficient, secure APIs.                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Mobile app Development</h2>
                                    <p className="text-md font-medium">
                                    Proficient in React Native for creating cross-platform applications that perform well on both iOS and Android.                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 flex flex-col lg:justify-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={database}/>
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Database Management</h2>
                                    <p className="text-md font-medium">
                                    Skilled in MySQL and SQLite for managing and organizing data effectively.                                    </p>
                                </div>
                            </div>     

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Project Leadership</h2>
                                    <p className="text-md font-medium">
                                    Over 7 years in project management, with experience leading and delivering large-scale projects across various domains.                           
                                    </p>                                
                                    </div>                               
                            </div>                    
                        </div>
                    </div> */}
            </section>
<div>
            <section className='bg-[#ffeff5] dark:bg-gray-800 text-center lg:mt-12 lg:py-10'>
                <div className="m-auto max-w-xl p-2 md:p-12 h-5/6 lg:mt-15 lg:pt-25">
                <h1 className="text-[#eda2bf] lg:mt-15 font-black text-4xl lg:text-center"> Certifications & Training </h1>
                <h2 className='text-gray-600 lg:mb-15 font-semibold text-2xl lg:text-center'> I hold several certifications and have undergone online training to strengthen my technical skills, including</h2>
                <Swiper
         modules={[Autoplay, EffectFade]} // Include Autoplay and Fade effect modules
        //  spaceBetween={30} // Space between slides
        //  slidesPerView={2} // Only show one slide at a time
         autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay every 2 seconds
         effect="fade" // Apply the fade transition effect
         fadeEffect={{ crossFade: true }} // Smooth cross-fade transition
         speed={1500} // Speed of the transition (1 second)
      >
                    <div className="flex flex-col-reverse lg:flex-row py-8 lg:justify-center   lg:pt-22" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col ">
                        <SwiperSlide>
                            <div className='text-[#eda2bf] my-4r'>
                                <img alt="card img" className="lg:w-full w-Full m-10 rounded-t group-hover:scale-[1.15] transition duration-1500 ease-in-out" src={img} />
                            </div>
                            <h3 className="text-3xl  text-[#eda2bf] font-black"> Mesrat Gig Economy </h3>                            
                            </SwiperSlide>
                        </div>
                       
                       
                        <div className="lg:w-1/2 flex flex-col ">
                        <SwiperSlide>
                            <div className='text-[#eda2bf] my-4r'>
                                <img alt="card img" className="lg:w-full w-full m-10 rounded-t group-hover:scale-[1.15] transition duration-1500 ease-in-out" src={img2} />
                            </div>
                            <h3 className="text-3xl  text-[#eda2bf] font-black "><a href="https://verify.mygreatlearning.com/verify/EQIUZNRC" >👉Great Learning ReactJs</a></h3>                            
                            </SwiperSlide>
                        </div>

                        <div className="lg:w-1/2 flex flex-col ">
                        <SwiperSlide>
                            <div className='text-[#eda2bf] my-4r'>
                                <img alt="card img" className="lg:w-full lg:h-1/3 w-1/2 m-10 rounded-t group-hover:scale-[1.15] transition duration-1500 ease-in-out" src={img3} />
                            </div>
                            <h3 className="text-xl  text-[#eda2bf] font-black"> <a href="https://api.badgr.io/public/assertions/qxRAxpm2RnKJybntSsvvOQ?identity__email=hilinamulugeta1557@gmail.com" >👉Postman API</a></h3>                            
                            </SwiperSlide>
                        </div>

                        {/* <div className="lg:w-1/2 flex flex-col lg:mx-4">
                        <SwiperSlide>
                            <div className='text-[#eda2bf] my-4'>
                                <img alt="card img" className="lg:w-1/2 w-full rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                            </div>
                            <h3 className="text-3xl  text-[#eda2bf] font-black">Recognition for the Amhara Region Education LMS Workshops organized by the Ministry of Education</h3>                           
                            </SwiperSlide>
                        </div>

                        <div className="lg:w-1/2 flex flex-col lg:mx-4">
                        <SwiperSlide>
                            <div className='text-[#eda2bf] my-4 '>
                                <img alt="card img" className="lg:1/2 w-full rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                            </div>
                            <h3 className="text-3xl  text-[#eda2bf] font-black">MIT to stay current with industry standards and innovations</h3>                            
                            </SwiperSlide>
                        </div> */}
                    </div>
                    </Swiper>
                </div>
            </section>
            </div>
            </div>
            
    );
    
}

export default Services;