'use client';
import { useEffect, useRef, useState } from 'react';

export default function ProSection({ lang, page }) {
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
                rootMargin: '50px',
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
            className="w-full flex flex-col justify-start items-center"
        >
            <div className="relative w-9/10 mb-2 sm:mb-4 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400">
                <div
                    ref={textRef}
                    className="w-full rounded-3xl py-20 cs:py-24 clg:py-32 text-center flex flex-col justify-center items-center bg-light_blue"
                >
                    <p
                        className={`z-[2] word-break-keep font-bold text-xl cs:text-2xl sm:text-4xl lg:text-5xl cxl:text-6xl text-transparent bg-cosmeticDentistry-pro bg-auto-200 bg-clip-text ${isVisible ? 'animate-textFillUp' : ''}`}
                    >
                        {page.cosmeticDentistry.pro1
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