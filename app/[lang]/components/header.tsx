'use client';
import ToggleDarkMode from './navigation/toggleDarkMode';
import ToggleLanguage from './navigation/toggleLanguage';
import { Locale } from '@/i18n.config';

import Navigation from '@/app/[lang]/components/navigation/navigation';
import NavigationIcon from '@/app/[lang]/components/navigation/navigationIcon';
import { LogoEn, LogoKo } from '@/components/Icons/Logos';
import { useEffect, useState } from 'react';

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
            document.body.style.overflow = 'hidden';
        } else {
            setAnimation('animate-navOut');
            setTimeout(() => {
                setNavOpen(false);
            }, 300);
            document.body.style.overflow = '';
        }
    };

    return (
        <nav
            className="sticky inset-0 z-20 bg-white dark:bg-black py-3 flex items-center justify-between w-full border-gray-300 dark:border-white dark:border-opacity-30
    lg:justify-around lg:h-10vh"
        >
            <div className="h-1/20 w-7/12 flex items-center ml-4 lg:ml-0 lg:w-auto">
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
            <div className="hidden lg:flex justify-between items-center w-5/100 min-w-20">
                <ToggleLanguage lang={lang} />
                <ToggleDarkMode />
            </div>
        </nav>
    );
}
