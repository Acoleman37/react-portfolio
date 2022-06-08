import React from 'react';
import Headshot from '../../assets/img/Headshot.jpeg'

export default function About() {
    return (
        <section id="about" className="bg-black">
            <div class="flex justify-center">
                <div class="flex px-5 py-5 flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-800 shadow-lg ">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48" src={Headshot} alt="headshot" />
                    <div class="p-6 flex flex-col justify-start">
                        <h5 class="text-green-400 text-center text-xl font-medium mb-2">About Me</h5>
                        <p class="text-white text-center text-base mb-4">
                        Hi, I'm Alec Coleman. I'm a full stack software engineer with fundamental knowledge of design, development and testing. I am seeking to utilize a broad educational background with excellent analytical, technical, and programming skills to thrive as a junior full stack software developer. I was born and raised in Southern California and previously worked in real estate in Los Angeles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


