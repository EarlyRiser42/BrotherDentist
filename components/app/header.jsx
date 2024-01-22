'use client';

import Navigation from '../navigation/navigation';
import NavigationIcon from '../navigation/navigationIcon';
import { useMediaQuery } from 'react-responsive';
import ThemeSwitch from '../navigation/toggleDarkMode';
import ToggleLanguage from '../navigation/toggleLanguage';
import { ToggleEn, ToggleKr } from '../Icons/Icons';

export default function Header({ lang }) {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <nav className="flex justify-around items-center w-full bg-white dark:bg-black">
            {lang === 'ko' ? (
                <ToggleEn className={'w-6 h-6 text-black'} />
            ) : (
                <ToggleKr className={'w-6 h-6 text-white'} />
            )}
            {!isMobile && <Navigation />}
            {!isMobile && <ToggleLanguage lang={lang} />}
            {!isMobile && <ThemeSwitch />}
            {isMobile && <NavigationIcon />}
        </nav>
    );
}
