import React from 'react';
import { ArrowRight } from '@/components/Icons/Icons';
import Image from 'next/image';
import icon from '@/public/services/3d.png';
import support from '@/public/services/support.png';
import Link from 'next/link';

export default function ClinicServices({ lang, page }) {
    return (
        <section
            aria-label="ClinicServices"
            className="w-full h-auto flex flex-col justify-start items-center mt-16 sm:mt-20 lg:mt-24 cxl:mt-28"
        >
            <div className="flex flex-col justify-center w-9/10 h-auto mb-2 sm:mb-4 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400">
                <h1 className="text-black dark:text-white font-bold mb-1 w-full text-2xl sm:text-3xl lg:text-4xl lg:w-4/5 cxl:text-5xl">
                    {page.home.specialties.h1}
                </h1>
                <h2 className="text-black dark:text-white font-medium w-full text-xl sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                    {page.home.specialties.h4.split(' ').map((part, index) => (
                        <span key={index}>
                            {part}
                            {index === 2 ? (
                                <span className="block sm:inline"> </span>
                            ) : (
                                ' '
                            )}
                        </span>
                    ))}
                </h2>
            </div>
            <div className="grid grid-cols-10 grid-rows-10 gap-4 w-9/10 h-72 cs:h-80 sm:h-96 cmd:h-410 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400 lg:h-430 cxl:h-490 c2xl:h-510 c3xl:h-590">
                <Link
                    href={`/${lang}/implant`}
                    className="col-span-7 row-span-6 bg-light_blue flex items-start justify-start rounded-2xl relative hover:font-bold hover:shadow-speechBalloon dark:hover:shadow-speechBalloonBlack
                cmd:col-span-6 cmd:row-span-4"
                >
                    <span
                        className="mt-2 ml-2 inline-block relative text-black dark:text-white cs:mt-4 cs:ml-4
                        sm:text-lg lg:text-xl xl:text-2xl"
                    >
                        {page.home.specialties.specicalOne}
                    </span>
                    <div className="absolute right-3 bottom-3">
                        <ArrowRight />
                    </div>
                </Link>
                <Link
                    href={`/${lang}/prosthodontics`}
                    className="col-span-3 row-span-6 bg-blue_600 flex items-start justify-start rounded-2xl relative hover:font-bold hover:shadow-speechBalloon dark:hover:shadow-speechBalloonBlack
                cmd:col-span-2 cmd:row-span-4"
                >
                    <span
                        className="mt-2 ml-2 inline-block relative text-black dark:text-white cs:mt-4 cs:ml-4
                        sm:text-lg lg:text-xl xl:text-2xl"
                    >
                        {page.home.specialties.specicalTwo}
                    </span>
                    <div className="absolute right-3 bottom-3">
                        <ArrowRight />
                    </div>
                </Link>
                <div className="col-span-2 row-span-5 bg-white_600 dark:bg-black_600 hidden cmd:flex items-center justify-center rounded-2xl relative">
                    <Image
                        src={icon}
                        alt="3d icon"
                        fill
                        sizes="(max-width: 1024px) 20vw, (max-width: 1440px) 20vw, 20vw"
                    />
                </div>
                <Link
                    href={`/${lang}/laminate`}
                    className="col-span-5 row-span-4 bg-green_600 flex items-start justify-start rounded-2xl relative hover:font-bold hover:shadow-speechBalloon dark:hover:shadow-speechBalloonBlack
                cmd:col-span-4 cmd:row-span-4"
                >
                    <span
                        className="mt-2 ml-2 inline-block relative text-black dark:text-white cs:mt-4 cs:ml-4
                        sm:text-lg lg:text-xl xl:text-2xl"
                    >
                        {page.home.specialties.specicalThree}
                    </span>
                    <div className="absolute right-3 bottom-3">
                        <ArrowRight />
                    </div>
                </Link>
                <Link
                    href={`/${lang}/cosmeticDentistry`}
                    className="col-span-5 row-span-4 bg-white_600 flex items-start justify-start rounded-2xl relative hover:font-bold hover:shadow-speechBalloon dark:hover:shadow-speechBalloonBlack
                cmd:col-span-4 cmd:row-span-4"
                >
                    <span
                        className="mt-2 ml-2 inline-block relative text-black dark:text-white cs:mt-4 cs:ml-4
                        sm:text-lg lg:text-xl xl:text-2xl"
                    >
                        {page.home.specialties.specialFour}
                    </span>
                    <div className="absolute right-3 bottom-3">
                        <ArrowRight />
                    </div>
                </Link>
                <div className="col-span-2 row-span-5 bg-white_600 hidden cmd:flex items-center justify-center rounded-2xl relative">
                    <Image
                        src={support}
                        alt="supporters"
                        fill
                        sizes="(max-width: 1024px) 20vw, (max-width: 1440px) 20vw, 20vw"
                    />
                </div>
                <div className="col-span-8 row-span-2 bg-white_600 dark:bg-black_600 hidden cmd:flex items-center justify-center rounded-2xl relative"></div>
            </div>
        </section>
    );
}
