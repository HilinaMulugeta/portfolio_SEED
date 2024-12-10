import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-[#eda2bf]" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-[#eda2bf]" smooth to="/#services">
                Certification
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-[#eda2bf]" to="/#portfolio">
                Portfolio
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-[#eda2bf]" to="/#contact">
                Contact Us
            </HashLink>
            {/* <HashLink className="text-white bg-[#eda2bf] hover:bg-[#9be6ec] inline-grid items-center  w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Demo our products
            </HashLink> */}
        </>
    )
}

export default NavLinks;
