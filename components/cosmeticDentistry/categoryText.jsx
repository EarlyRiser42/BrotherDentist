import React from 'react';

export default function CategoryText({ page }) {
    return (
        <section
            aria-label="cosmeticDentistry"
            className="w-full h-auto flex flex-col justify-start items-center py-16 sm:py-20 lg:py-24 cxl:py-28"
        >
            <div className="flex flex-col items-start w-9/10 clg:min-w-970 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400">
                <div className="w-full flex flex-col">
                    <h1 className="font-bold mb-1 w-full text-2xl sm:text-3xl lg:text-4xl lg:w-4/5 cxl:text-5xl">
                        {page.cosmeticDentistry.categoryText.h1}
                    </h1>
                    <h4 className="font-medium w-full text-xl sm:text-2xl lg:text-3xl lg:w-4/5 mt-2 cxl:text-4xl">
                        {page.cosmeticDentistry.categoryText.h2}
                    </h4>
                </div>
                <div className="flex flex-col mt-12 md:flex-row md:gap-x-12 md:justify-between">
                    <div>
                        <h4 className="font-semibold text-xl cs:text-xl sm:text-2xl mb-4">
                            {page.cosmeticDentistry.categoryText.h4_1}
                        </h4>
                        <p className="break-keep leading-5 inline w-full md:w-2/5 text-base cs:text-lg sm:text-xl md:leading-8">
                            {page.cosmeticDentistry.categoryText.p1}
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <h4 className="font-semibold text-xl cs:text-xl sm:text-2xl mb-4">
                            {page.cosmeticDentistry.categoryText.h4_2}
                        </h4>
                        <p className="break-keep leading-5 inline w-full md:w-2/5 text-base cs:text-lg sm:text-xl md:leading-8">
                            {page.cosmeticDentistry.categoryText.p2}
                        </p>
                    </div>
                </div>
            </div>
            <div className="pt-12 sm:pt-20 grid grid-rows-6 grid-cols-12 gap-4 w-9/10 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400 lg:h-430 cxl:h-490 c2xl:h-510 c3xl:h-590">
                <div className="py-6 clg:py-0 col-span-12 row-span-2 clg:col-span-4 clg:row-span-6 bg-light_blue flex items-center justify-center rounded-2xl">
                    <div className="flex flex-col w-9/10 cs:w-4/5 justify-between items-center">
                        <div className="flex flex-col items-center">
                            <h1 className="text-center break-keep font-bold text-white text-lg cs:text-xl sm:text-2xl cxl:text-3xl c2xl:text-4xl">
                                {
                                    page.cosmeticDentistry.categoryText.section1
                                        .h1
                                }
                            </h1>
                            <h2 className="text-center break-keep font-semibold clg:mt-3 text-white text-base cs:text-lg sm:text-xl cxl:text-2xl c2xl:text-3xl">
                                {
                                    page.cosmeticDentistry.categoryText.section1
                                        .h2
                                }
                            </h2>
                        </div>
                        <div className="flex flex-col items-center mt-3">
                            <span className="text-center break-keep text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section1
                                        .span1
                                }
                            </span>
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section1
                                        .span2
                                }
                            </span>
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section1
                                        .span3
                                }
                            </span>
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section1
                                        .span4
                                }
                            </span>
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section1
                                        .span5
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="py-6 clg:py-0 col-span-12 row-span-2 clg:col-span-4 clg:row-span-6 bg-red_100 flex items-center justify-center rounded-2xl">
                    <div className="flex flex-col w-9/10 cs:w-4/5 justify-between items-center">
                        <div className="flex flex-col items-center">
                            <h1 className="text-center break-keep font-bold text-white text-lg cs:text-xl sm:text-2xl cxl:text-3xl c2xl:text-4xl">
                                {
                                    page.cosmeticDentistry.categoryText.section2
                                        .h1
                                }
                            </h1>
                            <h2 className="text-center break-keep font-semibold clg:mt-3 text-white text-base cs:text-lg sm:text-xl cxl:text-2xl c2xl:text-3xl">
                                {
                                    page.cosmeticDentistry.categoryText.section2
                                        .h2
                                }
                            </h2>
                        </div>
                        <div className="flex flex-col items-center mt-3">
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section2
                                        .span1
                                }
                            </span>
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section2
                                        .span2
                                }
                            </span>
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section2
                                        .span3
                                }
                            </span>
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section2
                                        .span4
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="py-6 clg:py-0 col-span-12 row-span-2 clg:col-span-4 clg:row-span-6 bg-green_500 flex items-center justify-center rounded-2xl">
                    <div className="flex flex-col w-9/10 cs:w-4/5 justify-between items-center">
                        <div className="flex flex-col items-center">
                            <h1 className="text-center break-keep font-bold text-white text-lg cs:text-xl sm:text-2xl cxl:text-3xl c2xl:text-4xl">
                                {
                                    page.cosmeticDentistry.categoryText.section3
                                        .h1
                                }
                            </h1>
                            <h2 className="text-center break-keep font-semibold clg:mt-3 text-white text-base cs:text-lg sm:text-xl cxl:text-2xl c2xl:text-3xl">
                                {
                                    page.cosmeticDentistry.categoryText.section3
                                        .h2
                                }
                            </h2>
                        </div>
                        <div className="flex flex-col items-center mt-3">
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section3
                                        .span1
                                }
                            </span>
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section3
                                        .span2
                                }
                            </span>
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section3
                                        .span3
                                }
                            </span>
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section3
                                        .span4
                                }
                            </span>
                            <span className="text-center break-keep  text-white text-sm cs:text-base sm:text-lg cxl:text-xl c2xl:text-2xl">
                                {
                                    page.cosmeticDentistry.categoryText.section3
                                        .span5
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
