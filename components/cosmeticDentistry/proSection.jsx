'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import thunder from '@/public/cosmeticDentistry/thunder.png';
import {
    AnimatedCheckBox,
    LikeContainer,
} from '@/components/cosmeticDentistry/icons';

export default function ProSection({ page }) {
    // pro section들 애니메이션
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

        const cleanupOne = createObserver(divRefOne, setIsVisibleOne, 0.9);
        const cleanupTwo = createObserver(divRefTwo, setIsVisibleTwo, 0.9);
        const cleanupThree = createObserver(
            divRefThree,
            setIsVisibleThree,
            0.9,
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
            className="flex flex-col justify-start items-center w-full h-auto py-16 sm:py-20 lg:py-24 cxl:py-28 bg-light_gray dark:bg-gray"
        >
            <div className="flex flex-col items-start w-9/10 clg:min-w-970 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400">
                <div className="w-full flex flex-col">
                    <h1 className="font-bold mb-1 w-full text-2xl sm:text-3xl lg:text-4xl lg:w-4/5 cxl:text-5xl">
                        {page.cosmeticDentistry.proSection.proSection_h1}
                    </h1>
                    <h4 className="font-medium w-full text-xl sm:text-2xl lg:text-3xl lg:w-4/5 mt-2 cxl:text-4xl">
                        {page.cosmeticDentistry.proSection.proSection_h4}
                    </h4>
                </div>
            </div>
            <div
                className="w-9/10 mt-12 clg:h-360 clg:min-w-940 clg:max-w-1250 clg:w-9/10
            cxl:w-85/100 cxl:h-410 c2xl:w-1900 c2xl:h-490 c3xl:w-2400 c3xl:h-430"
            >
                <div className="w-full h-full flex flex-col justify-center items-center cmd:flex-row">
                    <div className="w-full flex flex-col justify-center items-start lg:items-center clg:w-1/2">
                        <h4 className="font-bold text-xl mb-0.5 lg:mb-1 sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                            {
                                page.cosmeticDentistry.proSection
                                    .advancedTechAndEquipment.h4
                            }
                        </h4>
                        {page.cosmeticDentistry.proSection.advancedTechAndEquipment.spans.map(
                            (span, index) => (
                                <span
                                    key={index}
                                    className="text-base mb-0.5 lg:mb-1 cs:text-lg sm:text-xl lg:text-xl lg:w-4/5 cxl:text-2xl"
                                >
                                    {span}
                                </span>
                            ),
                        )}
                    </div>
                    <div
                        ref={divRefOne}
                        className="bg-white flex flex-col justify-evenly items-center w-full h-52 rounded-3xl mt-4 cs:h-60 sm:h-80 cmd:h-96 clg:w-490 clg:mt-0 clg:h-80  shadow-speechBalloon dark:speechBalloonBlack"
                    >
                        <div className="relative aspect-square w-12 cs:w-16 clg:w-20">
                            <div
                                className={`absolute aspect-square w-full rounded-full bg-yellow ${isVisibleOne ? 'animate-balloonAppear' : 'hidden'}`}
                            >
                                <Image
                                    src={thunder}
                                    alt="thunder"
                                    fill
                                    sizes="2.5rem"
                                    className=" aspect-square scale-75"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="text-black font-medium cs:text-lg sm:text-2xl cmd:text-xl clg:text-2xl ">
                                {
                                    page.cosmeticDentistry.proSection
                                        .advancedTechAndEquipment.spanBox1
                                }
                            </span>
                            <br />
                            <span className="mt-2 block text-black font-medium cs:text-lg sm:text-2xl cmd:text-xl clg:text-2xl">
                                {
                                    page.cosmeticDentistry.proSection
                                        .advancedTechAndEquipment.spanBox2
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-9/10 mt-12 clg:h-360 clg:min-w-940 clg:max-w-1250 clg:w-9/10
            cxl:w-85/100 cxl:h-410 c2xl:w-1900 c2xl:h-490 c3xl:w-2400 c3xl:h-430"
            >
                <div className="w-full h-full flex flex-col justify-center items-center cmd:flex-row">
                    <div className="w-full flex flex-col justify-center items-start cmd:ml-6 cmd:items-center cmd:w-1/2 cmd:order-2">
                        <h4 className="font-bold text-lg mb-0.5 lg:mb-1  sm:text-2xl lg:text-3xl cmd:w-4/5 cxl:text-4xl">
                            {
                                page.cosmeticDentistry.proSection
                                    .customizedTreatment.h4
                            }
                        </h4>
                        {page.cosmeticDentistry.proSection.customizedTreatment.spans.map(
                            (span, index) => (
                                <span
                                    key={index}
                                    className="text-base mb-0.5 lg:mb-1 cs:text-lg sm:text-lg lg:text-xl cmd:w-4/5 cxl:text-2xl"
                                >
                                    {span}
                                </span>
                            ),
                        )}
                    </div>
                    <div className="w-full cmd:w-1/2">
                        <div
                            ref={divRefTwo}
                            className="bg-white flex flex-col justify-evenly items-center w-full h-52 rounded-3xl mt-4 cs:h-60 sm:h-80 clg:max-w-490 clg:mt-0 clg:h-80  shadow-speechBalloon dark:speechBalloonBlack"
                        >
                            <div className="relative aspect-square w-12 cs:w-16 clg:w-20">
                                <AnimatedCheckBox isVisibleTwo={isVisibleTwo} />
                            </div>
                            <div className="text-center">
                                <span className="text-black font-medium cs:text-lg sm:text-2xl cmd:text-xl clg:text-2xl ">
                                    {
                                        page.cosmeticDentistry.proSection
                                            .customizedTreatment.spanBox1
                                    }
                                </span>
                                <br />
                                <span className="mt-2 block text-black font-medium cs:text-lg sm:text-2xl cmd:text-xl clg:text-2xl">
                                    {
                                        page.cosmeticDentistry.proSection
                                            .customizedTreatment.spanBox2
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-9/10 mt-12 clg:h-360 clg:min-w-940 clg:max-w-1250 clg:w-9/10
            cxl:w-85/100 cxl:h-410 c2xl:w-1900 c2xl:h-490 c3xl:w-2400 c3xl:h-430"
            >
                <div className="w-full h-full flex flex-col justify-center items-center cmd:flex-row">
                    <div className="w-full flex flex-col justify-center items-start lg:items-center clg:w-1/2">
                        <h4 className="font-bold text-lg mb-0.5 lg:mb-1  sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                            {
                                page.cosmeticDentistry.proSection
                                    .professionalMedicalTeam.h4
                            }
                        </h4>
                        {page.cosmeticDentistry.proSection.professionalMedicalTeam.spans.map(
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
                    <div
                        ref={divRefThree}
                        className="bg-white flex flex-col justify-evenly items-center w-full h-52 rounded-3xl mt-4 cs:h-60 sm:h-80 clg:w-490 clg:mt-0 clg:h-80  shadow-speechBalloon dark:speechBalloonBlack"
                    >
                        <div className="relative aspect-square w-12 cs:w-16 clg:w-20">
                            <LikeContainer isVisibleThree={isVisibleThree} />
                        </div>
                        <div className="text-center">
                            <span className="text-black font-medium cs:text-lg sm:text-2xl cmd:text-xl clg:text-2xl ">
                                {
                                    page.cosmeticDentistry.proSection
                                        .professionalMedicalTeam.spanBox1
                                }
                            </span>
                            <br />
                            <span className="mt-2 block text-black font-medium cs:text-lg sm:text-2xl cmd:text-xl clg:text-2xl">
                                {
                                    page.cosmeticDentistry.proSection
                                        .professionalMedicalTeam.spanBox2
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
