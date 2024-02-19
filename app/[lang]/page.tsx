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
            <ClinicServices lang={lang} page={page} />
            <MapSection page={page} />
            <Footer footer={footer} />
        </>
    );
}
