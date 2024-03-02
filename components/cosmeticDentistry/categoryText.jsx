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
                        <p className="word-break-keep leading-5 inline w-full md:w-2/5 text-base cs:text-lg sm:text-xl md:leading-8">
                            {page.cosmeticDentistry.categoryText.p1}
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <h4 className="font-semibold text-xl cs:text-xl sm:text-2xl mb-4">
                            {page.cosmeticDentistry.categoryText.h4_2}
                        </h4>
                        <p className="word-break-keep leading-5 inline w-full md:w-2/5 text-base cs:text-lg sm:text-xl md:leading-8">
                            {page.cosmeticDentistry.categoryText.p2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
