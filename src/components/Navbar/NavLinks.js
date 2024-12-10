import React from 'react';
import { HashLink } from 'react-router-hash-link';
import ThemeToggler from "./ThemeToggler";

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
            <ThemeToggler />
        </>
    )
}

export default NavLinks;
