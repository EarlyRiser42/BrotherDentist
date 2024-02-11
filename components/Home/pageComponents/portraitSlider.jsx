'use client';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';
import portrait1 from '@/public/portraitSlider/portrait1.png';
import portrait1_mobile from '@/public/portraitSlider/portrait1_mobile.png';
import portrait2 from '@/public/portraitSlider/portrait2.png';

export default function PortraitSlider({ page }) {
    const [imageIndex, setImageIndex] = useState(0);
    const CAREERS = [
        {
            url: [portrait1, portrait1_mobile],
            alt: 'portraitOne',
            title: page.home.portraitSlider.portraitOneTitle,
            details: page.home.portraitSlider.portraitOneDetails,
        },
        {
            url: [portrait2, portrait2],
            alt: 'portraitTwo',
            title: page.home.portraitSlider.portraitTwoTitle,
            details: page.home.portraitSlider.portraitTwoDetails,
        },
    ];
    function showNextImage() {
        setImageIndex((index) => {
            if (index === CAREERS.length - 1) return 0;
            return index + 1;
        });
    }

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return CAREERS.length - 1;
            return index - 1;
        });
    }

    return (
        <section
            aria-label="Image Slider"
            className="relative flex flex-col justify-start items-center w-full h-330 mt-16 sm:mt-20 lg:mt-24 cxl:mt-28
            cs:h-410  sm:h-570  clg:h-490 cxl:h-570"
        >
            <div className="flex flex-col justify-center w-9/10 h-1/5 clg:min-w-940 clg:max-w-1250 cxl:w-85/100">
                <h1 className="font-bold mb-1 w-full text-2xl sm:text-3xl lg:text-4xl lg:w-4/5 cxl:text-5xl">
                    {page.home.portraitSlider.h1}
                </h1>
                <h4 className="font-medium w-full text-xl sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                    {page.home.portraitSlider.h4}
                </h4>
            </div>
            <div className="w-full h-4/5 flex overflow-hidden cs:w-9/10 sm:h-4/5 clg:w-88/100 clg:min-w-940 clg:max-w-1250 cxl:w-85/100">
                <div
                    className="flex w-full h-full rounded-3xl transition-transform duration-500 ease-in-out "
                    style={{
                        transform: `translateX(${-imageIndex * 100}%)`,
                    }}
                >
                    {CAREERS.map(({ url, alt, title, details }, index) => (
                        <div
                            key={index}
                            className="flex flex-row h-full min-w-full cs:rounded-3xl sm:flex-row relative bg-dark_blue"
                        >
                            <div className=" w-4/6 h-full flex flex-col justify-center items-center cs:rounded-l-3xl absolute left-2 z-[2]">
                                <div className="w-9/10 flex flex-col justify-center items-start mb-4">
                                    {title &&
                                        title.map((text, idx) => (
                                            <span
                                                key={idx}
                                                className={
                                                    idx === 0
                                                        ? 'text-sm font-bold text-white  mb-2 cs:text-base sm:text-lg'
                                                        : 'text-xs text-white cs:text-sm sm:text-base'
                                                }
                                            >
                                                {text}
                                            </span>
                                        ))}
                                </div>
                                <div className="w-9/10 flex flex-col justify-center items-start">
                                    {details &&
                                        details.map((text, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xxs text-white cs:text-xs cs:mb-1 sm:text-base sm:mb-2 cxl:mb-3"
                                            >
                                                {text}
                                            </span>
                                        ))}
                                </div>
                            </div>
                            <div className="flex absolute right-0 justify-center items-end w-2/5 h-full bg-light_blue cs:hidden">
                                <Image
                                    src={url[1]}
                                    alt={alt}
                                    width={1576}
                                    height={1956}
                                    className="object-fill w-full h-9/10"
                                />
                            </div>
                            <div className="hidden absolute right-0 justify-center items-end w-1/2 h-full  cs:flex cs:rounded-r-3xl bg-light_blue">
                                <Image
                                    src={url[0]}
                                    alt={alt}
                                    width={1830}
                                    height={2170}
                                    className="object-fill w-full h-9/10 clg:h-full clg:w-3/5 "
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={showPrevImage}
                    className="block absolute top-1/2 left-0  sm:left-2 cxl:left-8  cursor-pointer"
                    aria-label="View Previous Image"
                >
                    <IoIosArrowBack
                        className="stroke-white fill-black dark:fill-white w-6 h-6"
                        aria-hidden
                    />
                </button>
                <button
                    onClick={showNextImage}
                    className="block absolute top-1/2 right-0 sm:right-2 cxl:right-8 cursor-pointer"
                    aria-label="View Next Image"
                >
                    <IoIosArrowForward
                        className="stroke-white fill-black dark:fill-white w-6 h-6"
                        aria-hidden
                    />
                </button>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {CAREERS.map((_, index) => (
                        <button
                            key={index}
                            className="block cursor-pointer"
                            aria-label={`View Image ${index + 1}`}
                            onClick={() => setImageIndex(index)}
                        >
                            {index === imageIndex ? (
                                <div className="transition-all ease-out duration-300 w-6 h-3 rounded-full bg-black dark:bg-white"></div>
                            ) : (
                                <div className="transition-all ease-out duration-300 w-3 h-3 rounded-full border-black dark:border-white bg-white dark:bg-black border"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
