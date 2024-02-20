'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowBottom } from '@/components/Icons/Icons';
import ToggleLanguage from '@/components/Home/headerComponents/toggleLanguage';
import ToggleDarkMode from '@/components/Home/headerComponents/toggleDarkMode';
import Link from 'next/link';
import useOnClickOutside from '@/components/hooks/useOnclickOutsdie';
import { LogoEn, LogoKo } from '@/components/Icons/Logos';
import { signOut, useUser } from '@/lib/firebase/auth';

const Navigation = ({ lang, navOpen, navAnimation, header }) => {
    const [isImplantOpen, setIsImplantOpen] = useState(false);
    const implantRef = useRef(null);
    useOnClickOutside(implantRef, () => setIsImplantOpen(false));

    const [isCommunityOpen, setIsCommunityOpen] = useState(false);
    const communityRef = useRef(null);
    useOnClickOutside(communityRef, () => setIsCommunityOpen(false));

    const isLoggedIn = useUser();

    return (
        <div
            className={`flex flex-col lg:flex lg:flex-row justify-start lg:justify-evenly items-center w-screen lg:w-1/2 h-dvh lg:h-full absolute inset-0 lg:relative bg-white dark:bg-black ${navAnimation} ${navOpen ? 'block' : 'hidden'} lg:block lg:animate-none`}
        >
            <div className="w-11/12 mt-5 mx-auto h-1/20 lg:hidden">
                {lang === 'ko' ? <LogoKo /> : <LogoEn />}
            </div>
            <ul className="flex flex-col justify-start lg:justify-evenly w-11/12 h-4/5 lg:h-auto lg:w-4/5 ml-0 lg:flex-row text-2xl lg:text-lg">
                <Link href={`/${lang}`}>
                    <li className="cursor-pointer text-black dark:text-white hover:font-bold mt-5 lg:mt-0 mb-10 lg:mb-0">
                        {header.about}
                    </li>
                </Link>
                <li
                    className={`relative cursor-pointer text-black dark:text-white hover:font-bold ${isImplantOpen ? 'font-bold' : ''} mb-10 lg:mb-0 flex flex-col lg:flex-row items-start lg:items-center`}
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
                            className={`bg-white dark:bg-black relative  lg:top-10 lg:absolute ${lang === 'en' ? 'w-410 lg:-left-48' : 'w-96 lg:-left-36'} h-auto lg:h-12 lg:rounded-3xl flex flex-col lg:flex-row lg:justify-evenly items-start lg:items-center lg:bg-black lg:dark:bg-white lg:animate-fadeIn animate-slideDown`}
                        >
                            <Link href={`/${lang}/implant`}>
                                <li className="cursor-pointer rounded-3xl lg:rounded-none bg-gray_300 dark:bg-gray_600 lg:bg-black lg:dark:bg-white text-black dark:text-white lg:text-white lg:dark:text-black hover:font-bold py-2 lg:py-0 px-4 lg:px-0 lg:bg-transparent font-normal mt-4 mb-4 lg:mt-0 lg:mb-0">
                                    {header.services.subServices.implant}
                                </li>
                            </Link>
                            <Link href={`/${lang}/prosthodontics`}>
                                <li className="cursor-pointer rounded-3xl lg:rounded-none bg-gray_300 dark:bg-gray_600 lg:bg-black lg:dark:bg-white text-black dark:text-white lg:text-white lg:dark:text-black hover:font-bold py-2 lg:py-0 px-4 lg:px-0 font-normal mb-4 lg:mb-0">
                                    {header.services.subServices.prosthodontics}
                                </li>
                            </Link>
                            <Link href={`/${lang}/laminate`}>
                                <li className="cursor-pointer rounded-3xl lg:rounded-none bg-gray_300 dark:bg-gray_600 lg:bg-black lg:dark:bg-white text-black dark:text-white lg:text-white lg:dark:text-black hover:font-bold py-2 lg:py-0 px-4 lg:px-0 font-normal mb-4 lg:mb-0">
                                    {header.services.subServices.laminate}
                                </li>
                            </Link>
                            <Link href={`/${lang}/cosmeticDentistry`}>
                                <li className="cursor-pointer rounded-3xl lg:rounded-none bg-gray_300 dark:bg-gray_600 lg:bg-black lg:dark:bg-white text-black dark:text-white lg:text-white lg:dark:text-black hover:font-bold py-2 lg:py-0 px-4 lg:px-0 lg:bg-transparent font-normal mb-0">
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
                    className={`relative cursor-pointer text-black dark:text-white hover:font-bold ${isCommunityOpen ? 'font-bold' : ''} mb-10 lg:mb-0 flex flex-col lg:flex-row items-start lg:items-center`}
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
                            className={`bg-white dark:bg-black relative  lg:top-10 lg:absolute ${lang === 'en' ? 'w-96 lg:-left-32' : 'w-56 lg:-left-20'} h-auto lg:h-12 lg:rounded-3xl flex flex-col lg:flex-row lg:justify-evenly items-start lg:items-center lg:bg-black lg:dark:bg-white lg:animate-fadeIn animate-slideDown`}
                        >
                            <Link href={`/${lang}/beforeAfter/1`}>
                                <li className="cursor-pointer rounded-3xl lg:rounded-none bg-gray_300 dark:bg-gray_600 lg:bg-black lg:dark:bg-white text-black dark:text-white lg:text-white lg:dark:text-black hover:font-bold py-2 lg:py-0 px-4 lg:px-0 lg:bg-transparent font-normal mt-4 mb-4 lg:mt-0 lg:mb-0">
                                    {header.community.subCommunity.beforeAfter}
                                </li>
                            </Link>
                            <Link href={`/${lang}/reviews`}>
                                <li className="cursor-pointer rounded-3xl lg:rounded-none bg-gray_300 dark:bg-gray_600 lg:bg-black lg:dark:bg-white text-black dark:text-white lg:text-white lg:dark:text-black hover:font-bold py-2 lg:py-0 px-4 lg:px-0 font-normal mb-4 lg:mb-0">
                                    {header.community.subCommunity.review}
                                </li>
                            </Link>
                        </ul>
                    )}
                </li>
            </ul>

            <div className="flex justify-between items-center w-11/12 h-15/100 clg:hidden">
                <div className="flex justify-start items-center w-4/5 h-2/5">
                    {isLoggedIn && (
                        <>
                            <button className="bg-light_blue text-white rounded-3xl px-3 w-auto min-w-16 mr-2 min-h-8 h-full ">
                                {isLoggedIn.displayName + '님'}
                            </button>
                            <button
                                className="bg-black dark:bg-white text-white dark:text-black rounded-3xl  w-24 mr-2 min-h-8 h-full "
                                onClick={signOut}
                            >
                                {header.buttons.signOut}
                            </button>
                        </>
                    )}
                    {!isLoggedIn && (
                        <>
                            <Link href={`/${lang}/login`}>
                                <button className="bg-light_blue text-white rounded-3xl w-20 min-w-16 mr-2 min-h-8 h-full ">
                                    {header.buttons.login}
                                </button>
                            </Link>
                            <Link href={`/${lang}/signup`}>
                                <button className="bg-black dark:bg-white text-white dark:text-black rounded-3xl w-24 mr-2 min-h-8 h-full ">
                                    {header.buttons.signUp}
                                </button>
                            </Link>
                        </>
                    )}
                </div>
                <div className="flex justify-between items-center w-1/5 max-w-20">
                    <ToggleLanguage lang={lang} />
                    <ToggleDarkMode />
                </div>
            </div>
        </div>
    );
};

export default Navigation;
