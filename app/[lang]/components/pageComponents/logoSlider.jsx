'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import seoul from '@/public/logoSlider/seoul.jpg';
import yonsei from '@/public/logoSlider/yeonsei.png';
import ministry from '@/public/logoSlider/ministry.jpg';
import straumann from '@/public/logoSlider/straumann.png';
import ostem from '@/public/logoSlider/ostem.png';
import dio from '@/public/logoSlider/dio.png';

export default function LogoSlider() {
    const scrollerRef = useRef(null);
    // 컴포넌트 마운트 후 배열의 요소들 다시 배열에 넣기(무한 슬라이드를 위해서)
    useEffect(() => {
        if (scrollerRef.current) {
            const scrollerInner = scrollerRef.current;
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerInner.appendChild(duplicatedItem);
            });
        }
    }, []);

    return (
        <section
            aria-label="logoSlider"
            className="w-full h-82 mt-16 sm:mt-18 lg:h-102 xl:h-122 2xl:mt-24 relative overflow-hidden"
        >
            <div className="w-full overflow-hidden">
                <ul
                    ref={scrollerRef}
                    className="flex flex-nowrap gap-4 p-4 max-w-xl mx-auto animate-scroll"
                >
                    <li className="bg-primary-400 text-white p-4 rounded-md  relative">
                        <Image
                            src={seoul}
                            alt="Seoul National Univ Logo"
                            fill
                        />
                    </li>
                    <li className="bg-primary-400 text-white p-4 rounded-md ">
                        <Image
                            src={yonsei}
                            alt="Seoul National Univ Logo"
                            fill
                        />
                    </li>
                    <li className="bg-primary-400 text-white p-4 rounded-md ">
                        <Image
                            src={ministry}
                            alt="Seoul National Univ Logo"
                            fill
                        />
                    </li>
                    <li className="bg-primary-400 text-white p-4 rounded-md ">
                        <Image
                            src={straumann}
                            alt="Seoul National Univ Logo"
                            fill
                        />
                    </li>
                    <li className="bg-primary-400 text-white p-4 rounded-md ">
                        <Image
                            src={ostem}
                            alt="Seoul National Univ Logo"
                            fill
                        />
                    </li>
                    <li className="bg-primary-400 text-white p-4 rounded-md ">
                        <Image src={dio} alt="Seoul National Univ Logo" fill />
                    </li>
                </ul>
            </div>
        </section>
    );
}
