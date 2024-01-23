'use client';
import ToggleDarkMode from './navigation/toggleDarkMode';
import ToggleLanguage from './navigation/toggleLanguage';
import { Locale } from '@/i18n.config';
import { useRecoilValue } from 'recoil';
import { useIsMobile } from '@/components/hooks/useIsMobile';
import Navigation from '@/app/[lang]/components/navigation/navigation';
import NavigationIcon from '@/app/[lang]/components/navigation/navigationIcon';
import { LogoEn, LogoKo } from '@/components/Icons/Icons';
import { useEffect, useState } from 'react';

interface HeaderProps {
    lang: Locale;
    navigation?: any;
}

// 모바일 환경에서 네비게이션 바
const MobileNavBar = ({ lang, navigation }) => {
    const [navOpen, setNavOpen] = useState(false);

    const handleClick = () => {
        setNavOpen(!navOpen);
        if (!navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    return (
        <nav className="flex justify-between items-center w-full bg-white dark:bg-black py-3 fixed border-b">
            <div className="flex items-center w-10/12 mx-4 h-1/20">
                {lang === 'ko' ? <LogoKo /> : <LogoEn />}
            </div>
            <Navigation
                lang={lang}
                isMobile={true}
                navOpen={navOpen}
                navigation={navigation}
            />
            <NavigationIcon navOpen={navOpen} onClick={() => handleClick()} />
        </nav>
    );
};

// 데스크톱 환경에서 네비게이션 바
const DesktopNavBar = ({ lang, navigation }) => (
    <nav className="flex justify-around items-center w-full bg-white dark:bg-black py-3 fixed border-b">
        {lang === 'ko' ? <LogoKo /> : <LogoEn />}
        <Navigation lang={lang} isMobile={false} navigation={navigation} />
        <div className="flex justify-between items-center w-5p">
            <ToggleLanguage lang={lang} />
            <ToggleDarkMode />
        </div>
    </nav>
);

export default function Header({ lang, navigation }: HeaderProps) {
    const isMobile = useIsMobile();

    return isMobile ? (
        <MobileNavBar lang={lang} navigation={navigation} />
    ) : (
        <DesktopNavBar lang={lang} navigation={navigation} />
    );
}
