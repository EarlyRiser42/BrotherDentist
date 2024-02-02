import Image from 'next/image';
import React from 'react';
import pro1 from '@/public/pro1.png';

export default function proSection({ page }) {
    return (
        <section
            aria-label="Image Slider"
            className="flex flex-col justify-start items-center w-full h-auto mt-20 cxl:mt-32"
        >
            <div className="flex flex-col items-center w-full">
                <h1 className="font-bold mb-1 w-9/10 text-lg sm:text-xl lg:text-2xl lg:w-4/5 cxl:text-3xl">
                    {page.home.proSection_h1}
                </h1>
                <h4 className="font-medium w-9/10 text-base sm:text-lg lg:text-xl lg:w-4/5 cxl:text-2xl">
                    {page.home.proSection_h4}
                </h4>
            </div>
            <div className="w-full flex flex-col ">
                <div className="w-full flex flex-col items-center">
                    <h4></h4>
                    <br />
                    <span></span>
                    <br />
                    <span></span>
                    <br />
                    <span></span>
                    <br />
                    <span></span>
                </div>
                <div className="relative h-40">
                    <Image className="bg-blue" src={pro1} alt="pro1" fill />
                </div>
            </div>
        </section>
    );
}
