import '../globals.css';
import React from 'react';
import Providers from '../../provider/Providers';
import { Locale, i18n } from '@/i18n.config';
import { NanumSquare, NanumSquareOTF } from '@/fonts/fonts';
import { getDictionary } from '@/dictionaries/dictionary';

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { metadata, page } = await getDictionary(lang);
    const metadataBase = 'https://hyukplant.com';

    return {
        title: {
            default: page.home.title,
        },
        description: page.home.description,
        icons: {
            icon: metadata.icon,
            shortcut: metadata.icon,
            apple: metadata.icon,
            other: {
                rel: 'apple-touch-icon-precomposed',
                url: metadata.icon,
            },
        },

        openGraph: {
            title: page.home.title,
            description: page.home.description,
            url: 'https://hyukplant.com',
            siteName: 'Hyukplant',
            images: [
                {
                    url: metadata.open_graph, // for kakao
                    width: 800,
                    height: 400,
                },
                {
                    url: metadata.open_graph, // for facebook
                    width: 1200,
                    height: 630,
                    alt: 'My custom alt',
                },
            ],
            locale: lang,
            type: 'website',
        },
        robots: {
            index: false,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: false,
                noimageindex: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        metadataBase: metadataBase,
    };
}

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
