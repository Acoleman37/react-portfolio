import React, { useState } from "react";
import {validateEmail } from '../../utils/helpers';

export default function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
        console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
        } else {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
        }
        if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
        }
    };

    return (
        <section id="contact" className="bg-black">
            <div class="flex justify-center">
                <div class="flex px-5 py-5 flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-800 shadow-lg ">
                    <form name="contact" onSubmit={handleSubmit} className="lg:w-1/2 md:w-1/2 flex flex-col md:py-8 mt-8 md:mt-0 ">
                    <h2 className="text-white text-center sm:text-4xl text-3xl mb-1 font-medium title-font">
                    Contact Me
                    </h2>
                    <p className="leading-relaxed text-white text-center mb-5">
                    Feel free to reach out!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-blue-500">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-blue-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-blue-500">
                        Email
                        </label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-blue-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-blue-500">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-blue-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-black" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
                        Submit
                    </button>
                    </form>
                    <div className="bg-gray-800 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                            EMAIL
                            </h2>
                            <a href="contact" className="text-blue-500 leading-relaxed">Aleccoleman123@yahoo.com</a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                            PHONE
                            </h2>
                            <p className="leading-relaxed text-blue-500">661.480.4251</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
