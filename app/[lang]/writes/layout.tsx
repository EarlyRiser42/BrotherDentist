'use client';
import React, { useEffect } from 'react';
import { Locale } from '@/i18n.config';

import { useRouter } from 'next/navigation';
import { authService as auth } from '@/lib/firebase/config';

export default function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const router = useRouter();
    useEffect(() => {
        if (
            auth?.currentUser?.email !==
            process.env.NEXT_PUBLIC_ADMIN_MAIL_ADDRESS
        ) {
            router.push(`/${params.lang}/`);
        }
    }, []);

    return (
        <>
            <main>{children}</main>
        </>
    );
}
