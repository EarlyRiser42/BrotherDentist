import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import React from 'react';
import Footer from '@/components/Home/footer';
import Hero from '@/components/Home/pageComponents/hero';
import ParallexSection from '@/components/Home/pageComponents/parallexSection';
import ProSection from '@/components/Home/pageComponents/proSection';
import SpeechBalloon from '@/components/Home/pageComponents/speechBalloon';
import ReviewSlider from '@/components/Home/pageComponents/reviewSlider';
import ClinicServices from '@/components/Home/pageComponents/clinicServices';
import PortraitSlider from '@/components/Home/pageComponents/portraitSlider';
import MapSection from '@/components/Home/pageComponents/mapSection';

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

export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header, footer } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <Hero page={page} />
            <ParallexSection page={page} />
            <ProSection page={page} />
            <SpeechBalloon page={page} />
            <ReviewSlider page={page} />
            <PortraitSlider page={page} />
            <ClinicServices lang={lang} page={page} />
            <MapSection page={page} />
            <Footer footer={footer} />
        </>
    );
}
