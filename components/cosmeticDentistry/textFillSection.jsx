'use client';
import { useEffect, useRef, useState } from 'react';

export default function TextFillSection({ page }) {
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1,
            },
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <section
            aria-label="cosmeticDentistry"
            className="w-full flex flex-col justify-start items-center py-16 sm:py-20 lg:py-24 cxl:py-28"
        >
            <div className="relative w-9/10 mb-2 sm:mb-4 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400">
                <div
                    ref={textRef}
                    className="w-full rounded-3xl py-20 cs:py-24 clg:py-28 text-center flex flex-col justify-center items-center bg-light_blue"
                >
                    <p
                        className={`z-[2] word-break-keep font-bold text-3xl cs:text-4xl sm:text-5xl lg:text-6xl cxl:text-7xl c2xl:text-8xl text-transparent bg-cosmeticDentistry-pro bg-auto-200 bg-clip-text ${isVisible ? 'animate-textFillUp' : ''}`}
                    >
                        {page.cosmeticDentistry.textFill
                            .split('.')
                            .map((part, index) => (
                                <span
                                    key={index}
                                    className="mb-4 clg:mb-8 block"
                                >
                                    {part}.
                                </span>
                            ))}
                    </p>
                </div>
            </div>
        </section>
    );
}
