import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import arrow from '@/public/arrow.png';

const ReactCompareSlider = ({ beforeImage, afterImage, blurImage }) => {
    const [position, setPosition] = useState(50); // 슬라이더의 위치를 % 단위로 관리
    const sliderRef = useRef(null); // 슬라이더의 전체 컨테이너 참조

    // 마우스 이동 이벤트 핸들러
    const handleMouseMove = (e) => {
        if (!sliderRef.current) return;

        const { left, width } = sliderRef.current.getBoundingClientRect();
        const newPosition = ((e.clientX - left) / width) * 100;
        setPosition(newPosition);
    };

    // touch 이벤트를 위한 핸들러
    const handleTouchMove = (e) => {
        if (!sliderRef.current) return;

        const touch = e.touches[0];
        const { left, width } = sliderRef.current.getBoundingClientRect();
        const newPosition = ((touch.clientX - left) / width) * 100;
        setPosition(newPosition);
    };

    // 마우스 이벤트 등록 및 해제
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        slider.addEventListener('mousemove', handleMouseMove);
        slider.addEventListener('touchmove', handleTouchMove);

        return () => {
            slider.removeEventListener('mousemove', handleMouseMove);
            slider.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div
            ref={sliderRef}
            className="relative w-full h-72 sm:h-80 cmd:h-96 clg:h-330 cxl:h-410 c2xl:h-430 c3xl:h-490 overflow-hidden rounded-3xl"
            style={{ touchAction: 'none' }} // iOS Safari에서 스크롤을 방지
        >
            <div
                className="absolute inset-0 z-[2]"
                style={{
                    clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0% 100%)`,
                }}
            >
                <div className="absolute top-2 left-2 z-[3] rounded-3xl bg-black text-white w-auto px-2 text-sm cs:text-base sm:text-lg">
                    Before
                </div>
                <Image
                    src={beforeImage}
                    alt="Before"
                    fill
                    className="object-cover"
                    sizes="50vw"
                />
            </div>
            <div className="absolute top-2 right-2 z-[2] rounded-3xl bg-light_blue text-white w-auto px-2 text-sm cs:text-base sm:text-lg">
                After
            </div>
            <div className="absolute bottom-2 right-2 z-[2] rounded-3xl  text-white w-auto px-2 text-xs cs:text-sm sm:text-base clg:text-lg">
                <span>© 2024 HyukPlant. </span>
                <span className="hidden clg:inline">All rights reserved.</span>
            </div>
            <Image
                src={afterImage}
                alt="After"
                fill
                className=" top-0 left-0 object-cover"
            />
            <div
                className="absolute inset-y-0 bg-white bg-opacity-30 cursor-col-resize"
                style={{ left: `${position}%`, width: '2px' }}
            >
                <div className="bg-white rounded-full z-[3] w-8 h-8 clg:w-12 clg:h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src={arrow}
                        alt="MovingArrow"
                        width={30}
                        height={30}
                        className="w-6 h-6 clg:w-8 clg:h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                </div>
            </div>
        </div>
    );
};

export default ReactCompareSlider;
