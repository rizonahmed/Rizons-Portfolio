import { BorderBeam } from '@stianlarsen/border-beam';
import rizons from './assets/rizon-ahmed-removebg.png'
import Contact from './Contact';
import Footer from './Footer';
import Skill from './Skill';
import Works from './Works';
import { FaArrowRight } from 'react-icons/fa';
const About = () => {
  return (
    <div id='about'>
      <div className="flex items-center justify-center pt-14 pb-14 bg-black text-white mt-20 px-8">
        <div className="container mx-auto lg:w-10/12 xl:w-9/12 flex flex-col-reverse md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">

          {/* Text Section */}
          <div className="text-center md:text-left pl-4">
            <p className="text-lg mt-8">Hello there 👋</p>
            <h1 className="text-4xl  text-purple-500 lg:mt-4 ">I'm Rizon</h1>
            <p className="text-gray-300 text-left  mt-3 xl:w-11/12">
              A <span className="text-purple-500 font-semibold">FrontEnd Developer & MERN Stack Specialist.</span> I'm deeply passionate about creating innovative, responsive, and user-friendly web applications that captivate and engage users. I specialize in building sleek, interactive front-end designs with React, while leveraging the power of Node.js, Express.js, and MongoDB for scalable back-end solutions. My work focuses on crafting visually appealing, intuitive, and responsive experiences across devices. With a keen eye for detail, I aim to ensure that every application is not only functional but also eye-catching and impactful. Let’s collaborate to turn your ideas into seamless digital solutions!
            </p>

            <button className="mt-8 px-10 py-3 flex items-center gap-2   cursor-pointer hover:bg-purple-500 text-gray-300 border-b border-purple-800 hover:text-white   rounded-full transition">
              <a href="mailto:rizonahmed0486@gmail.com" target='_blank'> Hire Me</a> <FaArrowRight></FaArrowRight>
            </button>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="w-48 h-48 md:w-80 md:h-80 rounded-full  flex items-center justify-center overflow-hidden">
              <img src={rizons} alt="Rizon" className="w-full h-full object-cover" />
              <BorderBeam size={250} borderWidth={2} duration={10} colorFrom={'#BBDEFB'} colorTo={'#0000CD'} />

            </div>

          </div>

        </div>

      </div>

      <Skill></Skill>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default About;
