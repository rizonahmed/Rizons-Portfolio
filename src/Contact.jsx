import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="bg-black flex items-center justify-center pt-20">
            <section className="w-full xl:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-[25px] boxShadow p-[25px] rounded-xl">
                {/* Left Section - Contact Information */}
                <aside className="w-full bg-black flex flex-col   p-[20px] rounded-md">
                    <div className="mb-4"> {/* Reduced margin-bottom */}
                        <h1 className="text-[2rem] font-[600] leading-[35px] text-white">
                            Let’s Create Something Amazing Together!
                        </h1>
                        <p className="text-[0.9rem] mt-1 text-white pt-4 ">
                            Have an idea, a question, or just want to say hello? Feel free to reach out!
                            Use the details below or fill out the quick contact form. Let’s bring great ideas to life together!
                        </p>
                    </div>

                    <div className="flex flex-col gap-[10px] text-gray-300"> {/* Reduced gap */}
                        <p className="flex items-center gap-[8px]">
                            <MdOutlineCall />
                            <a href="tel:+88011105282768" className="hover:text-white hover:underline font-bold transition-colors">
                                +88011105282768
                            </a>
                        </p>
                        <p className="flex items-center break-all gap-[8px]">
                            <MdOutlineEmail />
                            <a href="mailto:rizonahmed0486@gmail.com" className="hover:text-white font-bold hover:underline transition-colors">
                                rizonahmed0486@gmail.com
                            </a>
                        </p>
                        <p className="flex items-center gap-[8px] font-semibold">
                            <IoLocationOutline />
                           Natiapara, Tangail, Dhaka
                        </p>
                    </div>
                </aside>


                {/* Right Section - Contact Form */}
                <form className="pt-[15px] w-full bg-gradient-to-r from-purple-950 via-black to-gray-900 p-6 rounded-md">
                    <div className="flex flex-col sm:flex-row items-center gap-[10px]">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-[1rem] text-gray-300">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                required
                                className="peer border-gray-600 border px-3 py-2 outline-none focus:border-[#3B9DF8] w-full text-white transition-colors duration-300 bg-black rounded-md"
                            />
                        </div>

                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="text-[1rem] text-gray-300">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                required
                                className="peer border-gray-600 border px-3 py-2 outline-none focus:border-[#3B9DF8] w-full text-white transition-colors duration-300 bg-black rounded-md"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-[15px] mt-6">
                        <div className="flex flex-col gap-[5px] w-full">
                            <label className="text-[1rem] text-gray-300">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="peer border-gray-600 border px-3 py-2 outline-none focus:border-[#3B9DF8] w-full text-white transition-colors duration-300 bg-black rounded-md"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-[5px] w-full mt-6">
                        <label className="text-[1rem] text-gray-300">Write Message</label>
                        <textarea
                            name="message"
                            required
                            className="peer min-h-[100px] border-gray-600 border px-3 py-2 resize-none outline-none w-full text-white transition-colors focus:border-[#3B9DF8] duration-300 bg-black rounded-md"
                        ></textarea>
                    </div>

                    <div className="w-full flex items-center sm:items-end justify-center sm:justify-end mt-5">
                        <button
                            type="submit"
                            className="dark:border-slate-700 py-2.5 px-6 bg-gray-800 border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-md text-[1rem] mt-[10px] w-max"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;
