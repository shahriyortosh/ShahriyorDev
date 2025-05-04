import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";

const Home = () => {

  return (
    <div id='home' className='w-[90%] pb-40 pt-70 m-auto'>
      <h1 className='text-6xl text-center text-[#1e69ff] font-semibold sm:text-4xl'>
        Shahriyor <span className='text-gray-600'>Toshmurodov</span>
      </h1>
      <p className='text-4xl text-center text-gray-800  font-light mt-4'>Frontend Developer</p>
      <p className='text-xl w-[50%] block m-auto text-center text-gray-700  font-light mt-4'> Creating beautiful, responsive, and user-friendly web experiences with modern frontend technologies.</p>
      <div className="flex justify-center gap-5 mt-20">
        <button className='px-4 py-3 text-white rounded-xl bg-[#1e69ff] cursor-pointer animate-[wiggle_0.1s_ease-in-out_infinite]' ><a href="#projects">Explore My Work</a></button>
        <button className='rounded-xl px-4 py-3 border-2 text-[#1e69ff] cursor-pointer  ' ><a href="#contact">Contact Me</a></button>
      </div>
      <a href="#skills">

        <FaAnglesDown href='#skills' className='block m-auto mt-20 text-2xl cursor-pointer text-gray-700 animate-[updown_0.8s_ease-in-out_infinite]' />


      </a>
      <style>
        {`
                                                   @keyframes updown {
                                                     0%, 100% {
                                                       transform: translateY(0);
                                                     }
                                                     50% {
                                                       transform: translateY(8px);
                                                     }
                                                   }
                                                 `}
      </style>
    </div>
  )
}

export default Home