'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import pfp1 from '@/public/speechBalloon/balloon (1).jpg';
import pfp2 from '@/public/speechBalloon/balloon (2).jpg';
import pfp3 from '@/public/speechBalloon/balloon (3).jpg';
import pfp4 from '@/public/speechBalloon/balloon (4).jpg';
import pfp5 from '@/public/speechBalloon/balloon (5).jpg';
import pfp6 from '@/public/speechBalloon/balloon (6).jpg';
import pfp7 from '@/public/speechBalloon/balloon (7).jpg';
import pfp8 from '@/public/speechBalloon/balloon (8).jpg';
import pfp9 from '@/public/speechBalloon/balloon (9).jpg';
import pfp10 from '@/public/speechBalloon/balloon (10).jpg';
import pfp11 from '@/public/speechBalloon/balloon (11).jpg';
import pfp12 from '@/public/speechBalloon/balloon (12).jpg';
import pfp13 from '@/public/speechBalloon/balloon (13).jpg';
import pfp14 from '@/public/speechBalloon/balloon (14).jpg';
import pfp15 from '@/public/speechBalloon/balloon (15).jpg';
import pfp16 from '@/public/speechBalloon/balloon (16).jpg';
import pfp17 from '@/public/speechBalloon/balloon (17).jpg';

export default function SpeechBalloon({ page }) {
    // 숫자 애니메이션
    const [countFront, setCountFront] = useState(10);
    const [countBack, setCountBack] = useState(122);
    const counterRef = useRef(null);

    const speed = 20;
    const targetFront = 213;
    const targetBack = 289;

    // 말풍선 애니메이션
    const [showGroupOne, setShowGroupOne] = useState(false);
    const [showGroupTwo, setShowGroupTwo] = useState(false);
    const [showGroupThree, setShowGroupThree] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        let incrementFront = Math.floor(targetFront / speed);
                        let incrementBack = Math.floor(targetBack / speed);
                        // countFront를 업데이트하는 함수
                        const updateCountFront = () => {
                            setCountFront((prevCount) => {
                                const updatedCount = prevCount + incrementFront;
                                if (updatedCount < targetFront) {
                                    setTimeout(updateCountFront, 30);
                                    return updatedCount;
                                } else {
                                    return targetFront;
                                }
                            });
                        };
                        // countBack를 업데이트하는 함수
                        const updateCountBack = () => {
                            setCountBack((prevCount) => {
                                const updatedCount = prevCount + incrementBack;
                                if (updatedCount < targetBack) {
                                    setTimeout(updateCountBack, 30);
                                    return updatedCount;
                                } else {
                                    return targetBack;
                                }
                            });
                        };
                        updateCountBack();
                        updateCountFront();
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.9,
            },
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

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
        const cleanupOne = createObserver(counterRef, setShowGroupOne, 0.1);
        const cleanupTwo = createObserver(counterRef, setShowGroupTwo, 0.5);
        const cleanupThree = createObserver(counterRef, setShowGroupThree, 1);
        return () => {
            cleanupOne();
            cleanupTwo();
            cleanupThree();
        };
    }, []);

    return (
        <section
            aria-label="speechBalloon"
            className="flex flex-col justify-start items-center w-full h-330 mt-16 sm:mt-20 lg:mt-24 cxl:mt-28
            cs:h-380 sm:h-430 clg:h-510 cxl:h-586"
        >
            <div className="flex flex-col justify-center w-9/10 h-auto mb-2 sm:mb-4 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400">
                <h1 className="font-bold mb-1 w-full text-2xl sm:text-3xl lg:text-4xl lg:w-4/5 cxl:text-5xl">
                    {page.home.speechBalloon.h1}
                </h1>
                <h2 className="font-medium w-full mt-2 text-xl sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                    {page.home.speechBalloon.h2
                        .split(' ')
                        .map((part, index) => (
                            <span key={index}>
                                {part}
                                {index === 4 ? (
                                    <span className="block cmd:inline"> </span>
                                ) : (
                                    ' '
                                )}
                            </span>
                        ))}
                </h2>
            </div>
            <div
                ref={counterRef}
                className="w-full h-full relative bg-light_blue cs:rounded-3xl flex justify-center items-center overflow-hidden
            cs:w-9/10 clg:w-88/100 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400"
            >
                <div className="flex flex-col items-center z-[5]">
                    <h3 className="text-white text-lg mb-2 font-bold cs:text-2xl sm:text-4xl lg:text-5xl cxl:text-7xl">
                        {page.home.speechBalloon.h3}
                    </h3>
                    <h4 className="text-white text-center text-4xl font-bold cs:text-5xl sm:text-7xl lg:text-8xl cxl:text-9xl">
                        {countFront}
                        <span className="text-white text-lg font-bold cs:text-2xl sm:text-4xl lg:text-5xl cxl:text-7xl">
                            ,
                        </span>
                        {countBack}
                        <span className="text-white text-lg font-bold cs:text-2xl sm:text-4xl lg:text-5xl cxl:text-7xl">
                            {page.home.speechBalloon.h4}
                        </span>
                    </h4>
                </div>
                <div
                    className={`${showGroupOne ? 'block w-full h-full' : 'hidden'} absolute`}
                >
                    <Balloon
                        img={pfp1}
                        balloon={page.home.speechBalloon.balloons[0]}
                        position={{ top: '5%', left: '-10%' }}
                    />
                    <Balloon
                        img={pfp2}
                        balloon={page.home.speechBalloon.balloons[1]}
                        position={{ top: '16%', left: '8%' }}
                    />
                    <Balloon
                        img={pfp3}
                        balloon={page.home.speechBalloon.balloons[2]}
                        position={{ top: '-3%', left: '20%' }}
                    />
                    <Balloon
                        img={pfp4}
                        balloon={page.home.speechBalloon.balloons[3]}
                        position={{ top: '17%', left: '65%' }}
                    />
                    <Balloon
                        img={pfp5}
                        balloon={page.home.speechBalloon.balloons[4]}
                        position={{ top: '4%', left: '90%' }}
                    />
                </div>
                <div
                    className={`${showGroupTwo ? 'block w-full h-full' : 'hidden'} absolute`}
                >
                    <Balloon
                        img={pfp6}
                        balloon={page.home.speechBalloon.balloons[5]}
                        position={{ top: '64%', left: '-15%' }}
                    />
                    <Balloon
                        img={pfp7}
                        balloon={page.home.speechBalloon.balloons[6]}
                        position={{ top: '59%', left: '82%' }}
                    />
                    <Balloon
                        img={pfp8}
                        balloon={page.home.speechBalloon.balloons[7]}
                        position={{ top: '39%', left: '80%' }}
                    />
                    <Balloon
                        img={pfp9}
                        balloon={page.home.speechBalloon.balloons[8]}
                        position={{ top: '72%', left: '45%' }}
                    />
                    <Balloon
                        img={pfp10}
                        balloon={page.home.speechBalloon.balloons[9]}
                        position={{ top: '80%', left: '1%' }}
                    />
                    <Balloon
                        img={pfp11}
                        balloon={page.home.speechBalloon.balloons[10]}
                        position={{ top: '85%', left: '60%' }}
                    />
                </div>
                <div
                    className={`${showGroupThree ? 'hidden sm:block w-full h-full' : 'hidden'} absolute`}
                >
                    <Balloon
                        img={pfp12}
                        balloon={page.home.speechBalloon.balloons[11]}
                        position={{ top: '39%', left: '3%' }}
                    />
                    <Balloon
                        img={pfp13}
                        balloon={page.home.speechBalloon.balloons[12]}
                        position={{ top: '67%', left: '16%' }}
                    />
                    <Balloon
                        img={pfp14}
                        balloon={page.home.speechBalloon.balloons[13]}
                        position={{ top: '95%', left: '31%' }}
                    />
                    <Balloon
                        img={pfp15}
                        balloon={page.home.speechBalloon.balloons[14]}
                        position={{ top: '75%', left: '90%' }}
                    />
                    <Balloon
                        img={pfp16}
                        balloon={page.home.speechBalloon.balloons[15]}
                        position={{ top: '5%', left: '60%' }}
                    />
                    <Balloon
                        img={pfp17}
                        balloon={page.home.speechBalloon.balloons[16]}
                        position={{ top: '12%', left: '34%' }}
                    />
                </div>
            </div>
        </section>
    );
}

const Balloon = ({ img, balloon, position }) => {
    const { top, bottom, left, right } = position;

    const style = {
        top,
        bottom,
        left,
        right,
    };

    return (
        <div
            className="absolute flex bg-white rounded-3xl w-40 h-auto py-1 shadow-speechBalloon animate-balloonAppear"
            style={style}
        >
            <div className="w-10 h-10 flex justify-center items-center ml-2">
                <div className="w-full aspect-square relative">
                    <Image
                        src={img}
                        alt={balloon.nickname}
                        fill
                        sizes="(max-width: 768px) 2.5rem, (max-width: 1200px) 2.5rem, 2.5rem"
                        className="rounded-full"
                    />
                </div>
            </div>
            <div className="w-3/4 h-full flex flex-col ml-2 justify-center">
                <span className="font-bold text-black text-sm">
                    {balloon.nickname}
                </span>
                <span className="text-black text-xs">{balloon.message}</span>
            </div>
        </div>
    );
};
