'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DummyIcon, ToggleEn, ToggleKr } from '@/components/Icons/Icons';
import { Locale } from '@/i18n.config';

interface LocaleProps {
    lang: 'ko' | 'en';
}

export default function ToggleLanguage({ lang }: LocaleProps) {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <DummyIcon />;
    }

    // 리디렉션할 경로를 결정하는 함수
    const redirectedPathName = (locale: string) => {
        if (!pathname) return '/';
        const segments = pathname.split('/');
        segments[1] = locale; // 언어 세그먼트 변경
        return segments.join('/');
    };

    return (
        <button aria-label="Toggle Language">
            {lang === 'ko' ? (
                <Link href={redirectedPathName('en')}>
                    <ToggleEn />
                </Link>
            ) : (
                <Link href={redirectedPathName('ko')}>
                    <ToggleKr />
                </Link>
            )}
        </button>
    );
}
