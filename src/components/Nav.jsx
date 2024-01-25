import React from "react";

const Nav = () => {
    return (
        <>
            <div
                class=" bg-cyan-800 rounded-lg flex items-stretch justify-between gap-5 mx-12 max-md:max-w-full max-md:flex-wrap max-md:self-center max-md:mr-2.5 max-sm:flex max-sm:flex-row max-sm:overflow-auto max-sm:self-center"
            >
                <div
                    class="flex items-center justify-between gap-5 max-md:mx-auto max-sm:mx-auto"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a54542dde2c13577f9fd097e1d2d4864ed76c38b97548dfc7cb5b944071b78f1?apiKey=c2a9b141e86b4f86b11cebb14749f34c&"
                        class="aspect-[1.02] object-contain object-center w-[55px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div
                        class="text-teal-400 text-2xl italic font-bold tracking-tight my-auto max-md:text-center max-sm:mx-auto"
                    >
                        TRAVELS
                    </div>
                </div>
                <div
                    class=" flex items-center justify-between gap-5 my-auto max-md:max-w-full max-md:mx-auto max-sm:mx-auto"
                >
                    <div
                        class="text-teal-300 text-base font-medium tracking-tight  max-md:text-center max-sm:text-center max-sm:mx-auto"
                    >
                        Home
                    </div>
                    <div
                        class="text-black text-opacity-80 text-base font-medium tracking-tight  max-md:text-center"
                    >
                        About
                    </div>
                    <div
                        class="text-black text-opacity-80 text-base font-medium tracking-tight text-center max-md:text-center max-md:mx-auto max-sm:text-center"
                    >
                        Experiences
                    </div>
                    <div
                        class="flex items-center justify-between gap-5 m-auto  max-md:max-w-full max-md:flex-wrap max-md:m-auto"
                    >
                        <div
                            class="text-black text-opacity-80 text-base font-medium tracking-tight self-center grow whitespace-nowrap text-center my-auto max-md:text-center max-md:mx-auto"
                        >
                            Packages
                        </div>
                        <div
                            class="text-black text-opacity-80 text-base font-medium tracking-tight self-center text-center my-auto max-md:text-center max-md:mb-auto max-md:mx-auto"
                        >
                            Contact Us
                        </div>
                        <div
                            class="text-black text-opacity-80 text-base font-medium tracking-tight self-center my-auto max-md:text-center max-md:mx-auto"
                        >
                            Blog
                        </div>
                        <div
                            class="text-gray-900 text-sm font-semibold tracking-tight whitespace-nowrap justify-center items-stretch bg-cyan-300 self-stretch grow px-9 py-3.5 rounded-3xl max-md:m-auto max-md:pl-8 max-md:pr-8"
                        >
                            Book now
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;