import React from "react";

const Nav = () => {
    const [show, handleShow] = React.useState(false);
    return (
        <>


            <nav className="bg-cyan-700 px-4 p-5 flex flex-wrap justify-between items-center">
                <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-white mr-2"
                    >
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                        <line x1="4" x2="4" y1="22" y2="15"></line>
                    </svg>
                    <span className="font-bold text-3xl text-white">TRAVELS</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <button className="text-white font-bold uppercase text-xl hover:text-cyan-900   " href="#">
                        Home
                    </button>
                    <button className="text-white font-bold uppercase text-xl hover:text-cyan-900   " href="#">
                        About
                    </button>
                    <button className="text-white font-bold uppercase text-xl hover:text-cyan-900   " href="#">
                        Experiences
                    </button>
                    <button className="text-white font-bold uppercase text-xl hover:text-cyan-900   " href="#">
                        Packages
                    </button>
                    <button className="text-white font-bold uppercase text-xl hover:text-cyan-900   " href="#">
                        Contact Us
                    </button>
                    <button className="text-white font-bold uppercase text-xl hover:text-cyan-900   " href="#">
                        Blog
                    </button>
                </div>

                <div className="md:hidden flex flex-grow justify-end"

                >
                    <button className="text-white font-bold uppercase text-xl hover:text-cyan-900    focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className=""
                            onClick={() => handleShow(!show)}
                        >
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </nav>
                {show &&
                    <div className="flex flex-col  items-center md:hidden">
                        <button className=" py hover:text-cyan-900  w-full p-1 border text-cyan-900 font-bold uppercase    " href="#">
                            Home
                        </button>
                        <button className=" hover:text-cyan-900  w-full p-1 border text-cyan-900 font-bold uppercase   " href="#">
                            About
                        </button>
                        <button className=" hover:text-cyan-900  w-full p-1 border text-cyan-900 font-bold uppercase   " href="#">
                            Experiences
                        </button>
                        <button className=" hover:text-cyan-900  w-full p-1 border text-cyan-900 font-bold uppercase   " href="#">
                            Packages
                        </button>
                        <button className=" hover:text-cyan-900  w-full p-1 border text-cyan-900 font-bold uppercase   " href="#">
                            Contact Us
                        </button>
                        <button className=" hover:text-cyan-900  w-full p-1 border text-cyan-900 font-bold uppercase   " href="#">
                            Blog
                        </button>
                    </div>
                }

        </>
    );
};

export default Nav;