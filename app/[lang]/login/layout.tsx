'use client';
import React, { useEffect } from 'react';
import { useUser } from '@/lib/firebase/auth';
import { useRouter } from 'next/navigation';
import { Locale } from '@/i18n.config';

export default function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const isLoggedIn = useUser();
    const router = useRouter();
    useEffect(() => {
        if (isLoggedIn) {
            router.push(`/${params.lang}/`);
        }
    }, [isLoggedIn, params.lang]);

    return (
        <>
            <main>{children}</main>
        </>
    );
}
