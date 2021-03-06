import React from 'react';
import { CodeIcon } from "@heroicons/react/solid";

export default function Projects() {
  return (
    <section id="projects" className="text-blue-500 bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here are a few projects I have done. To see more checkout my github! 
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank" 
              rel="noreferrer noopener"
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={require(`../../assets/img/${project.image}`)}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
              <div>
                <a href={project.github} target="_blank" rel="noreferrer noopener">Project Code</a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export const projects = 

[
  {
    title: "Whats the weather?",
    subtitle: "JavaScript & server-side API's",
    description:
      "Your new favorite weather app!",
    image: "weather2.jpeg",
    link: "https://acoleman37.github.io/weather-application/",
    github: "https://github.com/Acoleman37/weather-application"
  },
  {
    title: "My Note",
    subtitle: "JavaScript, Node.js & Express",
    description:
      "Notes to help you stay on track! ",
    image: "note.jpeg",
    link: "https://mysterious-everglades-82667.herokuapp.com/",
    github: "https://github.com/Acoleman37/my-note"
  },
  {
    title: "Taskmaster",
    subtitle: "JavaScript",
    description:
      "Be more productive with taskmaster!",
    image: "task.jpeg",
    link: "https://acoleman37.github.io/taskmaster-pro/",
    github: "https://github.com/Acoleman37/taskmaster-pro"
  },
  {
    title: "Photo Port",
    subtitle: "React",
    description:
      "A react app built for a photographers portfolio",
    image: "photo.jpeg",
    link: "https://acoleman37.github.io/photo-port/",
    github: "https://github.com/Acoleman37/photo-port"
  },
  {
    title: "Finance Tracker",
    subtitle: "JavaScript, PWA, IDB",
    description:
      "The perfect finance caluclator to help keep track of your spending",
    image: "Finance.jpeg",
    link: "shrouded-falls-23256.herokuapp.com/",
    github: "https://github.com/Acoleman37/finance-tracker"
  },
  {
    title: "Password Generator",
    subtitle: "JavaScript",
    description:
      "A quick and easy way to get complex passwords",
    image: "Password.jpeg",
    link: "https://acoleman37.github.io/password-generator/",
    github: "https://github.com/Acoleman37/password-generator"
  },
];
