import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/app/[lang]/components/header';
import React from 'react';
import Footer from '@/app/[lang]/components/footer';
import Image from 'next/image';
import portrait from '@/public/portrait_body.png';

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header, footer } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <section className="flex w-full h-50vh sm:h-90vh items-start justify-center my-4">
                <div
                    className="flex items-center justify-start w-9/10 h-9/10 rounded-2xl
                    cs:min-w-cs sm:min-w-sm clg:min-w-clg cxl:w-cxl
                    bg-no-repeat bg-cover bg-[url('../public/hero_cxs.svg')]
                    sm:bg-[url('../public/hero_cxs.svg')] clg:bg-[url('../public/hero_clg.svg')]"
                >
                    <div
                        className="flex flex-col relative items-start justify-evenly w-1/2 h-40vh relative
                    sm:h-full"
                    >
                        <div
                            className="absolute flex justify-center items-center inset-0 w-4/5 h-1/10 z-10 text-center pt-1 mt-1 bg-hero rounded-full
                            min-w-150 cs:w-3/4 sm:min-w-300 sm:h-8/10 clg:min-w-500 clg:h-11/100"
                        >
                            <span className="text-xs cs:text-sm sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                                {page.home.p0}
                            </span>
                        </div>
                        <div className="flex flex-col justify-evenly w-50vw h-3/5 absolute left-2 top-12 cs:left-4 cs:top-16 sm:top-20 clg:left-12 clg:top-32 z-10 ">
                            <div className="w-full">
                                <h1 className="text-2xl cs:text-3xl sm:text-5xl lg:text-7xl font-bold text-white ">
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
            </section>

            <Footer footer={footer} />
        </>
    );
}
