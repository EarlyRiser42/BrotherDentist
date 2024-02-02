import Image from 'next/image';
import React from 'react';
import pro1 from '@/public/pro1.png';

export default function proSection({ page }) {
    return (
        <section
            aria-label="Image Slider"
            className="flex flex-col justify-start items-center w-full h-auto mt-20 cxl:mt-32"
        >
            <div className="flex flex-col items-center w-9/10">
                <h1 className="font-bold mb-1 w-full text-2xl sm:text-3xl lg:text-4xl lg:w-4/5 cxl:text-5xl">
                    {page.home.proSection_h1}
                </h1>
                <h4 className="font-medium w-full text-xl sm:text-2xl lg:text-3xl lg:w-4/5 cxl:text-4xl">
                    {page.home.proSection_h4}
                </h4>
            </div>
            <div className="w-9/10 flex flex-col justify-center items-center mt-12">
                <div className="w-full flex flex-col justify-center items-start">
                    <h4 className="font-bold text-lg sm:text-2xl lg:text-3xl cxl:text-4xl">
                        최첨단 기술력과 첨단장비
                    </h4>

                    <span className="text-base sm:text-lg lg:text-xl cxl:text-2xl">
                        대학병원급 의료장비로
                    </span>

                    <span className="text-base sm:text-lg lg:text-xl cxl:text-2xl">
                        더 정밀하고 효과적인 치료를 받아보세요.
                    </span>

                    <span className="text-base sm:text-lg lg:text-xl cxl:text-2xl">
                        치료의 불편함을 최소화하고
                    </span>

                    <span className="text-base sm:text-lg lg:text-xl cxl:text-2xl">
                        빠른 회복과 최소한의 불편함을 제공합니다.
                    </span>
                </div>
                <div className="relative w-full h-72 rounded-3xl">
                    <Image
                        className="bg-blue rounded-3xl"
                        src={pro1}
                        alt="pro1"
                        fill
                    />
                </div>
            </div>
        </section>
    );
}
