'use client';
import ToggleDarkMode from './navigation/toggleDarkMode';
import ToggleLanguage from './navigation/toggleLanguage';
import { Locale } from '@/i18n.config';
import { useRecoilValue } from 'recoil';
import { NavigationState } from '@/atoms/atoms';
import { useIsMobile } from '@/components/hooks/useIsMobile';
import Navigation from '@/app/[lang]/components/navigation/navigation';
import NavigationIcon from '@/app/[lang]/components/navigation/navigationIcon';
import { LogoEn, LogoKo } from '@/components/Icons/Icons';

interface HeaderProps {
    lang: Locale;
    navigation?: any;
}

export default function Header({ lang, navigation }: HeaderProps) {
    const navOpen = useRecoilValue(NavigationState);
    const isMobile = useIsMobile();

    return (
        <nav className="flex justify-around items-center w-full bg-white dark:bg-black">
            {lang === 'ko' && <LogoKo />}
            {lang === 'en' && <LogoEn />}
            {isMobile ? (
                navOpen && <Navigation navigation={navigation} />
            ) : (
                <Navigation navigation={navigation} />
            )}
            {isMobile && <NavigationIcon />}
            {!isMobile && (
                <div>
                    <ToggleLanguage lang={lang} />
                    <ToggleDarkMode />
                </div>
            )}
        </nav>
    );
}
