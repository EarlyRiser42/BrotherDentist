'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import pro1 from '@/public/proSection/pro1.jpg';
import pro2 from '@/public/proSection/pro2.jpg';
import pro3 from '@/public/proSection/pro3.jpg';

export default function ProSection({ page }) {
    const [isVisibleOne, setIsVisibleOne] = useState(false);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    const [isVisibleThree, setIsVisibleThree] = useState(false);
    const divRefOne = useRef(null);
    const divRefTwo = useRef(null);
    const divRefThree = useRef(null);

    useEffect(() => {
        const createObserver = (ref, setShow, threshold) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setShow(true);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold,
                },
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        };

        // 각 그룹별 다른 threshold 값
        const cleanupOne = createObserver(divRefOne, setIsVisibleOne, 0.5);
        const cleanupTwo = createObserver(divRefTwo, setIsVisibleTwo, 0.5);
        const cleanupThree = createObserver(
            divRefThree,
            setIsVisibleThree,
            0.5,
        );

        return () => {
            cleanupOne();
            cleanupTwo();
            cleanupThree();
        };
    }, []);

    return (
        <section
            aria-label="proSection"
            className="flex flex-col justify-start items-center w-full h-auto mt-20 cxl:mt-32"
        >
            <div className="flex flex-col items-start w-9/10 clg:min-w-970 clg:max-w-1250 cxl:w-85/100">
                <h1 className="font-bold mb-1 w-full text-2xl sm:text-3xl lg:text-4xl lg:w-4/5 cxl:text-5xl">
                    {page.home.proSection.proSection_h1}
                </h1>
                <h4 className="font-medium w-full text-xl sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                    {page.home.proSection.proSection_h4}
                </h4>
            </div>
            <div
                ref={divRefOne}
                className="w-9/10  mt-12 clg:h-360 clg:min-w-940 clg:max-w-1250 clg:w-9/10
            cxl:w-85/100 cxl:h-410"
            >
                <div
                    className={`w-full h-full animate-fadeInHome flex flex-col justify-center items-center clg:flex-row ${!isVisibleOne ? 'hidden' : ''}`}
                >
                    <div className="w-full flex flex-col justify-center items-start lg:items-center clg:w-1/2">
                        <h4 className="font-bold text-lg mb-4 sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                            {page.home.proSection.advancedTechAndEquipment.h4}
                        </h4>
                        {page.home.proSection.advancedTechAndEquipment.spans.map(
                            (span, index) => (
                                <span
                                    key={index}
                                    className="text-base mb-0.5 lg:mb-1 sm:text-lg lg:text-xl lg:w-4/5 cxl:text-2xl"
                                >
                                    {span}
                                </span>
                            ),
                        )}
                    </div>
                    <div className="relative w-full h-72 rounded-3xl mt-4 cs:h-80 sm:h-96 cmd:h-410 clg:ml-6 clg:w-1/2 clg:mt-0 clg:h-full">
                        <Image
                            className="rounded-3xl"
                            src={pro1}
                            alt="pro1"
                            fill
                            sizes="(max-width: 1024px) 50vw, 100vw"
                        />
                    </div>
                </div>
            </div>

            <div
                ref={divRefTwo}
                className="w-9/10 flex flex-col justify-center items-center mt-12 clg:mt-32 clg:h-360 clg:min-w-940 clg:max-w-1250 clg:w-9/10 clg:flex-row
            cxl:w-85/100 cxl:h-410"
            >
                <div
                    className={`w-full h-full animate-fadeInHome flex flex-col justify-center items-center clg:flex-row ${!isVisibleTwo ? 'hidden' : ''}`}
                >
                    <div className="w-full flex flex-col justify-center items-start lg:items-center clg:w-1/2 clg:order-2">
                        <h4 className="font-bold text-lg mb-4 sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                            {page.home.proSection.customizedTreatment.h4}
                        </h4>
                        {page.home.proSection.customizedTreatment.spans.map(
                            (span, index) => (
                                <span
                                    key={index}
                                    className="text-base mb-0.5 lg:mb-1 sm:text-lg lg:text-xl lg:w-4/5 cxl:text-2xl"
                                >
                                    {span}
                                </span>
                            ),
                        )}
                    </div>
                    <div className="relative w-full h-72 rounded-3xl mt-4  cs:h-80 sm:h-96 cmd:h-410 clg:ml-6 clg:w-1/2 clg:mt-0 clg:h-full clg:order-1 clg:ml-0">
                        <Image
                            className="rounded-3xl"
                            src={pro2}
                            alt="pro1"
                            fill
                            sizes="(max-width: 1024px) 50vw, 100vw"
                        />
                    </div>
                </div>
            </div>
            <div
                ref={divRefThree}
                className="w-9/10 flex flex-col justify-center items-center mt-12 clg:mt-32 clg:h-360 clg:min-w-940 clg:max-w-1250 clg:w-9/10 clg:flex-row
            cxl:w-85/100 cxl:h-410"
            >
                <div
                    className={`w-full h-full animate-fadeInHome flex flex-col justify-center items-center clg:flex-row ${!isVisibleThree ? 'hidden' : ''}`}
                >
                    <div className="w-full flex flex-col justify-center items-start lg:items-center clg:w-1/2">
                        <h4 className="font-bold text-lg mb-4 sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                            {page.home.proSection.professionalMedicalTeam.h4}
                        </h4>
                        {page.home.proSection.professionalMedicalTeam.spans.map(
                            (span, index) => (
                                <span
                                    key={index}
                                    className="text-base mb-0.5 lg:mb-1 sm:text-lg lg:text-xl lg:w-4/5 cxl:text-2xl"
                                >
                                    {span}
                                </span>
                            ),
                        )}
                    </div>
                    <div className="relative w-full h-72 rounded-3xl mt-4  cs:h-80 sm:h-96 cmd:h-410 clg:ml-6 clg:w-1/2 clg:mt-0 clg:h-full">
                        <Image
                            className="rounded-3xl"
                            src={pro3}
                            alt="pro1"
                            fill
                            sizes="(max-width: 1024px) 50vw, 100vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
