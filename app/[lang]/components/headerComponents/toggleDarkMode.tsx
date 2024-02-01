'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { DummyIcon, MoonIcon, SunIcon } from '@/components/Icons/Icons';

export default function ToggleDarkMode() {
    const { setTheme, resolvedTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // 클라이언트 사이드에서만 아이콘 렌더링
    if (!isMounted) {
        return <DummyIcon />;
    }

    return (
        <button
            onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
            aria-label="Toggle Theme"
        >
            {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}
