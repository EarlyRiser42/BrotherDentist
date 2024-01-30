import { useEffect, useRef, useState } from 'react';
import { ArrowBottom } from '@/components/Icons/Icons';
import ToggleLanguage from '@/app/[lang]/components/navigation/toggleLanguage';
import ToggleDarkMode from '@/app/[lang]/components/navigation/toggleDarkMode';
import Link from 'next/link';
import Image from 'next/image';
import kakaoTalkPng from '@/public/kakaotalk.png';
import useOnClickOutside from '@/components/hooks/useOnclickOutsdie';
import { LogoEn, LogoKo } from '@/components/Icons/Logos';

const Navigation = ({ lang, isMobile, navOpen, header }) => {
    const [isImplantOpen, setIsImplantOpen] = useState(false);
    const implantRef = useRef(null);
    useOnClickOutside(implantRef, () => setIsImplantOpen(false));

    const [isCommunityOpen, setIsCommunityOpen] = useState(false);
    const communityRef = useRef(null);
    useOnClickOutside(communityRef, () => setIsCommunityOpen(false));

    return (
        <div
            className={`flex flex-col lg:flex lg:flex-row justify-start lg:justify-evenly items-center w-screen lg:w-3/4 h-screen h-dvh lg:h-full absolute inset-0 lg:relative bg-white dark:bg-black ${navOpen ? 'block animate-navIn' : 'hidden'} lg:block lg:animate-none`}
        >
            {isMobile && (
                <div className="w-11/12 mt-5 mx-auto h-1/20">
                    {lang === 'ko' ? <LogoKo /> : <LogoEn />}
                </div>
            )}
            <ul className="flex flex-col justify-start lg:justify-evenly w-11/12 h-4/5 lg:h-auto lg:w-3/5 ml-0 lg:flex-row text-2xl lg:text-lg">
                <Link href={`/${lang}`}>
                    <li className="md:mr-4 cursor-pointer text-black dark:text-white hover:font-bold mt-5 lg:mt-0 mb-10 lg:mb-0">
                        {header.about}
                    </li>
                </Link>
                <li
                    className={`md:mr-4 relative cursor-pointer text-black dark:text-white hover:font-bold ${isImplantOpen ? 'font-bold' : ''} mb-10 lg:mb-0 flex flex-col lg:flex-row items-start lg:items-center`}
                    onClick={() => setIsImplantOpen(!isImplantOpen)}
                    ref={implantRef}
                >
                    <div className="flex justify-start items-center w-full">
                        {header.services.title}
                        <div className="ml-3">
                            <ArrowBottom />
                        </div>
                    </div>
                    {isImplantOpen && (
                        <ul
                            className={`bg-white dark:bg-black relative  lg:top-10 lg:absolute ${lang === 'en' ? 'w-100 lg:-left-40' : 'w-56 lg:-left-20'} h-auto lg:h-12 lg:rounded-3xl flex flex-col lg:flex-row lg:justify-evenly items-start lg:items-center lg:bg-black lg:dark:bg-white lg:animate-fadeIn animate-slideDown`}
                        >
                            <Link href={`${lang}/implant`}>
                                <li className="cursor-pointer rounded-3xl lg:rounded-none bg-gray-300 dark:bg-gray-600 lg:bg-black lg:dark:bg-white text-black dark:text-white lg:text-white lg:dark:text-black hover:font-bold py-2 lg:py-0 px-4 lg:px-0 lg:bg-transparent font-normal mt-4 mb-4 lg:mt-0 lg:mb-0">
                                    {header.services.subServices.implant}
                                </li>
                            </Link>
                            <Link href={`${lang}/prosthodontics`}>
                                <li className="cursor-pointer rounded-3xl lg:rounded-none bg-gray-300 dark:bg-gray-600 lg:bg-black lg:dark:bg-white text-black dark:text-white lg:text-white lg:dark:text-black hover:font-bold py-2 lg:py-0 px-4 lg:px-0 font-normal mb-4 lg:mb-0">
                                    {header.services.subServices.prosthodontics}
                                </li>
                            </Link>
                            <Link href={`${lang}/cosmeticDentistry`}>
                                <li className="cursor-pointer rounded-3xl lg:rounded-none bg-gray-300 dark:bg-gray-600 lg:bg-black lg:dark:bg-white text-black dark:text-white lg:text-white lg:dark:text-black hover:font-bold py-2 lg:py-0 px-4 lg:px-0 lg:bg-transparent font-normal mb-0">
                                    {
                                        header.services.subServices
                                            .cosmeticDentistry
                                    }
                                </li>
                            </Link>
                        </ul>
                    )}
                </li>
                <li
                    className={`md:mr-4 relative cursor-pointer text-black dark:text-white hover:font-bold ${isCommunityOpen ? 'font-bold' : ''} mb-10 lg:mb-0 flex flex-col lg:flex-row items-start lg:items-center`}
                    onClick={() => setIsCommunityOpen(!isCommunityOpen)}
                    ref={communityRef}
                >
                    <div className="flex justify-start items-center w-full">
                        {header.community.title}
                        <div className="ml-3">
                            <ArrowBottom />
                        </div>
                    </div>
                    {isCommunityOpen && (
                        <ul
                            className={`bg-white dark:bg-black relative  lg:top-10 lg:absolute ${lang === 'en' ? 'w-100 lg:-left-40' : 'w-56 lg:-left-20'} h-auto lg:h-12 lg:rounded-3xl flex flex-col lg:flex-row lg:justify-evenly items-start lg:items-center lg:bg-black lg:dark:bg-white lg:animate-fadeIn animate-slideDown`}
                        >
                            <Link href={`${lang}/beforeAfter`}>
                                <li className="cursor-pointer rounded-3xl lg:rounded-none bg-gray-300 dark:bg-gray-600 lg:bg-black lg:dark:bg-white text-black dark:text-white lg:text-white lg:dark:text-black hover:font-bold py-2 lg:py-0 px-4 lg:px-0 lg:bg-transparent font-normal mt-4 mb-4 lg:mt-0 lg:mb-0">
                                    {header.community.subCommunity.beforeAfter}
                                </li>
                            </Link>
                            <Link href={`${lang}/review`}>
                                <li className="cursor-pointer rounded-3xl lg:rounded-none bg-gray-300 dark:bg-gray-600 lg:bg-black lg:dark:bg-white text-black dark:text-white lg:text-white lg:dark:text-black hover:font-bold py-2 lg:py-0 px-4 lg:px-0 font-normal mb-4 lg:mb-0">
                                    {header.community.subCommunity.review}
                                </li>
                            </Link>
                        </ul>
                    )}
                </li>
            </ul>
            {isMobile && (
                <div className="flex justify-between items-center w-11/12 h-15/100">
                    <div className="flex justify-start items-center w-4/5 h-2/5">
                        <button className="bg-black dark:bg-white text-white dark:text-black rounded-3xl w-20 min-w-16 h-full mr-5%">
                            {header.buttons.login}
                        </button>
                        <button className="bg-yellow rounded-3xl w-2/5 min-w-28 max-w-28 h-full flex items-center justify-start">
                            <Image
                                src={kakaoTalkPng}
                                alt={'Add KakaoCh'}
                                width={40}
                                height={40}
                                className="ml-1"
                            />
                            <span className="text-black">
                                {' '}
                                {header.buttons.consult}
                            </span>
                        </button>
                    </div>
                    <div className="flex justify-between items-center w-1/5 max-w-20">
                        <ToggleLanguage lang={lang} />
                        <ToggleDarkMode />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navigation;
