'use client';

import Navigation from '../navigation/navigation';
import NavigationIcon from '../navigation/navigationIcon';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import logoKr from '../../public/logos/logo_kr.png';
import logoDarkKr from '../../public/logos/logo_dark_kr.png';
import logoEn from '../../public/logos/logo_en.png';
import logoDarkEn from '../../public/logos/logo_dark_en.png';
import ThemeSwitch from '../navigation/toggleDarkMode';

export default function Header({ lang }) {
    const [logoSrc, setLogoSrc] = useState(logoKr);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        if (resolvedTheme === 'dark' && lang === 'kr') {
            setLogoSrc(logoDarkKr);
        } else if (resolvedTheme === 'dark' && lang === 'en') {
            setLogoSrc(logoDarkEn);
        } else if (resolvedTheme === 'light' && lang === 'en') {
            setLogoSrc(logoEn);
        } else if (resolvedTheme === 'light' && lang === 'kr') {
            setLogoSrc(logoKr);
        }
    }, [lang, resolvedTheme]);

    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <nav className="flex justify-around items-center w-full bg-white dark:bg-black">
            <Image src={logoSrc} width={120} height={40} alt="logo" />
            {!isMobile && <Navigation />}
            {!isMobile && <ThemeSwitch />}
            {isMobile && <NavigationIcon />}
        </nav>
    );
}
