'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DummyIcon, ToggleEn, ToggleKr } from '../Icons/Icons';

export default function ToggleLanguage({ lang }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // 클라이언트 사이드에서만 아이콘 렌더링
    if (!isMounted) {
        return <DummyIcon />;
    }

    // 언어 변경 함수
    const toggleLanguage = () => {
        const newLocale = router.locale === 'ko' ? 'en-US' : 'ko';
        router.push({
            pathname: router.pathname,
            query: router.query,
            locale: newLocale,
        });
    };
    console.log(lang);
    // 현재 로케일을 기반으로 언어 토글 버튼을 렌더링합니다.
    return (
        <button onClick={toggleLanguage} aria-label="Toggle Language">
            {lang === 'ko' ? (
                <ToggleEn className={'w-6 h-6 text-black'} />
            ) : (
                <ToggleKr className={'w-6 h-6 text-white'} />
            )}
        </button>
    );
}
