import React from "react";

const Hero = () => {
    return (
        <>
            <div
                class="self-stretch flex w-full h-screen flex-col mt-7 px-20 py-16 items-start max-md:max-w-full max-md:self-stretch max-md:px-5 max-sm:pt-11"
            >
            <div className="flex items-center justify-center">

                <div>

              
                <div
                    class="text-indigo-950 text-6xl font-bold leading-[61px] tracking-[2.5px] max-w-[635px] ml-3.5  max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10"
                >
                    Embark on Your Dream Adventure!
                </div>
                <div
                    class="text-neutral-50 text-xl font-medium leading-10 w-screen max-w-[635px] ml-3.5 mt-8 max-md:max-w-full max-md:font-light max-md:leading-10 max-md:text-xl max-md:mt-10 max-md:mx-auto"
                >
                    <font color="#000000">
                        Built Wicket longer admire do barton vanity itself do in it. Preferred
                        to sportsmen it engrossed listening. Park gate sell they west hard for
                        the.
                    </font>
                </div>
                <div
                    class="text-white text-center text-base font-bold shadow-2xl mt-5 bg-teal-800 w-[182px] max-w-full justify-center items-stretch ml-3.5  py-4 rounded-xl max-md:text-sm max-md:w-[105px] max-md:ml-2.5 max-md:mt-10 max-md:px-1 max-md:py-4"
                >
                    Book Now!
                </div>
                </div>
              
                <div>
                    <img src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hero" 
                    className="object-cover object-center  h-full rounded-xl shadow-2xl max-w-[635px] max-h-[635px] ml-3.5 max-md:max-w-full max-md:rounded-xl max-md:shadow-2xl max-md:ml-0 max-md:mt-10 max-md:mx-auto max-sm:ml-0 max-sm:mt-10 max-sm:mx-auto"

                    />
                </div>
                </div>
         
            </div>
        </>
    )
}

export default Hero;