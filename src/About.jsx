import { BorderBeam } from '@stianlarsen/border-beam';
import rizons from  './assets/rizon-ahmed-removebg.png'
import Contact from './Contact';
import Footer from './Footer';
import Skill from './Skill';
import Works from './Works';
const About = () => {
  return (
    <div id='about'>
      <div className="flex items-center justify-center pt-14 pb-14 bg-black text-white mt-20 px-8">
      <div className="container mx-auto lg:w-10/12 xl:w-9/12 flex flex-col-reverse md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
        
        {/* Text Section */}
        <div className="text-center md:text-left pl-4">
          <p className="text-lg mt-8">Hello there 👋</p>
          <h1 className="text-4xl font-bold text-purple-600 lg:mt-4 ">I'm Rizon</h1>
          <p className="text-gray-300 mt-3 lg:text-lg  font-semibold xl:w-11/12">
            A <span className="text-purple-500 font-semibold">FrontEnd Developer .</span>  I'm deeply passionate about crafting innovative and dynamic web experiences. From sleek, intuitive front-end designs to scalable, efficient back-end solutions, I specialize in building full-stack applications. My expertise includes technologies like JavaScript, React, Next.js, Node.js, Express.js, MongoDB, and more. 
            Let’s collaborate and turn your ideas into exceptional digital solutions that make an impact!
          </p>
          <button className="mt-8 px-10 py-3  bg-white cursor-pointer hover:bg-purple-500 text-purple-600 hover:text-white font-bold rounded-full transition">
           <a href="#contact"> Hire Me</a>
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="w-48 h-48 md:w-80 md:h-80 rounded-full  flex items-center justify-center overflow-hidden">
            <img src={rizons} alt="Rizon" className="w-full h-full object-cover" />
            <BorderBeam size={250} borderWidth={2}  duration={10} colorFrom={'#BBDEFB'} colorTo={'#0000CD'} />

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
