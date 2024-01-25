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

    const svgString = `
    <svg width="349" height="266" viewBox="0 0 349 266" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M106.925 33C113.553 33 118.925 27.6274 118.925 21V12C118.925 5.37258 124.298 0 130.925 0H337C343.627 0 349 5.37258 349 12V254C349 260.627 343.627 266 337 266H12C5.37258 266 0 260.627 0 254V45C0 38.3726 5.37258 33 12 33H106.925Z" fill="url(#paint0_linear_1_4)"/>
        <defs>
        <linearGradient id="paint0_linear_1_4" x1="349" y1="133" x2="-6.50387e-06" y2="133" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FCF1F2"/>
        <stop offset="0.9999" stop-color="#DDD6FD" stop-opacity="0.307"/>
        <stop offset="1" stop-color="#CEC3C3" stop-opacity="0.3"/>
        </linearGradient>
        </defs>
    </svg>
`;

    const encodedSvg = encodeURIComponent(svgString);

    const divStyle = {
        backgroundImage: `url("data:image/svg+xml;utf8,${encodedSvg}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <>
            <Header lang={lang} header={header} />
            <section className="flex w-full h-50vh sm:h-90vh items-start justify-center my-4">
                <div
                    className="flex items-center justify-start w-9/10 h-9/10 rounded-2xl
                    cs:min-w-cs cmd:min-w-cmd clg:min-w-clg cxl:w-cxl"
                    style={divStyle}
                >
                    <div
                        className="flex flex-col relative items-start justify-evenly w-1/2 h-40vh relative
                    sm:h-full"
                    >
                        <div
                            className="absolute flex justify-center items-center inset-0 w-4/5 h-1/10 z-10 text-center pt-1 mt-1 bg-violet-100 rounded-full
                            cs:w-3/4 cmd:h-8/10 clg:h-13/100 cxl:h-15/100"
                        >
                            <span className="text-xs cs:text-sm sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                                {page.home.p0}
                            </span>
                        </div>
                        <div className="absolute left-2 top-16 w-50vw z-10 cs:left-4 sm:top-32 xl:left-20 xl:top-44">
                            <h1 className="text-2xl cs:text-3xl sm:text-5xl lg:text-7xl font-bold text-white ">
                                {page.home.p1}
                                <br />
                                {page.home.p2}
                            </h1>
                        </div>
                        <div className="absolute left-2 top-32 w-50vw z-10 cs:left-4 cs:top-36 sm:top-64 lg:top-80 xl:left-20 xl:top-88 cxl:top-96">
                            <h4 className="text-lg cs:text-xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white">
                                {page.home.p3}
                            </h4>
                        </div>
                        <div className="absolute left-2 top-44 w-50vw z-10 cs:left-4 cs:top-48 sm:top-80 lg:top-96 xl:left-20 xl:top-98 cxl:top-100">
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
                        className="w-2/3 h-40vh animate-fadeInHero relative
                    sm:h-full
                    "
                    >
                        <Image
                            src={portrait}
                            alt="portrait"
                            className="absolute bottom-0 right-0 w-full xl:w-3/5"
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
