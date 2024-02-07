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

export default async function Home({
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
            <Footer footer={footer} />
        </>
    );
}
