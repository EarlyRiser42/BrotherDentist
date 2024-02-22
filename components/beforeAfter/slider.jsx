import React, { useState, useRef } from 'react';
import Image from 'next/image';

const Slider = ({ beforeImage, afterImage }) => {
    const [sliderPosition, setSliderPosition] = useState(50); // 초기 슬라이더 위치를 50%로 설정
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const container = containerRef.current;
        if (container) {
            const rect = container.getBoundingClientRect();
            const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
            setSliderPosition(newPosition);
        }
    };

    return (
        <div
            className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
            ref={containerRef}
            onMouseMove={handleMouseMove}
        >
            <div
                className="absolute inset-0 z-10"
                style={{ width: `${sliderPosition}%` }}
            >
                <Image
                    src={beforeImage}
                    alt="Before"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <Image
                src={afterImage}
                alt="After"
                layout="fill"
                objectFit="cover"
            />
            <div
                className="slider-handle absolute inset-y-0 bg-white bg-opacity-50 cursor-col-resize z-20"
                style={{ left: `${sliderPosition}%`, width: '2px' }}
            ></div>
        </div>
    );
};

export default Slider;
