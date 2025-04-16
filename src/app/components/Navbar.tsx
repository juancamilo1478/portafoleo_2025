'use client';
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@public/images/LogoJuan.png"
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-gray-600 dark:bg-gray-900 font-nunito-semi-bold shadow-md shadow-gray-200">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600 dark:text-teal-600" href="#">
                            <div className="flex justify-center items-center">
                            <Image 
                                src={Logo} 
                                alt="Logo Juan" 
                                className="h-8 w-auto"
                                priority     // Opcional: si quieres que la imagen se cargue con alta prioridad
                            />
                            <p className="text-2xl text-gray-300">JuanDev</p>
                            </div>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className="text-gray-300 transition hover:text-gray-300/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-300 transition hover:text-gray-300/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Careers
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-300 transition hover:text-gray-300/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        History
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-300 transition hover:text-gray-300/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Services
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-300 transition hover:text-gray-300/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Projects
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-300 transition hover:text-gray-300/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                  
                </div>
            </div>
          


        </header>
    );
};

export default Navbar;


