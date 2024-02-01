import Image from 'next/image';

export default function proSection({ page }) {
    return (
        <section
            aria-label="Image Slider"
            className="relative flex flex-col justify-center items-center my-8 w-full min-h-250 h-65dvh
            cs:h-75dvh
            sm:min-h-480 sm:h-25dvh sm:my-16
            lg:my-4 cxl:my-0 cxl:min-h-640 cxl:h-75vh"
        >
            <div className="flex flex-col items-center w-full mb-2 cs:mb-4">
                <h1 className="font-bold mb-1 w-9/10 text-lg sm:text-xl lg:text-2xl lg:w-4/5 cxl:text-3xl">
                    {page.home.proSection_h1}
                </h1>
                <h4 className="font-medium w-9/10 text-base sm:text-lg lg:text-xl lg:w-4/5 cxl:text-2xl">
                    {page.home.proSection_h4}
                </h4>
            </div>
        </section>
    );
}
