import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white  ">
      <div className="container mx-auto xl:w-9/12 flex justify-between items-center bg-gray-900 px-6 py-5 rounded-2xl backdrop-blur-2xl sticky  top-0">
        
        {/* Left Side - Menu Items (For Large Screens) */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <a href="#about" className="block px-4 py-2 rounded-md hover:bg-[#7A34F2] transition font-bold">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="block px-4 py-2 rounded-md hover:bg-[#7A34F2] transition font-bold">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="block px-4 py-2 rounded-md hover:bg-[#7A34F2] transition font-bold">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side - Resume Button (For All Screens) */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-gray-900 hover:bg-[#7A34F2] text-white font-bold py-2 px-4 rounded-md transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900 w-full text-center absolute top-16 left-0">
          <li className="p-4 border-b border-gray-700">
            <a href="#about" className="block px-4 py-2 rounded-md hover:bg-[#7A34F2] transition font-bold">
              About
            </a>
          </li>
          <li className="p-4 border-b border-gray-700">
            <a href="#skills" className="block px-4 py-2 rounded-md hover:bg-[#7A34F2] transition font-bold">
              Skills
            </a>
          </li>
          <li className="p-4">
            <a href="#contact" className="block px-4 py-2 rounded-md hover:bg-[#7A34F2] transition font-bold">
              Contact
            </a>
          </li>
          <li className="p-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="block bg-gray-900 hover:bg-[#7A34F2] text-white font-bold py-2 px-4 rounded-md transition"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
