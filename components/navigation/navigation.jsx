'use client';

import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { NavigationState } from '../../atoms/atoms';
import { useTheme } from 'next-themes';
import { useMediaQuery } from 'react-responsive';
import DropDownMenu from './dropDownMenu';

export default function Navigation({ lang }) {
    const navOpen = useRecoilValue(NavigationState);
    const { setTheme, resolvedTheme } = useTheme();

    // 다크 모드 토글 버튼
    const toggleDarkMode = () => {
        if (resolvedTheme === 'dark') {
            setTheme('light');
        }

        if (resolvedTheme === 'light') {
            setTheme('dark');
        }
    };

    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <>
            {!isMobile && <DropDownMenu />}
            {isMobile && navOpen && <DropDownMenu />}
        </>
    );
}
