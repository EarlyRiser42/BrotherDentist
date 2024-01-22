import '../globals.css';
import Head from 'next/head';
import Header from './components/header';
import Footer from './components/footer';
import Providers from '../../components/provider/Providers';
import { Locale, i18n } from '@/i18n.config';
import { NanumSquare, NanumSquareOTF } from '@/fonts/fonts';
import React from 'react';

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const metadata = {
        title: '혁플란트 치과',
        description: '혁플란트 치과 홈페이지 소개 페이지',
    };

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
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
