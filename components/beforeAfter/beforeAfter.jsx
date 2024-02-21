'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { authService as auth } from '@/lib/firebase/config';
import writeIcon from '@/public/writeIcon.svg';

export default function BeforeAfter({ lang, page, pageNumber, writes }) {
    // 보여줄 카테고리 종류(전체, 임플란트 ...)
    const [category, setCategory] = useState('all');
    const filteredWrites =
        category === 'all'
            ? writes
            : writes.filter((item) =>
                  item.selectedServices.some(
                      (service) => service.toLowerCase() === category,
                  ),
              );

    // 페이지 번호와 페이지 당 항목 수를 기반으로 시작 및 종료 인덱스 계산
    const itemsPerPage = 10;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // 페이지 번호 생성
    const totalPages = Math.ceil(writes.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const itemsToShow = filteredWrites
        .slice(startIndex, endIndex)
        .map((item, index) => (
            <Link
                key={index}
                href={{
                    pathname: `/${lang}/beforeAfter/1/${index}`,
                    query: { writeObj: JSON.stringify(item) },
                }}
            >
                <div className="flex justify-between border border-white_700 dark:border-gray py-4 px-1 cs:px-4">
                    <div className="flex flex-col justify-between items-start w-50vw">
                        <h2 className="text-lg cs:text-xl font-semibold mb-2">
                            {replaceMiddleWithAsterisk(
                                item.first_name + item.last_name,
                            )}
                            {page.beforeAfter.h2}
                        </h2>
                        <div className="flex justify-start flex-wrap gap-x-2 gap-y-1 mb-2">
                            {item.selectedServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="whitespace-nowrap w-auto h-8 px-2 py-1 text-xs cs:text-sm border border-black dark:border-white rounded-3xl flex justify-center items-center"
                                >
                                    {translateService(service, lang)}
                                </div>
                            ))}
                        </div>
                        <div></div>
                        <div className="text-xs cs:text-sm text-gray-500 flex justify-evenly mb-1 gap-x-1">
                            <span>{page.beforeAfter.span}</span>
                            <span>|</span>
                            <span>
                                {timeStampToDate(
                                    new Date(item.date.seconds * 1000),
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="w-40vw h-auto cs:w-48  relative">
                        <Image
                            className="rounded-3xl"
                            alt="beforeAfter Preview"
                            src={item.photos[1]}
                            fill
                            sizes="(max-width: 412px) 12rem,  40vw"
                            placeholder="blur"
                            blurDataURL={item.photos[2]}
                        />
                    </div>
                </div>
            </Link>
        ));

    return (
        <section
            aria-label="beforeAfter"
            className="w-full h-auto flex flex-col justify-start items-center"
        >
            <div
                className={`${pageNumber === '1' ? 'relative ' : 'hidden'}
                w-full h-auto clg:min-w-940 clg:max-w-1250 cxl:w-85/100 py-4 cs:py-6 bg-dark_gray dark:bg-gray`}
            >
                <div className="flex flex-wrap justify-start pl-2 gap-x-2 gap-y-1 cs:gap-x-4 ">
                    <button
                        className={`${category === 'all' ? 'border-light_blue text-light_blue' : 'border-black dark:border-white'} 
                    border whitespace-nowrap rounded-3xl px-2 cs:px-4 text-xs cs:text-sm`}
                        onClick={() => {
                            setCategory('all');
                        }}
                    >
                        {page.beforeAfter.button1}
                    </button>
                    <button
                        className={`${category === 'implant' ? 'border-light_blue text-light_blue' : 'border-black dark:border-white'}  
                border whitespace-nowrap border-black dark:border-white rounded-3xl p-1 cs:p-2 text-xs cs:text-sm`}
                        onClick={() => {
                            setCategory('implant');
                        }}
                    >
                        {page.home.specialties.specicalOne}
                    </button>
                    <button
                        className={`${category === 'prosthodontics' ? 'border-light_blue text-light_blue' : 'border-black dark:border-white'}  
                border whitespace-nowrap border-black dark:border-white rounded-3xl p-1 cs:p-2 text-xs cs:text-sm`}
                        onClick={() => {
                            setCategory('prosthodontics');
                        }}
                    >
                        {page.home.specialties.specicalTwo}
                    </button>
                    <button
                        className={`${category === 'cosmeticDentistry' ? 'border-light_blue text-light_blue' : 'border-black dark:border-white'}  
                border whitespace-nowrap border-black dark:border-white rounded-3xl p-1 cs:p-2 text-xs cs:text-sm`}
                        onClick={() => {
                            setCategory('cosmeticDentistry');
                        }}
                    >
                        {page.home.specialties.specialFour}
                    </button>
                    <button
                        className={`${category === 'laminate' ? 'border-light_blue text-light_blue' : 'border-black dark:border-white'}  
                border whitespace-nowrap border-black dark:border-white rounded-3xl p-1 cs:p-2 text-xs cs:text-sm`}
                        onClick={() => {
                            setCategory('laminate');
                        }}
                    >
                        {page.home.specialties.specicalThree}
                    </button>
                </div>
                {auth.currentUser === process.env.NEXT_ADMIN_MAIL_ADDRESS && (
                    <Link href={'/writes'}>
                        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-light_blue text-white px-3 py-2 rounded-3xl text-xs cs:text-sm">
                            글쓰기
                        </button>
                    </Link>
                )}
                <Link href={'/writes'}>
                    <button className="hidden sm:absolute top-1/2 right-0 transform -translate-y-1/2 bg-light_blue text-white px-3 py-2 rounded-3xl text-sm">
                        글쓰기
                    </button>
                </Link>
                <Link href={'/writes'}>
                    <div className="fixed bottom-0 right-0 mb-3 mr-3 bg-light_blue text-white rounded-full w-16 h-16 z-[2]">
                        <div className="w-full h-full flex justify-center items-center">
                            <Image
                                src={writeIcon}
                                alt="Write Icon"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col justify-center w-full h-auto mb-2 sm:mb-4 clg:min-w-940 clg:max-w-1250 cxl:w-85/100">
                {itemsToShow}
            </div>
            <div className="flex gap-x-4 mt-12 mb-8 cs:mt-20 mb-12">
                {pageNumbers.map((number) => (
                    <Link key={number} href={`/${lang}/beforeAfter/${number}`}>
                        <button
                            className={`${number == pageNumber ? 'font-bold' : 'font-normal'}`}
                        >
                            {number}
                        </button>
                    </Link>
                ))}
            </div>
        </section>
    );
}

function replaceMiddleWithAsterisk(name) {
    // 가운데 부분의 시작과 끝 인덱스를 계산
    let middleStart, middleEnd;
    if (name.length % 2 === 0) {
        // 짝수 길이의 경우, 가운데 두 글자를 대체
        middleStart = name.length / 2 - 1;
        middleEnd = name.length / 2 + 1;
    } else {
        // 홀수 길이의 경우, 가운데 한 글자를 대체
        middleStart = Math.floor(name.length / 2);
        middleEnd = Math.ceil(name.length / 2);
    }

    // 가운데 부분을 *로 대체
    return (
        name.substring(0, middleStart) +
        '*'.repeat(middleEnd - middleStart) +
        name.substring(middleEnd)
    );
}

function translateService(service, lang) {
    // 서비스 이름을 영어와 한국어로 매핑
    const serviceNames = {
        implant: { en: 'Implant', ko: '임플란트' },
        laminate: { en: 'Laminate', ko: '라미네이트' },
        cavityTreatment: { en: 'Cavity Treatment', ko: '충치 치료' },
        teethWhitening: { en: 'Teeth Whitening', ko: '치아 미백' },
    };

    // 현재 lang에 따라 서비스 이름을 변환
    return serviceNames[service] ? serviceNames[service][lang] : service;
}

function timeStampToDate(date) {
    return (
        date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    );
}
