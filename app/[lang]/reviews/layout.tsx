import React from 'react';
import { Locale } from '@/i18n.config';

export default function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}
