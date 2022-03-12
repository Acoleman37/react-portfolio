import React from 'react';
import Headshot from '../../assets/img/Headshot.jpg'

export default function About() {
    return (
        <section id="about" className="bg-black">
            <div className="flex px-8 py-5">
                <div className="lg:max-w-lg lg:w-full md:w-full w-full ">
                    <img className="object-scale-down" alt="headshot" src={Headshot} />
                </div>
                <p className="text-white flex px-5">
                    Hello, My name is Alec Coleman. I'm a graduate from UCLA Software engineering bootcamp with fundamental knowledge of software design, development and testing. Seeking to utilize a broad educational background with excellent analytical, technical, and programming skills to thrive as a junior software developer. I was born and raised in Southern California and previously worked in real estate in Los Angeles and in the US Virgin Islands.
                </p>
            </div>
        </section>
    );
}

