import React from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import Reviews from '@/components/reviews/reivews';

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { metadata, page } = await getDictionary(lang);
    const metadataBase = `https://hyukplant.com/${lang}/reviews/1`;

    return {
        title: {
            default: page.reviews.title,
        },
        description: page.reviews.description,
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
            title: page.reviews.title,
            description: page.reviews.description,
            url: `https://hyukplant.com/${lang}/reviews/1`,
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
    params: { lang, pageNumber },
}: {
    params: { lang: Locale; pageNumber: string };
}) {
    const { page, header } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <Reviews lang={lang} page={page} pageNumber={pageNumber} />
        </>
    );
}
