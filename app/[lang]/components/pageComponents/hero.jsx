import { ArrowRight } from '@/components/Icons/Icons';
import React from 'react';
import VideoComponent from '@/app/[lang]/components/pageComponents/VideoComponent';
import { Suspense } from 'react';

export default function Hero({ page }) {
    return (
        <section
            aria-label="Hero"
            className="flex flex-col justify-center my-4 items-center w-full h-96
            cs:h-410 sm:h-586
            lg:flex-row clg:items-start cxl:h-650"
        >
            <div
                className="flex items-center justify-start w-9/10 h-9/10 rounded-2xl relative
                    cs:min-w-cs sm:min-w-sm clg:w-7/10 clg:min-w-clg"
            >
                <div
                    className="before:block before:w-6 before:h-6 before:absolute before:top-0 before:-right-6 before:bg-[url('../public/lava_before.svg')] before:dark:bg-[url('../public/lava_before_dark.svg')] before:bg-no-repeat before:bg-center before:bg-100%auto
                        after:block after:bg-transparent after:w-6 after:h-6 after:absolute after:-bottom-6 after:left-0 after:bg-[url('../public/lava_before.svg')] after:dark:bg-[url('../public/lava_before_dark.svg')] after:bg-no-repeat after:bg-center after:bg-100%auto
                        top-0 absolute flex justify-start items-start w-2/4 h-15/100 text-center bg-white dark:bg-black rounded-br-3xl
                        cs:w-1/2 cs:h-15/100 sm:w-2/5 sm:h-1/10 z-10"
                >
                    <div className="flex justify-center items-center w-96/100 h-4/5 bg-black dark:bg-white rounded-3xl">
                        <span className="text-sm cs:text-base sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-hero-gradient bg-400 bg-clip-text animate-textClip">
                            {page.home.p0}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly w-50vw h-3/5 absolute left-2 top-12 cs:left-4 cs:top-16 sm:top-20 sm:left-8 clg:left-8 clg:top-24 z-10 ">
                    <div className="w-full">
                        <h1 className="text-2xl cs:text-3xl sm:text-5xl lg:text-7xl font-bold  font-bold text-white">
                            {page.home.p1}
                            <br />
                            {page.home.p2}
                        </h1>
                    </div>
                    <div className="w-full">
                        <h4 className="text-lg cs:text-xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white">
                            {page.home.p3}
                        </h4>
                    </div>
                    <div className="w-full">
                        <p className="text-xs cs:text-sm sm:text-2xl lg:text-3xl text-white leading-relaxed ">
                            {page.home.p4}
                            <br />
                            {page.home.p5}
                            <br />
                            {page.home.p6}
                        </p>
                    </div>
                </div>
                <div
                    className="w-full h-full min-h-64 rounded-3xl relative
                    sm:min-h-480"
                >
                    <Suspense fallback={<div className="bg-white"></div>}>
                        <VideoComponent />
                    </Suspense>
                </div>
            </div>
            <div
                className="w-9/10 h-1/5 grid grid-cols-3 grid-rows-1 gap-x-2 mt-2 min-h-80
                    cs:min-h-120 cs:mt-4 cs:h-2/5 cs:min-w-cs sm:min-w-sm sm:min-h-170 sm:gap-x-4
                    clg:grid-cols-1 clg:grid-rows-3 clg:ml-6 clg:gap-y-6 clg:min-w-300 clg:mt-0 clg:h-9/10 clg:w-1/10"
            >
                <div className="aspect-[4/3] rounded-2xl relative bg-green hover:font-bold cmd:aspect-auto ">
                    <span
                        className="mt-2 ml-2 inline-block text-black dark:text-white cs:mt-4 cs:ml-4
                        sm:text-lg lg:text-xl xl:text-2xl"
                    >
                        {page.home.button1}
                    </span>
                    <div className="absolute right-3 bottom-3">
                        <ArrowRight />
                    </div>
                </div>
                <div className="aspect-[4/3] rounded-2xl relative bg-yellow hover:font-bold cmd:aspect-auto">
                    <span
                        className="mt-2 ml-2 inline-block relative text-black dark:text-white cs:mt-4 cs:ml-4
                        sm:text-lg lg:text-xl xl:text-2xl"
                    >
                        {page.home.button2}
                    </span>
                    <div className="absolute right-3 bottom-3">
                        <ArrowRight />
                    </div>
                </div>
                <div className="aspect-[4/3] rounded-2xl relative bg-dark_gray dark:bg-gray hover:font-bold cmd:aspect-auto ">
                    <span
                        className="mt-2 ml-2 inline-block relative text-black dark:text-white cs:mt-4 cs:ml-4
                        sm:text-lg lg:text-xl xl:text-2xl"
                    >
                        {page.home.button3}
                    </span>
                    <div className="absolute right-3 bottom-3">
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </section>
    );
}
