'use client';
import React, { useEffect } from 'react';
import { useUser } from '@/components/firebase/auth';
import { redirect } from 'next/navigation';
import { Locale } from '@/i18n.config';

export default function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const isLoggedIn = useUser();

    useEffect(() => {
        if (isLoggedIn) {
            redirect(`/${params.lang}/`);
        }
    }, [isLoggedIn, params.lang]);

    return (
        <>
            <main>{children}</main>
        </>
    );
}
