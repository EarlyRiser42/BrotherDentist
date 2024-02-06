'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Icon1 from '@/public/parallexSection/3d icon (1).png';
import Icon2 from '@/public/parallexSection/3d icon (2).png';
import Icon3 from '@/public/parallexSection/3d icon (6).png';
import Icon5 from '@/public/parallexSection/3d icon (5).png';

export default function ParallexSection({ page }) {
    const Icons = [Icon1, Icon2, Icon3, Icon5];
    const MOVEMENT = [
        { top: '3%', left: '-5%', scrollSpeed: '0.2' },
        { top: '10%', left: '86%', scrollSpeed: '0.3' },
        { top: '-10%', left: '55%', scrollSpeed: '0.6' },
        { top: '27%', left: '10%', scrollSpeed: '0.1' },
    ];

    const [offsetY, setOffsetY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset);

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        });

        window.addEventListener('scroll', handleScroll);

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <section
            aria-label="ParallexSection"
            className="w-full h-330 mt-16 sm:mt-24 sm:h-410 lg:h-410 cxl:h-490 cxl:mt-24 relative overflow-hidden"
        >
            {Icons.map((icon, index) => {
                return (
                    <div
                        key={index}
                        className="absolute w-20 aspect-square lg:w-28 cxl:w-36"
                        style={{
                            top: `${MOVEMENT[index].top}`,
                            left: `${MOVEMENT[index].left}`,
                            transform: `translateY(${offsetY * MOVEMENT[index].scrollSpeed}px)`,
                        }}
                    >
                        <Image
                            src={icon}
                            alt={`Icon ${index}`}
                            fill
                            sizes="(max-width: 1024px) 5rem, (max-width: 1440px) 7rem, 9rem"
                        />
                    </div>
                );
            })}
            <div
                ref={textRef}
                className="w-full h-full text-center flex flex-col justify-center items-center bg-light_gray dark:bg-gray"
            >
                <h1
                    className={`z-[2] font-bold mt-20 mb-4 text-xl sm:text-2xl lg:text-3xl lg:mb-6 cxl:mb-12 cxl:text-4xl animate-fadeIn ${!isVisible ? 'hidden' : ''}`}
                >
                    {page.home.parallexSection.h1
                        .split(' ')
                        .map((part, index) => (
                            <span key={index}>
                                {part}
                                {index === 2 ? (
                                    <span className="mb-4 block lg:inline">
                                        {' '}
                                    </span>
                                ) : (
                                    ' '
                                )}
                            </span>
                        ))}
                </h1>
                <h1
                    className={`z-[2] font-bold mb-4 text-xl sm:text-2xl lg:text-3xl lg:mb-6  cxl:mb-12 cxl:text-4xl animate-fadeIn ${!isVisible ? 'hidden' : ''}`}
                >
                    {page.home.parallexSection.h2
                        .split(' ')
                        .map((part, index) => (
                            <span key={index}>
                                {part}
                                {index === 2 ? (
                                    <span className="mb-4 block lg:inline">
                                        {' '}
                                    </span>
                                ) : (
                                    ' '
                                )}
                            </span>
                        ))}
                </h1>
                <h1
                    className={`z-[2] font-bold mb-20 text-xl sm:text-2xl lg:text-3xl lg:mb-6 cxl:mb-12 cxl:text-4xl animate-fadeIn ${!isVisible ? 'hidden' : ''}`}
                >
                    {page.home.parallexSection.h3
                        .split(' ')
                        .map((part, index) => (
                            <span key={index}>
                                {part}
                                {index === 2 ? (
                                    <span className="mb-4 block lg:inline">
                                        {' '}
                                    </span>
                                ) : (
                                    ' '
                                )}
                            </span>
                        ))}
                </h1>
            </div>
        </section>
    );
}
