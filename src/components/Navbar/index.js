import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
    return (
        <header className="bg-black md:sticky top-0 z-10">
            <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href="#about" className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0">Alec Coleman</a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white flex flex-wrap items-center text-base text-white">
                    <a href="#projects" className="mr-5 hover:text-green-500">Past Work</a>
                    <a href="#skills" className="mr-5 hover:text-green-500">Skills</a>
                    <a href="https://www.linkedin.com/in/aleccoleman" target="_blank" rel="noreferrer noopener" className="mr-5 hover:text-green-500">LinkedIn</a>
                    <a href="#resume" className="mr-5 hover:text-green-500">Resume</a>
                </nav>
                <a href="#contact" className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-green-600 text-white rounded text-base mt-4 md:mt-0">Hire Me<ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}