'use client';
import ToggleDarkMode from './headerComponents/toggleDarkMode';
import ToggleLanguage from './headerComponents/toggleLanguage';
import { Locale } from '@/i18n.config';
import { signOut } from '@/components/firebase/auth';
import Navigation from '@/components/Home/headerComponents/navigation';
import NavigationIcon from '@/components/Home/headerComponents/navigationIcon';
import { LogoEn, LogoKo } from '@/components/Icons/Logos';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUser } from '@/components/firebase/auth';

interface HeaderProps {
    lang: Locale;
    header?: any;
}

export default function Header({ lang, header }: HeaderProps) {
    const [navOpen, setNavOpen] = useState(false);
    const [navAnimation, setAnimation] = useState('animate-navIn');
    const isLoggedIn = useUser();

    const handleClick = () => {
        if (!navOpen) {
            setAnimation('animate-navIn');
            setNavOpen(true);
        } else {
            setAnimation('animate-navOut');
            setTimeout(() => {
                setNavOpen(false);
            }, 300);
        }
    };

    return (
        <nav
            className="sticky inset-0 z-[200] bg-white dark:bg-black py-3 flex items-center justify-between w-full border-gray_300 dark:border-white dark:border-opacity-30
    lg:justify-between h-10dvh border-b border-white_700 dark:border-gray"
        >
            <div className="h-1/20 w-7/12 flex items-center ml-4 lg:w-64">
                {lang === 'ko' ? <LogoKo /> : <LogoEn />}
            </div>
            <div className="lg:hidden flex justify-center items-center w-1/6 z-50">
                <button onClick={() => handleClick()}>
                    <NavigationIcon navOpen={navOpen} />
                </button>
            </div>
            <Navigation
                lang={lang}
                navOpen={navOpen}
                navAnimation={navAnimation}
                header={header}
            />
            <div className="hidden lg:flex justify-between items-center mr-4 w-auto min-w-64">
                {isLoggedIn && (
                    <>
                        <button className="bg-light_blue text-black dark:text-white rounded-3xl w-auto min-w-16 min-h-8 h-full ">
                            {isLoggedIn.displayName + '님'}
                        </button>
                        <button
                            className="bg-black dark:bg-white text-white dark:text-black rounded-3xl w-24 min-h-8 h-full "
                            onClick={signOut}
                        >
                            {header.buttons.signOut}
                        </button>
                    </>
                )}
                {!isLoggedIn && (
                    <>
                        <Link href={`/${lang}/login`}>
                            <button className="bg-light_blue text-black dark:text-white rounded-3xl w-20 min-w-16 min-h-8 h-full ">
                                {header.buttons.login}
                            </button>
                        </Link>
                        <Link href={`/${lang}/signup`}>
                            <button className="bg-black dark:bg-white text-white dark:text-black rounded-3xl w-24 min-h-8 h-full ">
                                {header.buttons.signUp}
                            </button>
                        </Link>
                    </>
                )}
                <ToggleLanguage lang={lang} />
                <ToggleDarkMode />
            </div>
        </nav>
    );
}
