import React, { useState } from "react";
import { CTA_LINK, NAV_LINKS } from "../util/routes";

export const Navbar = () => {

    //Toggle
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => { setIsOpen(!isOpen) }

    return (
        <nav className="pr-4 sm:pr-6 lg:pr-8 shadow-lg rounded">
            <div className="flex justify-between items-center">
                {/* Logo Empresa */}
                <div className="shrink-0 w-64">
                    <a href="#" className="text-transparent align-middle cursor-pointer">
                        <img src="/images/logoempresa.jpeg" alt="Logo" className="" />
                    </a>
                </div>

                {/* Boton de Menu Movil */}
                <button className="md:hidden p-2 text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400" onClick={toggleMenu} aria-label="Abrir Menu">
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 L8L8 6M6 6l12 12"></path>
                    </svg>
                ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            )}
                </button>
        
                {/* Menu Desktop */}
                <div className="hidden md:flex md:items-center md:space-x-4">
                        {NAV_LINKS.map(link => (
                            <a key={link.id} className="block text-white hover:text-yellow-300 px-3 py-2 text-2xl font-medium transition duration-150 cursor-pointer hover:border-b-[#ffff00] hover:border-b-[3px]">
                                {link.name}
                            </a>
                        ))}
                        <a href={CTA_LINK.path} className="block text-center px-4 py-2 mt-2 text-2xl font-bold rounded-full bg-[#ffff00] text-red-600 hover:bg-yellow-400 transition duration-150 shadow-md cursor-pointer">{CTA_LINK.name}</a>
                </div>

                {/* Menu Movil */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map(link => (
                            <a key={link.id} 
                            href={link.path}
                            onClick={toggleMenu}
                            className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150">
                                {link.name}
                            </a>
                        ))}
                        <a href={CTA_LINK.path} className="block w-full text-center px-4 py-2 mt-2 text-sm font-bold rounded-full bg-yellow-400 text-[#6A0DAD] hover:bg-yellow-500 transition duration-150 shadow-md">{CTA_LINK.name}</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;