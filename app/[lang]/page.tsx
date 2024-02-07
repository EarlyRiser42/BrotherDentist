import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/app/[lang]/components/header';
import React from 'react';
import Footer from '@/app/[lang]/components/footer';
import Hero from '@/app/[lang]/components/pageComponents/hero';
import ParallexSection from '@/app/[lang]/components/pageComponents/parallexSection';
import PortraitSlider from '@/app/[lang]/components/pageComponents/portraitSlider';
import ProSection from '@/app/[lang]/components/pageComponents/proSection';
import SpeechBalloon from '@/app/[lang]/components/pageComponents/speechBalloon';
import ReviewSlider from '@/app/[lang]/components/pageComponents/reviewSlider';
import portrait1 from '../../public/portraitSlider/portrait1.png';
import portrait1_mobile from '../../public/portraitSlider/portrait1_mobile.png';
import portrait2 from '../../public/portraitSlider/portrait2.png';

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header, footer } = await getDictionary(lang);
    const CAREERS = [
        {
            url: [portrait1, portrait1_mobile],
            alt: 'portraitOne',
            title: page.home.portraitOneTitle,
            details: page.home.portraitOneDetails,
        },
        {
            url: [portrait2, portrait2],
            alt: 'portraitTwo',
            title: page.home.portraitTwoTitle,
            details: page.home.portraitTwoDetails,
        },
    ];

    return (
        <>
            <Header lang={lang} header={header} />
            <Hero page={page} />
            <ParallexSection page={page} />
            <ProSection page={page} />
            <SpeechBalloon page={page} />
            <ReviewSlider page={page} />
            <PortraitSlider page={page} careers={CAREERS} />
            <Footer footer={footer} />
        </>
    );
}
