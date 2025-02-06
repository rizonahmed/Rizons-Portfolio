import React from 'react';

const Skill = () => {
    return (
        <div>
            <div className="flex items-center justify-center pt-14 pb-14 bg-black text-white px-8 text-center">
                <div>
                    <h1 className="text-4xl font-semibold mb-4">Skills That Define Me</h1>
                    <p className=" font-semibold text-gray-300 text-base">
                        A showcase of my expertise and tools of the trade, reflecting my journey in mastering <br /> technology and design. These skills drive my creativity and innovation in every project.
                    </p>
                </div>
            </div>

            <div className="pt-14 pb-14 bg-black text-white px-8 text-center">
                <div className="xl:w-9/12 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 gap-y-16 place-items-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                        alt="JS Icon"
                        className="h-20 w-20 object-contain p-4 bg-black border border-yellow-500 transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                    />
                    <img
                        src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
                        alt="React Icon"
                        className="h-20 w-20 object-contain p-4 bg-black border border-blue-400 transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                    />
                    <img
                        src="https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"
                        alt="MongoDB Icon"
                        className="h-20 w-20 object-contain p-4 bg-black border border-green-500 transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                    />
                    <img
                        src="https://w7.pngwing.com/pngs/584/376/png-transparent-html-logo-world-wide-web-consortium-font-family-html-tag-sale-tag-text-happy-birthday-vector-images-thumbnail.png"
                        alt="HTML Icon"
                        className="h-20 w-20 object-contain p-4 bg-black border border-orange-500 transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                    />
                    <img
                        src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-css-file-document-icon-png-image_927823.jpg"
                        alt="CSS Icon"
                        className="h-20 w-20 object-contain p-4 bg-black border border-blue-500 transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                    />
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgfZ2sG6xWL_Ag0kASTIytHshA2F419syVg&s"
                        alt="NodeJS Icon"
                        className="h-20 w-20 object-contain p-4 bg-black border border-green-600 transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                    />
                    <img
                        src="https://www.loopple.com/img/tailwind-logo.png"
                        alt="Tailwind Icon"
                        className="h-20 w-20 object-contain p-4 bg-black border border-blue-600 transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                    />
                    <img
                        src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png"
                        alt="Firebase Icon"
                        className="h-20 w-20 object-contain p-4 bg-black border border-yellow-400 transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                    />
                    <img
                        src="https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp"
                        alt="Express Icon"
                        className="h-20 w-20 object-contain p-4 bg-black border border-gray-500 transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                    />
                    <img
                        src="https://img.icons8.com/p1em/512/FFFFFF/git.png"
                        alt="Git Icon"
                        className="h-20 w-20 object-contain p-4 bg-black border border-red-500  transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                    />
                    <img
                        src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png"
                        alt="GitHub Icon"
                        className="h-20 w-20 object-contain p-4 bg-black border border-gray-700 transform transition duration-2000 ease-in-out hover:scale-120 hover:shadow-lg hover:shadow-white"
                    />
                </div>
            </div>

        </div>
    );
};

export default Skill;
