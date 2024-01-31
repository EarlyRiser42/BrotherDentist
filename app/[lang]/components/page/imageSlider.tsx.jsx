'use client';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoEllipseSharp } from 'react-icons/io5';
import { IoEllipseOutline } from 'react-icons/io5';
import Image from 'next/image';

export default function ImageSlider({ images }) {
    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage() {
        setImageIndex((index) => {
            if (index === images.length - 1) return 0;
            return index + 1;
        });
    }

    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return images.length - 1;
            return index - 1;
        });
    }

    return (
        <section
            aria-label="Image Slider"
            className="flex flex-col justify-center my-4 items-center w-full min-h-96 h-50vh h-50dvh
            cs:h-60vh cs:h-60dvh
            sm:min-h-640 sm:h-90vh sm:h-90dvh
            lg:flex-row clg:items-start"
        >
            <div
                className="flex items-center w-9/10 h-9/10 rounded-2xl relative
                    cs:min-w-cs sm:min-w-sm clg:w-7/10 clg:min-w-clg cxl:w-cxl"
            >
                <div className="w-full h-full flex overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(${-imageIndex * 100}%)`,
                        }}
                    >
                        {images.map(({ url, alt }, index) => (
                            <div key={index} className="flex min-w-full">
                                <div className="w-1/2 flex justify-center items-center">
                                    <span>치과 대표</span>
                                </div>
                                <div className="w-1/2">
                                    <Image
                                        src={url}
                                        alt={alt}
                                        width={200}
                                        height={400}
                                        className="object-cover w-full h-full block flex-shrink-0 flex-grow-0"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={showPrevImage}
                    className="block absolute top-0 bottom-0 left-0 p-4 cursor-pointer"
                    aria-label="View Previous Image"
                >
                    <IoIosArrowBack
                        className="stroke-white fill-black w-8 h-8"
                        aria-hidden
                    />
                </button>
                <button
                    onClick={showNextImage}
                    className="block absolute top-0 bottom-0 right-0 p-4 cursor-pointer"
                    aria-label="View Next Image"
                >
                    <IoIosArrowForward
                        className="stroke-white fill-black w-8 h-8"
                        aria-hidden
                    />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className="block cursor-pointer w-4 h-4"
                            aria-label={`View Image ${index + 1}`}
                            onClick={() => setImageIndex(index)}
                        >
                            {index === imageIndex ? (
                                <IoEllipseSharp
                                    className="fill-current text-white"
                                    aria-hidden
                                />
                            ) : (
                                <IoEllipseOutline
                                    className="fill-current text-white"
                                    aria-hidden
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
