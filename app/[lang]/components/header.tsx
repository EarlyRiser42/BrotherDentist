'use client';
import ToggleDarkMode from './navigation/toggleDarkMode';
import ToggleLanguage from './navigation/toggleLanguage';
import { Locale } from '@/i18n.config';
import { useRecoilValue } from 'recoil';
import { NavigationState } from '@/atoms/atoms';
import { useIsMobile } from '@/components/hooks/useIsMobile';
import DropDownMenu from '@/app/[lang]/components/navigation/dropDownMenu';
import NavigationIcon from '@/app/[lang]/components/navigation/navigationIcon';

interface HeaderProps {
    lang: Locale;
    navigation?: any;
}

export default function Header({ lang, navigation }: HeaderProps) {
    const navOpen = useRecoilValue(NavigationState);
    const isMobile = useIsMobile();

    return (
        <nav className="flex justify-around items-center w-full bg-white dark:bg-black">
            {!isMobile && <DropDownMenu navigation={navigation} />}
            {isMobile && navOpen && <DropDownMenu navigation={navigation} />}
            {isMobile && <NavigationIcon />}
            <ToggleLanguage lang={lang} />
            <ToggleDarkMode />
        </nav>
    );
}
