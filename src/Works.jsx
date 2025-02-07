import marage from './assets/marage.png';
import marathon from './assets/marathon.png';
import hippie from './assets/hippie.png';
import funding from './assets/funding.png';

const Works = () => {
    const projects = [
        {
            title: "Hippie Token",
            image: hippie,
            link: "https://hippietokens.netlify.app/",
            date: "February 2025",
        },
        {
            title: "Find Partners",
            image: marage,
            link: "https://find-partners-f5bda.web.app/",
            date: "January 2025",
        },
        {
            title: "Marathon Management",
            image: marathon,
            link: "https://marathon-management-f25a3.web.app/",
            date: "December 2024",
        },
        {
            title: "Funding Application",
            image: funding,
            link: "https://funding-application-e2023.web.app/",
            date: "December 2024",
        },
    ];

    return (
        <div id='work' className="bg-black text-white py-14 px-6 flex flex-col items-center">
            <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wide">
                My Works
            </h2>

            <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 border-l-4 xl:border-l-0 xl:border-gray-600 pl-6 xl:pl-0 items-center justify-center">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className={`relative pb-10 xl:pb-16 flex flex-col lg:flex-row xl:flex-row items-center justify-center xl:gap-6 ${
                            index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
                        }`}
                    >
                        <div className="w-10 h-10 bg-purple-950 rounded-full border-2 border-white"></div>

                        <div className="bg-gray-900/80 p-6 rounded-lg shadow-xl backdrop-blur-md border border-gray-700 transform hover:-translate-y-2 transition-all duration-300 w-full max-w-md text-center">
                            <h3 className="text-2xl font-semibold mb-2 text-purple-500 hover:text-white transition">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-4 italic">{project.date}</p>

                            <div className="relative group">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-all"></div>
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block   px-6 py-2 rounded-lg font-semibold  bg-white cursor-pointer hover:bg-purple-500 text-purple-600 hover:text-white font-boldtransition"
                            >
                                View Site →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
