import React from "react";

export default function ContactForm() {

    return (
        <section id="contact" className="bg-black">
            <div className="flex justify-center text">
                <div className="flex px-10 py-10 flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-800 shadow-lg ">
                    <div className="text-ce">
                        <h1 className="text-center text-white">CONTACT ME</h1>
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                        EMAIL
                            <p className="text-blue-500 leading-relaxed">Acoleman37@gmail.com</p>
                        </h2>
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                        PHONE
                            <p className="leading-relaxed text-blue-500">661.480.4251</p>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
