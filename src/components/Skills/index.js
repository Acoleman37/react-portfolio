import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="bg-black">
        <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
                <ChipIcon className="w-10 text-blue-500 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                    Skills &amp; Technologies
                </h1>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">
                        <p>JavaScript</p>
                        </span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">
                        <p>Express</p>
                        </span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">
                        <p>Node</p>
                        </span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">
                        <p>Sql / NoSql</p>
                        </span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">
                        <p>React</p>
                        </span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">
                        <p>MERN</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}