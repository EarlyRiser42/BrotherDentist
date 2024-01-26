import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/app/[lang]/components/header';
import React from 'react';
import Footer from '@/app/[lang]/components/footer';
import Image from 'next/image';
import portrait from '@/public/portrait_body.png';
import { ArrowRight } from '@/components/Icons/Icons';

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header, footer } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <section className="flex flex-col lg:flex-row w-full h-50vh sm:h-90vh items-center clg:items-start justify-center my-4">
                <div
                    className="flex items-center justify-start w-9/10 h-9/10 rounded-2xl
                    cs:min-w-cs sm:min-w-sm clg:w-7/10 clg:min-w-clg cxl:w-cxl
                    bg-no-repeat bg-cover bg-[url('../public/hero_cxs.svg')]
                    sm:bg-[url('../public/hero_cxs.svg')] clg:bg-[url('../public/hero_clg.svg')] cxl:bg-[url('../public/hero_clg.svg')]"
                >
                    <div
                        className="flex flex-col relative items-start justify-evenly w-1/2 h-40vh relative
                    sm:h-full"
                    >
                        <div
                            className="absolute flex justify-center items-center inset-0 w-4/5 h-1/10 z-10 text-center pt-1 mt-1 bg-hero rounded-full
                            min-w-150 cs:w-3/4 sm:min-w-300 sm:h-8/10 clg:mt-0 clg:min-w-500 cxl:min-w-700 clg:h-11/100"
                        >
                            <span className="text-xs cs:text-sm sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-[url('../public/clouds.jpg')]">
                                {page.home.p0}
                            </span>
                        </div>
                        <div className="flex flex-col justify-evenly w-50vw h-3/5 absolute left-2 top-12 cs:left-4 cs:top-16 sm:top-20 clg:left-12 clg:top-32 z-10 ">
                            <div className="w-full">
                                <h1 className="text-2xl cs:text-3xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-hero-gradient bg-200-auto bg-clip-text animate-textClip inline-block">
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
                    </div>
                    <div
                        className="w-2/3 h-40vh animate-fadeInHero relative
                    sm:h-full
                    "
                    >
                        <Image
                            src={portrait}
                            alt="portrait"
                            className="absolute bottom-0 right-0 w-full clg:w-4/5"
                            style={{
                                height: '90%',
                            }}
                            width={305}
                            height={362}
                            priority={true}
                            sizes="100vw"
                        />
                    </div>
                </div>
                <div
                    className="w-9/10 h-2/5 grid grid-cols-3 grid-rows-1 clg:grid-cols-1 clg:grid-rows-3 gap-x-2 mt-4 min-h-120
                    cs:mt-8 cs:min-w-cs sm:min-w-sm sm:min-h-170 sm:gap-x-4 clg:ml-6 clg:gap-y-6 clg:min-w-300 clg:mt-0 clg:h-9/10 clg:w-1/10"
                >
                    <div className="aspect-ratio w-full aspect-w-1 aspect-h-1 bg-gray rounded-2xl relative bg-red-to-yellow">
                        <span
                            className="mt-4 ml-4 inline-block text-white dark:text-black
                        sm:text-lg lg:text-xl xl:text-2xl"
                        >
                            {page.home.button1}
                        </span>
                        <div className="absolute right-3 bottom-3">
                            <ArrowRight />
                        </div>
                    </div>
                    <div className="aspect-ratio w-full aspect-w-1 aspect-h-1 bg-gray rounded-2xl relative bg-yellow-to-yellow">
                        <span
                            className="mt-4 ml-4 inline-block relative text-white dark:text-black
                        sm:text-lg lg:text-xl xl:text-2xl"
                        >
                            {page.home.button2}
                        </span>
                        <div className="absolute right-3 bottom-3">
                            <ArrowRight />
                        </div>
                    </div>
                    <div className="aspect-ratio w-full aspect-w-1 aspect-h-1 bg-gray rounded-2xl relative  bg-green-to-yellow ">
                        <span
                            className="mt-4 ml-4 inline-block relative text-white dark:text-black
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
            <Footer footer={footer} />
        </>
    );
}
