'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { writeAction } from '@/actions/actions';

export default function Writes() {
    const router = useRouter();
    const [category, setCategory] = useState('beforeAfter');
    // 선택된 서비스들을 관리하는 상태
    const [selectedServices, setSelectedServices] = useState([]);
    // 폼에 두 상태 추가
    const updateWriteAction = writeAction.bind(
        null,
        category,
        selectedServices,
    );

    // 서비스를 추가하거나 제거하는 함수 (영어 이름으로 저장)
    const servicesMapping = {
        임플란트: 'implant',
        라미네이트: 'laminate',
        충치치료: 'cavityTreatment',
        치아미백: 'teethWhitening',
    };

    const toggleService = (service) => {
        const serviceEng = servicesMapping[service]; // 한글 이름을 영어 이름으로 변환
        setSelectedServices((prevServices) => {
            if (prevServices.includes(serviceEng)) {
                // 이미 배열에 있으면 제거 (영어 이름 기준)
                return prevServices.filter((s) => s !== serviceEng);
            } else {
                // 배열에 없으면 추가 (영어 이름 기준)
                return [...prevServices, serviceEng];
            }
        });
    };

    return (
        <section className="w-full h-90dvh min-h-640 flex flex-col justify-center items-center">
            <div className="w-full h-auto clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400 py-4 flex flex-col">
                <form
                    action={async (formData) => {
                        await updateWriteAction(formData);
                        router.push('/writes');
                    }}
                    className="w-full flex flex-col justify-center items-center"
                >
                    <h1 className="w-96/100 cs:w-96 text-2xl font-bold mb-4">
                        글쓰기
                    </h1>
                    <div className="w-96/100 cs:w-96 max-w-xl grid grid-cols-2 gap-4 rounded-lg md:max-w-md  mb-2">
                        <button
                            type="button"
                            className={`${category === 'beforeAfter' ? 'border-light_blue text-light_blue' : 'border-black dark:border-white'}  
                border border-black dark:border-white rounded-3xl px-1 py-2 cs:p-2 text-xs cs:text-sm`}
                            onClick={() => {
                                setCategory('beforeAfter');
                            }}
                        >
                            전후사진
                        </button>
                        <button
                            type="button"
                            className={`${category === 'review' ? 'border-light_blue text-light_blue' : 'border-black dark:border-white'}  
                border border-black dark:border-white rounded-3xl px-1 py-2 cs:p-2 text-xs cs:text-sm`}
                            onClick={() => {
                                setCategory('review');
                            }}
                        >
                            자필후기
                        </button>
                    </div>
                    <div className="w-96/100 cs:w-96 max-w-xl grid grid-cols-4 gap-4 rounded-lg md:max-w-md py-4">
                        {Object.keys(servicesMapping).map((service, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`${
                                    selectedServices.includes(
                                        servicesMapping[service],
                                    )
                                        ? 'border-light_blue text-light_blue'
                                        : 'border-black dark:border-white'
                                } border border-black dark:border-white rounded-3xl px-1 py-2 cs:p-2 text-xs cs:text-sm`}
                                onClick={() => toggleService(service)}
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                    <div className="w-96/100 cs:w-96 max-w-xl grid grid-cols-2 gap-4 rounded-lg md:max-w-md  mb-2">
                        <div className="space-y-2">
                            <label htmlFor="first-name">성</label>
                            <input
                                className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                            border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                id="first-name"
                                name="first-name"
                                placeholder="성"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="last-name">이름</label>
                            <input
                                className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                            border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                id="last-name"
                                name="last-name"
                                placeholder="이름"
                                required
                            />
                        </div>
                    </div>
                    <div className="w-96/100 cs:w-96 max-w-xl grid grid-cols-2 gap-4 rounded-lg md:max-w-md  mb-2">
                        <div className="space-y-2">
                            <label htmlFor="first-name">나이</label>
                            <input
                                className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                            border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                id="age"
                                name="age"
                                placeholder="나이"
                                required
                            />
                        </div>
                        <div className="space-y-2 mb-4">
                            <label htmlFor="sex">성별</label>
                            <select
                                id="sex"
                                name="sex"
                                className="inline-flex items-center justify-center w-full h-12 px-3 mb-4 border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                required
                            >
                                <option value="">성별 선택</option>
                                <option value="male">남</option>
                                <option value="female">여</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-96/100 cs:w-96 max-w-xl grid grid-cols-2 gap-4 rounded-lg md:max-w-md mb-2">
                        {category === 'beforeAfter' && (
                            <>
                                <div className="space-y-2">
                                    <label htmlFor="before-image">
                                        Before 이미지
                                    </label>
                                    <input
                                        className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                        type="file"
                                        id="before-image"
                                        name="before-image"
                                        accept="image/*"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="after-image">
                                        After 이미지
                                    </label>
                                    <input
                                        className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                        type="file"
                                        id="after-image"
                                        name="after-image"
                                        accept="image/*"
                                        required
                                    />
                                </div>
                            </>
                        )}
                        {category === 'review' && (
                            <div className="space-y-2 col-span-2">
                                <label htmlFor="review-image">
                                    리뷰 이미지
                                </label>
                                <input
                                    className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
            border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                    type="file"
                                    id="review-image"
                                    name="review-image"
                                    accept="image/*"
                                    required
                                />
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-96/100 cs:w-96 max-w-xl md:max-w-md h-11  mb-4 py-2.5 text-sm font-medium rounded-3xl cursor-pointer no-underline
                            bg-black dark:bg-white text-white dark:text-black hover:bg-opacity-90"
                    >
                        글쓰기
                    </button>
                </form>
            </div>
        </section>
    );
}
