import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
    const projects = [
        {
            title: 'aplle ',
            img: 'apple.jpg',
            link: 'https://apple-sable-six.vercel.app/',
            glink: 'https://github.com/shahriyortosh/Apple.git',
            animation: 'fade-left',
            descriptions: 'Html, Css, Tailwind, javascript, React.jsx'
        },
        {
            title: 'Artificial Intelligence 🤖',
            img: 'porject1.png',
            link: 'https://shahriyortoshmurodov.github.io/Artificial-Intelligence/',
            glink: 'git@github.com:shahriyortoshmurodov/Artificial-Intelligence.git',
            animation: 'fade-left',
            descriptions: 'Html, Css, javascript, '
        },
        {
            title: 'Currency converter 💸',
            img: 'proj2.png',
            link: 'https://shahriyortoshmurodov.github.io/currency-convertorbyshah/',
            glink: 'git@github.com:shahriyortoshmurodov/CURRENCY-CONVERTER.git',
            animation: 'fade-right',
            descriptions: 'Html, Css, javascript, '
        },
        {
            title: 'QRCODE Generator',
            img: 'proj3.png',
            link: 'https://shahriyortoshmurodov.github.io/R4DFSRFSFS/',
            glink: 'git@github.com:shahriyortoshmurodov/QR-code-generator1.git',
            animation: 'fade-down',
            descriptions: 'Html, Css, javascript, '
        },
        {
            title: 'Sabah company 💼',
            img: 'mysabah.png',
            link: 'https://shahriyortoshmurodov.github.io/Sabahuz/',
            glink: 'git@github.com:shahriyortoshmurodov/sabah.git',
            animation: 'fade-up',
            descriptions: 'Html, Css, javascript, '
        },
        {
            title: 'Text to voice 🔉',
            img: 'texttovoice.png',
            link: 'https://shahriyortoshmurodov.github.io/voiceeee/',
            glink: 'git@github.com:shahriyortoshmurodov/voiceeee.git',
            animation: 'fade-right',
            descriptions: 'Html, Css, javascript, '
        },
        {
            title: 'Translator App 🌐',
            img: 'translate.png',
            link: 'https://shahriyortoshmurodov.github.io/translate-app/',
            glink: 'git@github.com:shahriyortoshmurodov/translate-app.git',
            animation: 'fade-left',
            descriptions: 'Html, Css, javascript, '
        },


    ];

    return (
        <section id="projects" className="py-20 px-4 max-w-[1200px] mx-auto">
            <h2 className="text-center text-4xl font-bold text-[#1e69ff] mb-20">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        data-aos={project.animation}
                        className="relative rounded-lg  overflow-hidden shadow-xl hover:shadow-2xl"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-[250px] object-cover hover:scale-105   transition-transform duration-300"
                        />


                        <div className="p-4">
                            <h1 className="text-lg font-semibold mb-2">{project.title}</h1>
                            <p className='mb-5'> {project.descriptions}</p>
                            <div className="flex mt-10 gap-2">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-blue-600 hover:underline text-base transform transition duration-200 hover:-translate-y-1 decoration-0"
                                ><FaExternalLinkAlt className='text-[]' />

                                    Live Demo
                                </a>
                                <a
                                    href={project.glink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" text-gray-600 cursor-pointer flex items-center  gap-1  hover:underline text-base transform transition duration-200 hover:-translate-y-1"
                                >
                                    <img className='w-5 h-5' src="/git.webp" alt="" />
                                    code
                                </a>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default Portfolio;
