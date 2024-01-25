import React from 'react'

export default function Footer() {
    return (
        <>
            <div
                class="self-center flex w-full max-w-[1170px] justify-between gap-5 mt-24 mb-11 px-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mb-10"
            >
                <div
                    class="items-stretch flex grow basis-[0%] flex-col mr-auto pt-1.5 max-sm:mx-auto"
                >
                    <div class="text-slate-800 text-2xl font-black">Tripy</div>
                    <div class="text-slate-800 text-sm leading-5 mt-5 max-sm:mx-auto">
                        4517 Washington Ave. Manchester, Kentucky 39495
                    </div>
                    <div class="items-stretch flex gap-3 mt-5 pr-20 max-md:pr-5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99530196c569dd12d5ff12cbd9aebb50ff41253ac7d525391759103366f02300?apiKey=c2a9b141e86b4f86b11cebb14749f34c&"
                            class="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/820d8124c8ef20df524801127f654c93f349b601f17d514a2a92a42981411e2c?apiKey=c2a9b141e86b4f86b11cebb14749f34c&"
                            class="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b0bd23dbcdcf80128e5232029300615316dc95efc371be7393b8a6e45aaf393?apiKey=c2a9b141e86b4f86b11cebb14749f34c&"
                            class="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                    </div>
                </div>
                <div
                    class="items-stretch self-stretch flex basis-[0%] flex-col max-sm:mx-auto"
                >
                    <div
                        class="text-slate-800 text-center text-lg font-bold whitespace-nowrap"
                    >
                        About
                    </div>
                    <div class="text-slate-800 text-sm whitespace-nowrap mt-5">About us</div>
                    <div class="text-slate-800 text-sm whitespace-nowrap mt-5">Features</div>
                    <div class="text-slate-800 text-sm whitespace-nowrap mt-5">News</div>
                    <div class="text-slate-800 text-sm whitespace-nowrap mt-5">Plans</div>
                </div>
                <div
                    class="items-stretch self-stretch flex basis-[0%] flex-col max-sm:mx-auto"
                >
                    <div
                        class="text-slate-800 text-center text-lg font-bold whitespace-nowrap"
                    >
                        Company
                    </div>
                    <div class="text-slate-800 text-sm mt-5">Why Tripy</div>
                    <div class="text-slate-800 text-sm whitespace-nowrap mt-5">
                        Partner with us
                    </div>
                    <div class="text-slate-800 text-sm mt-5">FAQ</div>
                    <div class="text-slate-800 text-sm mt-5">Blog</div>
                </div>
                <div class="items-stretch flex grow basis-[0%] flex-col max-sm:mx-auto">
                    <div class="text-slate-800 text-center text-lg font-bold mr-auto">
                        Newsletter
                    </div>
                    <div class="text-slate-800 text-sm leading-5 mt-5">
                        Subscribe our newsletter and get exciting offers
                    </div>
                    <div
                        class="shadow-2xl bg-white flex items-center justify-between gap-5 mt-5 pl-5 pr-2 py-2.5 rounded-[55px]"
                    >
                        <div class="text-zinc-500 text-xs leading-4 mr-auto my-auto">
                            Enter your email address
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc3fdd9671847257a90974822be0ca650532989446c6f10a2b3e9626b18531fa?apiKey=c2a9b141e86b4f86b11cebb14749f34c&"
                            class="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
