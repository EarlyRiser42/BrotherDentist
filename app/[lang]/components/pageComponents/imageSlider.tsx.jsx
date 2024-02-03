'use client';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';

export default function ImageSlider({ page, careers }) {
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
            className="relative flex flex-col justify-start items-center w-full h-490 mt-16
            cs:h-650 cs:mt-12 sm:h-570 sm:mt-8 clg:h-490 cxl:h-570"
        >
            <div className="flex flex-col items-start w-9/10 mb-6 cs:mb-12 clg:min-w-970 clg:max-w-1250 cxl:w-85/100">
                <h1 className="font-bold mb-1 w-full text-2xl sm:text-3xl lg:text-4xl lg:w-4/5 cxl:text-5xl">
                    {page.home.ImageSlider_h1}
                </h1>
                <h4 className="font-medium w-full text-xl sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                    {page.home.ImageSlider_h4}
                </h4>
            </div>
            <div className="w-9/10 h-4/5 flex overflow-hidden clg:w-88/100 clg:min-w-970 clg:max-w-1250 cxl:w-85/100">
                <div
                    className="flex w-full rounded-3xl transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(${-imageIndex * 100}%)`,
                    }}
                >
                    {careers.map(({ url, alt, title, details }, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full min-w-full rounded-3xl sm:flex-row"
                        >
                            <div
                                className="w-full h-2/6 relative flex justify-center items-end rounded-3xl mb-4 bg-light_gray
                                cs:h-2/5 sm:hidden"
                            >
                                <Image
                                    src={url[1]}
                                    alt={alt}
                                    width={1642} // 이미지의 원본 너비
                                    height={1489} // 이미지의 원본 높이
                                    className="object-fill w-3/5 h-full cs:w-3/5"
                                />
                            </div>
                            <div
                                className="hidden justify-center items-end w-full h-1/2 rounded-3xl bg-light_gray
                            sm:flex sm:w-1/2 sm:h-full"
                            >
                                <Image
                                    src={url[0]}
                                    alt={alt}
                                    width={1830}
                                    height={2170}
                                    className="object-fill w-full h-9/10 clg:w-3/5"
                                />
                            </div>
                            <div
                                className="w-full h-4/6 flex flex-col justify-center items-center rounded-3xl bg-light_blue cs:h-3/5
                             sm:w-1/2 sm:h-full"
                            >
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
                                <div className="w-9/10 flex flex-col justify-center items-start space-y-1">
                                    {details &&
                                        details.map((text, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs text-white cs:text-sm sm:text-base sm:mb-2 cxl:mb-4"
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
                className="block absolute top-0 bottom-0 left-0 sm:top-4 sm:left-2 cursor-pointer"
                aria-label="View Previous Image"
            >
                <IoIosArrowBack
                    className="stroke-white fill-black dark:fill-white w-6 h-6"
                    aria-hidden
                />
            </button>
            <button
                onClick={showNextImage}
                className="block absolute top-0 bottom-0 right-0 sm:top-4 sm:right-2 cursor-pointer"
                aria-label="View Next Image"
            >
                <IoIosArrowForward
                    className="stroke-white fill-black dark:fill-white w-6 h-6"
                    aria-hidden
                />
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2  cs:bottom-8 sm:-bottom-2 clg:-bottom-4 cxl:-bottom-6">
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
