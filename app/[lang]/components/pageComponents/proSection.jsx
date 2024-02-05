import Image from 'next/image';
import React from 'react';
import pro1 from '@/public/pro1.jpg';
import pro2 from '@/public/pro2.jpg';
import pro3 from '@/public/pro3.jpg';

export default function proSection({ page }) {
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
                className="w-9/10 flex flex-col justify-center items-center mt-12 clg:h-360 clg:min-w-940 clg:max-w-1250 clg:w-9/10 clg:flex-row
            cxl:w-85/100 cxl:h-410"
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
            <div
                className="w-9/10 flex flex-col justify-center items-center mt-12 clg:mt-32 clg:h-360 clg:min-w-940 clg:max-w-1250 clg:w-9/10 clg:flex-row
            cxl:w-85/100 cxl:h-410"
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
            <div
                className="w-9/10 flex flex-col justify-center items-center mt-12 clg:mt-32 clg:h-360 clg:min-w-940 clg:max-w-1250 clg:w-9/10 clg:flex-row
            cxl:w-85/100 cxl:h-410"
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
        </section>
    );
}
