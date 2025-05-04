import React from 'react';
import { IoCheckmarkDone } from "react-icons/io5";

const TechnicalSkills = () => {
  return (
    <div id='skills' className="w-full  bg-gray-100 mx-auto p-6 bg-whit ">
      <h1 className="text-4xl mt-20 text-center font-bold text-gray-600 mb-6">Technical Skills</h1>
      <p className="text-black text-center mb-30">A comprehensive set of technologies and tools I specialize in.</p>

      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   justify-between">

        <div className=" p-4 bg-white max-h-70 cursor-pointer shadow-xl inline-block transform transition duration-200 hover:-translate-y-1 max-w-100 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700  mb-3 border-b pb-2">Frontend Basics</h2>
          <ul className="space-y-2 gap-3">
            {['HTML5', 'CSS3', 'JavaScript', 'Responsive Design' , 'Git', 'GitHub'].map((skill) => (
              <li key={skill} className="flex items-center">
                <IoCheckmarkDone className='text-green-600 font-bold' />
                <span className="text-black">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* UI Frameworks */}
        <div className=" p-4 bg-white max-h-70 cursor-pointer shadow-xl inline-block transform transition duration-200 hover:-translate-y-1 max-w-100 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700  mb-3 border-b pb-2">UI Frameworks</h2>
          <ul className="space-y-2 gap-3">
            {['React.jsx', 'Bootstrap', 'Tailwind CSS', 'SCSS/Sass'].map((skill) => (
              <li key={skill} className="flex items-center">
                <IoCheckmarkDone className='text-green-600 font-bold' />
                <span className="text-black">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* State Management */}
        <div className=" p-4 bg-white max-h-70 cursor-pointer shadow-xl inline-block transform transition duration-200 hover:-translate-y-1 max-w-100 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700  mb-3 border-b pb-2">State Management</h2>
          <ul className="space-y-2 gap-3">
            {['useContext	', 'useState'].map((skill) => (
              <li key={skill} className="flex items-center">
                <IoCheckmarkDone className='text-green-600 font-bold' />
                <span className="text-black">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* UI Component Libraries */}
        <div className=" p-4 bg-white max-h-70 cursor-pointer shadow-xl inline-block transform transition duration-200 hover:-translate-y-1 max-w-100 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700  mb-3 border-b pb-2">UI Component Libraries</h2>
          <ul className="space-y-2 gap-3">
            {['Headless UI', 'Tailwind UI '].map((skill) => (
              <li key={skill} className="flex items-center">
                <IoCheckmarkDone className='text-green-600 font-bold' />
                <span className="text-black">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Build Tools */}
        <div className=" p-4 bg-white max-h-70 cursor-pointer shadow-xl inline-block transform transition duration-200 hover:-translate-y-1 max-w-100 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700  mb-3 border-b pb-2">Build Tools</h2>
          <ul className="space-y-2 gap-3">
            {['Vite.js', 'npm'].map((skill) => (
              <li key={skill} className="flex items-center">
                <IoCheckmarkDone className='text-green-600 font-bold' />
                <span className="text-black">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Skills */}
        <div className=" p-4 bg-white max-h-70 cursor-pointer shadow-xl inline-block transform transition duration-200 hover:-translate-y-1 max-w-100 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700  mb-3 border-b pb-2">Other Skills</h2>
          <ul className="space-y-2 gap-3">
            {['Figma','Canva','Photopea',].map((skill) => (
              <li key={skill} className="flex items-center">
                <IoCheckmarkDone className='text-green-600 font-bold' />
                <span className="text-black">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;