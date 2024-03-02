import React from 'react';

export default function CategoryText({ page }) {
    return (
        <section
            aria-label="cosmeticDentistry"
            className="w-full h-auto flex flex-col justify-start items-center mt-8"
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
                <div>
                    <p className="word-break-keep leading-4 inline">
                        {page.cosmeticDentistry.categoryText.p1}
                    </p>
                    <p className="word-break-keep leading-4 inline">
                        {page.cosmeticDentistry.categoryText.p2}
                    </p>
                </div>
            </div>
        </section>
    );
}
