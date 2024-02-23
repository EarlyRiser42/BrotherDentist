import '../globals.css';
import React from 'react';
import Providers from '../../provider/Providers';
import { Locale, i18n } from '@/i18n.config';
import { NanumSquare, NanumSquareOTF } from '@/fonts/fonts';
import { getDictionary } from '@/dictionaries/dictionary';

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    return (
        <html
            lang={params.lang}
            className={
                params.lang === 'ko'
                    ? NanumSquare.className
                    : NanumSquareOTF.className
            }
            suppressHydrationWarning
        >
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
