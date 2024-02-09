'use client';
import ToggleDarkMode from './headerComponents/toggleDarkMode';
import ToggleLanguage from './headerComponents/toggleLanguage';
import { Locale } from '@/i18n.config';

import Navigation from '@/app/[lang]/components/headerComponents/navigation';
import NavigationIcon from '@/app/[lang]/components/headerComponents/navigationIcon';
import { LogoEn, LogoKo } from '@/components/Icons/Logos';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
    lang: Locale;
    header?: any;
}

export default function Header({ lang, header }: HeaderProps) {
    const [navOpen, setNavOpen] = useState(false);
    const [navAnimation, setAnimation] = useState('animate-navIn');
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
            className="sticky inset-0 z-[200] bg-white dark:bg-black py-3 flex items-center justify-between w-full border-gray-300 dark:border-white dark:border-opacity-30
    lg:justify-around lg:h-10vh"
        >
            <div className="h-1/20 w-7/12 flex items-center ml-4 cxl:ml-0 lg:w-44">
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
            <div className="hidden lg:flex justify-between items-center w-44 mr-4 cxl:mr-0">
                <Link href={`${lang}/login`}>
                    <button className="bg-light_blue text-white dark:text-black rounded-3xl w-20 min-w-16 min-h-8 h-full ">
                        {header.buttons.login}
                    </button>
                </Link>
                <ToggleLanguage lang={lang} />
                <ToggleDarkMode />
            </div>
        </nav>
    );
}
