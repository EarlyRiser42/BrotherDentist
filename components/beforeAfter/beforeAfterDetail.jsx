'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import ReactCompareSlider from '@/components/beforeAfter/slider';
import {
    replaceMiddleWithAsterisk,
    timeStampToDate,
    translateService,
} from '@/components/beforeAfter/beforeAfterList';

export default function BeforeAfterDetail({ page, lang, reviewNumber }) {
    const searchParams = useSearchParams();
    const writeObjParam = searchParams.get('writeObj');

    let currentPost = null;

    if (writeObjParam) {
        try {
            currentPost = JSON.parse(decodeURIComponent(writeObjParam));
        } catch (error) {
            console.error('Error parsing writeObj query parameter:', error);
        }
    }

    return (
        <section
            aria-label="beforeAfter"
            className="w-full h-auto flex flex-col justify-start items-center"
        >
            <div className="w-full h-auto clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400 py-4 cs:py-6 ">
                <div className="flex justify-center items-start flex-col px-2 gap-y-1 w-full">
                    <div>
                        <h1 className="font-bold text-xl sm:text-2xl">
                            {replaceMiddleWithAsterisk(
                                currentPost.first_name + currentPost.last_name,
                            )}

                            {page.beforeAfter.h2}
                        </h1>
                    </div>
                    <div>
                        <span> {translateSex(currentPost.sex, lang)} </span>
                        <span className="text-gray_500 dark:text-white dark:text-opacity-30">
                            |
                        </span>
                        <span> {currentPost.age} </span>
                        <span className="text-gray_500 dark:text-white dark:text-opacity-30">
                            |
                        </span>
                        <span> {timeStampToDate(currentPost.date)}</span>
                    </div>
                    <div className="flex justify-start flex-wrap gap-x-2 gap-y-1 mb-2">
                        {currentPost.selectedServices.map((service, index) => (
                            <div
                                key={index}
                                className="whitespace-nowrap w-auto h-8 px-2 py-1 text-xs cs:text-sm border border-black dark:border-white rounded-3xl flex justify-center items-center"
                            >
                                {translateService(service, lang)}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full flex items-center justify-center px-3 font-bold text-sm mt-2 mb-4">
                    <div className="flex-grow h-px bg-gray_300 dark:bg-white dark:bg-opacity-30"></div>
                </div>
                <div className="w-full px-2 rounded-3xl">
                    <ReactCompareSlider
                        beforeImage={currentPost.photos[0]}
                        afterImage={currentPost.photos[1]}
                        blurImage={currentPost.photos[2]}
                    />
                </div>
            </div>
        </section>
    );
}

export function translateSex(sex, lang) {
    // 서비스 이름을 영어와 한국어로 매핑
    const sexNames = {
        female: { en: 'Female', ko: '여' },
        male: { en: 'Male', ko: '남' },
    };

    // 현재 lang에 따라 서비스 이름을 변환
    return sexNames[sex] ? sexNames[sex][lang] : sex;
}
