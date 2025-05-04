import React from 'react'
import Massage from '../components/Massage'

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div id='contact' className='bg-gray-100 py-25'>
            <div className="w-[90%] m-auto">
                <h1 className="text-4xl text-center font-bold text-gray-600 mb-6">Get In Touch</h1>
                <p className="text-black text-center">Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-20 mt-20">
                    {/* Contact Information Card */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-lg h-auto bg-white rounded-2xl px-10 py-4">
                            <h1 className="text-3xl text-center font-bold text-gray-600 mb-6">Contact Information</h1>
                            <div className="flex items-center mt-8 gap-4">
                                <MdEmail className="text-2xl text-blue-600" />
                                <div>
                                    <p className="text-gray-800 font-semibold">Email</p>
                                    <p className="text-gray-600">shahriyor1247@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-8 gap-4">
                                <FaPhoneAlt className="text-2xl text-blue-600" />
                                <div>
                                    <p className="text-gray-800 font-semibold">Phone</p>
                                    <p className="text-gray-600">+998 88 001 03 00</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-8 gap-4">
                                <GrLocation className="text-2xl text-blue-600" />
                                <div>
                                    <p className="text-gray-800 font-semibold">Location</p>
                                    <p className="text-gray-600">Uzbekistan, Tashkent</p>
                                </div>
                            </div>
                            <p className="text-gray-800 mt-5 font-semibold">Social Profiles</p>
                            <div className="flex items-center gap-2 mt-5">
                                <a href="https://t.me/Shahriyor_0300">
                                    <FaTelegram className="text-2xl text-gray-800 cursor-pointer" />
                                </a>
                                <a href="https://github.com/shahriyortosh">
                                    <FaGithub className="text-2xl text-gray-800 cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Massage Component */}
                    <Massage />
                </div>
            </div>
        </div>
    )
}

export default Contact;
