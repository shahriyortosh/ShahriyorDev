import React from 'react'
const Nav = () => {
    return (
        <nav className='fixed bg-white  px-[5%] py-4 shadow-lg w-full z-10'>

            <div className="flex items-center justify-between ">
                <h1 className='text-3xl font-semibold text-[#1e69ff]'>ShahriyorDev</h1>
                <div className="flex items-center justify-between gap-10">
                    <ul className="hidden md:flex items-center justify-between gap-10">
                        <li><a href="#home" className="text-gray-600 hover:text-[#1e69ff] text-xl inline-block transform transition duration-200 hover:-translate-y-1">Home</a></li>
                        <li><a href="#skills" className="text-gray-600 hover:text-[#1e69ff] text-xl inline-block transform transition duration-200 hover:-translate-y-1">Skills</a></li>
                        <li><a href="#projects" className="text-gray-600 hover:text-[#1e69ff] text-xl inline-block transform transition duration-200 hover:-translate-y-1">Projects</a></li>
                        <li><a href="#contact" className="text-gray-600 hover:text-[#1e69ff] text-xl inline-block transform transition duration-200 hover:-translate-y-1">Contact</a></li>
                    </ul>
                   
                </div>

            </div>

        </nav>
    )
}

export default Nav