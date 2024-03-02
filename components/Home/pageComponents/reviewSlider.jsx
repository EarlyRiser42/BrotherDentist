import React from 'react';
import Image from 'next/image';
import profile1 from '@/public/reviewSlider/profile (1).jpg';
import profile2 from '@/public/reviewSlider/profile (2).jpg';
import profile3 from '@/public/reviewSlider/profile (3).jpg';
import profile4 from '@/public/reviewSlider/profile (4).jpg';
import profile5 from '@/public/reviewSlider/profile (5).jpg';
import profile6 from '@/public/reviewSlider/profile (6).png';

export default function ReviewSlider({ page }) {
    const logos = [
        { src: profile1, alt: 'profile1' },
        { src: profile2, alt: 'profile2' },
        { src: profile3, alt: 'profile3' },
        { src: profile4, alt: 'profile4' },
        { src: profile5, alt: 'profile5' },
        { src: profile6, alt: 'profile6' },
        { src: profile1, alt: 'profile1' },
        { src: profile2, alt: 'profile2' },
        { src: profile3, alt: 'profile3' },
        { src: profile4, alt: 'profile4' },
        { src: profile5, alt: 'profile5' },
        { src: profile6, alt: 'profile6' },
    ];

    const doubledLogos = [...logos, ...logos];
    const reviews = page.home.reviewSlider.reviews;
    const reviewsLength = reviews.length;

    return (
        <section
            aria-label="ReviewSlider"
            className="w-full h-auto flex flex-col justify-start items-center mt-16 sm:mt-20 lg:mt-24 cxl:mt-28"
        >
            <div className="flex flex-col justify-center w-9/10 h-auto mb-2 sm:mb-4 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400">
                <h1 className="font-bold mb-1 w-full text-2xl sm:text-3xl lg:text-4xl lg:w-4/5 cxl:text-5xl">
                    {page.home.reviewSlider.h1}
                </h1>
                <h4 className="font-medium w-full mt-2 text-xl sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                    {page.home.reviewSlider.h4.split(' ').map((part, index) => (
                        <span key={index}>
                            {part}
                            {index === 1 ? (
                                <span className="block sm:inline"> </span>
                            ) : (
                                ' '
                            )}
                        </span>
                    ))}
                </h4>
            </div>
            <div className="w-9/10 h-auto overflow-hidden clg:w-88/100 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400">
                <div className="w-max flex flex-nowrap gap-4 p-4 animate-slide hover:[animation-play-state:paused]">
                    {doubledLogos.map((logo, index) => (
                        <Card
                            key={index}
                            review={reviews[index % reviewsLength]}
                            src={logo.src}
                            alt={logo.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Card = ({ review, src, alt }) => {
    return (
        <div className="w-80 cs:w-96 sm:w-330 lg:w-410 h-auto bg-white p-3 rounded-lg shadow-md flex flex-col items-start">
            <div className="flex justify-center items-center">
                <div className="w-12 h-12 flex justify-start items-center relative">
                    <Image
                        alt={alt}
                        src={src}
                        fill
                        sizes="(max-width: 768px) 3.5rem, (max-width: 1200px) 3.5rem, 3.5rem"
                        className="rounded-full"
                    />
                </div>
                <div className="pl-2 flex h-auto flex-col">
                    <span className="text-base text-black font-semibold cs:text-lg lg:text-xl ">
                        {review.nickname}
                    </span>
                    <span className="text-sm text-gray_500 cs:text-base lg:text-lg">
                        {review.reviewCount} · {review.photoCount} ·
                        {review.followerCount}
                    </span>
                </div>
            </div>
            <div className="h-auto flex justify-center items-center">
                <p className="text-sm mt-2 h-auto text-black cs:text-base lg:text-lg">
                    {review.message}
                </p>
            </div>
        </div>
    );
};
