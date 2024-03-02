import React from 'react';
import { ArrowRightForService } from '@/components/Icons/Icons';
import Image from 'next/image';
import seoul from '@/public/services/seoul.png';
import yonsei from '@/public/services/yonsei.svg';
import gov from '@/public/services/gov.png';
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
                <h2 className="text-black dark:text-white font-medium w-full mt-2 text-xl sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
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
            <div className="grid grid-cols-10 grid-rows-10 gap-2 clg:gap-4 w-9/10 aspect-4/3 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400 lg:h-430 cxl:h-490 c2xl:h-510 c3xl:h-590">
                <Link
                    href={`/${lang}/implant`}
                    className="col-span-7 row-span-6 bg-light_blue flex items-start justify-start rounded-2xl relative hover:font-bold hover:shadow-speechBalloon dark:hover:shadow-speechBalloonBlack
                cmd:col-span-6 cmd:row-span-4"
                >
                    <span className="mt-2 ml-2  text-white cs:mt-4 cs:ml-4 text-base cs:text-lg sm:text-xl clg:text-2xl c2xl:text-3xl">
                        {page.home.specialties.specicalOne}
                    </span>
                    <div className="absolute right-3 bottom-3">
                        <ArrowRightForService />
                    </div>
                </Link>
                <Link
                    href={`/${lang}/prosthodontics`}
                    className="col-span-3 row-span-6 bg-red flex items-start justify-start rounded-2xl relative hover:font-bold hover:shadow-speechBalloon dark:hover:shadow-speechBalloonBlack
                cmd:col-span-4 cmd:row-span-4"
                >
                    <span className="mt-2 ml-2  text-white cs:mt-4 cs:ml-4 text-base cs:text-lg sm:text-xl clg:text-2xl c2xl:text-3xl">
                        {page.home.specialties.specicalTwo}
                    </span>
                    <div className="absolute right-3 bottom-3">
                        <ArrowRightForService />
                    </div>
                </Link>
                <Link
                    href={`/${lang}/laminate`}
                    className="col-span-5 row-span-4 bg-green_500 flex items-start justify-start rounded-2xl relative hover:font-bold hover:shadow-speechBalloon dark:hover:shadow-speechBalloonBlack
                cmd:col-span-4 cmd:row-span-4 clg:col-span-5"
                >
                    <span className="mt-2 ml-2  text-white cs:mt-4 cs:ml-4 text-base cs:text-lg sm:text-xl clg:text-2xl c2xl:text-3xl">
                        {page.home.specialties.specicalThree}
                    </span>
                    <div className="absolute right-3 bottom-3">
                        <ArrowRightForService />
                    </div>
                </Link>
                <div className="col-span-3 row-span-4 clg:col-span-2 border border-white_500 hidden cmd:flex flex-col justify-evenly rounded-2xl">
                    <div className=" w-full flex items-center justify-center">
                        <span className="font-black text-3xl clg:text-2xl cxl:text-3xl">
                            Supported By
                        </span>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <Image
                            src={seoul}
                            alt="seoul logo"
                            sizes="6rem"
                            className="w-3/10 h-auto"
                        />
                        <Image
                            src={yonsei}
                            alt="yonsei logo"
                            sizes="6rem"
                            className="w-3/10 h-auto"
                        />
                        <Image
                            src={gov}
                            alt="gov logo"
                            sizes="6rem"
                            className="w-3/10 h-auto"
                        />
                    </div>
                </div>
                <Link
                    href={`/${lang}/cosmeticDentistry`}
                    className="col-span-5 row-span-4 bg-red_100 flex items-start justify-start rounded-2xl relative hover:font-bold hover:shadow-speechBalloon dark:hover:shadow-speechBalloonBlack
                cmd:col-span-3 cmd:row-span-4"
                >
                    <span className="mt-2 ml-2  text-white cs:mt-4 cs:ml-4 text-base cs:text-lg sm:text-xl clg:text-2xl c2xl:text-3xl">
                        {page.home.specialties.specialFour}
                    </span>
                    <div className="absolute right-3 bottom-3">
                        <ArrowRightForService />
                    </div>
                </Link>

                <div className="col-span-10 row-span-2 bg-purple hidden cmd:flex items-center justify-center rounded-2xl relative"></div>
            </div>
        </section>
    );
}
