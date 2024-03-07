import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import React from 'react';
import SignUp from '@/components/SignUp/signUp';

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { metadata, page } = await getDictionary(lang);
    const metadataBase = `https://hyukplant.com/${lang}/signup`;

    return {
        title: {
            default: page.signUp.title,
        },
        description: page.signUp.description,
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
            title: page.signUp.title,
            description: page.signUp.description,
            url: `https://hyukplant.com/${lang}/signup`,
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

export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <SignUp lang={lang} page={page} />
        </>
    );
}
