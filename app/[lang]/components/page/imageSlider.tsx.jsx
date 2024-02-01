'use client';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';

export default function ImageSlider({ careers }) {
    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage() {
        setImageIndex((index) => {
            if (index === careers.length - 1) return 0;
            return index + 1;
        });
    }

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return careers.length - 1;
            return index - 1;
        });
    }

    return (
        <section
            aria-label="Image Slider"
            className="relative flex flex-col justify-center items-center my-8 w-full min-h-250 h-65dvh
            cs:h-75dvh
            sm:min-h-480 sm:h-25dvh sm:my-16
            lg:my-4 cxl:my-0 cxl:min-h-640 cxl:h-75vh"
        >
            <div className="flex flex-col items-center w-full mb-2 cs:mb-4">
                <h1 className="font-bold mb-1 w-9/10 text-lg sm:text-xl lg:text-2xl lg:w-4/5 cxl:text-3xl">
                    의료진 소개
                </h1>
                <h4 className="font-medium w-9/10 text-base sm:text-lg lg:text-xl lg:w-4/5 cxl:text-2xl">
                    당신의 주치의를 만나보세요.
                </h4>
            </div>
            <div className="w-9/10 h-4/5 flex overflow-hidden clg:w-88/100 clg:min-w-970 clg:max-w-1250 cxl:w-85/100">
                <div
                    className="flex w-full rounded-3xl bg-hero_gray-to-black dark:bg-gray-to-white transition-transform duration-500 ease-in-out
                    sm:bg-hero_gray-to-black-bottom sm:dark:bg-gray-to-white-bottom"
                    style={{
                        transform: `translateX(${-imageIndex * 100}%)`,
                    }}
                >
                    {careers.map(({ url, alt, p1, p2 }, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full min-w-full rounded-3xl sm:flex-row"
                        >
                            <div
                                className="flex justify-center w-full h-1/2 rounded-br-3xl rounded-t-3xl bg-hero_gray dark:bg-gray
                            sm:w-1/2 sm:h-full sm:rounded-l-3xl"
                            >
                                <Image
                                    src={url}
                                    alt={alt}
                                    width={183}
                                    height={217}
                                    className="object-fill w-3/5 h-full cs:w-3/5 sm:w-full clg:w-3/5"
                                />
                            </div>
                            <div
                                className="w-full h-1/2 flex flex-col justify-center items-center rounded-tl-3xl rounded-b-3xl bg-black dark:bg-white
                             sm:w-1/2 sm:h-full sm:rounded-r-3xl sm:justify-start"
                            >
                                <div className="w-9/10 flex flex-col justify-center items-start mb-4 sm:mt-12">
                                    {p1 &&
                                        p1.map((text, idx) => (
                                            <span
                                                key={idx}
                                                className={
                                                    idx === 0
                                                        ? 'text-sm font-bold text-white dark:text-black mb-2 cs:text-base sm:text-lg'
                                                        : 'text-xs text-white dark:text-black cs:text-sm sm:text-base'
                                                }
                                            >
                                                {text}
                                            </span>
                                        ))}
                                </div>
                                <div className="w-9/10 flex flex-col justify-center items-start">
                                    {p2 &&
                                        p2.map((text, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs text-white dark:text-black cs:text-sm sm:text-base sm:mb-2 cxl:mb-4"
                                            >
                                                {text}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={showPrevImage}
                className="block absolute top-0 bottom-0 left-0 sm:left-2  cursor-pointer"
                aria-label="View Previous Image"
            >
                <IoIosArrowBack
                    className="stroke-white fill-black dark:fill-white w-6 h-6"
                    aria-hidden
                />
            </button>
            <button
                onClick={showNextImage}
                className="block absolute top-0 bottom-0 right-0 sm:right-2 cursor-pointer"
                aria-label="View Next Image"
            >
                <IoIosArrowForward
                    className="stroke-white fill-black dark:fill-white w-6 h-6"
                    aria-hidden
                />
            </button>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
                {careers.map((_, index) => (
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
        </section>
    );
}
