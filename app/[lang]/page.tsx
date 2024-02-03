import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/app/[lang]/components/header';
import React from 'react';
import Footer from '@/app/[lang]/components/footer';
import Hero from '@/app/[lang]/components/pageComponents/hero';
import ImageSlider from '@/app/[lang]/components/pageComponents/imageSlider.tsx';
import ProSection from '@/app/[lang]/components/pageComponents/proSection';
import portrait1 from '../../public/portrait1.png';
import portrait1_upper from '../../public/portrait1_upper.png';
import portrait2 from '../../public/portrait2.png';
import portrait2_upper from '../../public/portrait2_upper.png';

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header, footer } = await getDictionary(lang);
    const CAREERS = [
        {
            url: [portrait1, portrait1_upper],
            alt: 'portraitOne',
            title: page.home.portraitOneTitle,
            details: page.home.portraitOneDetails,
        },
        {
            url: [portrait2, portrait2_upper],
            alt: 'portraitTwo',
            title: page.home.portraitTwoTitle,
            details: page.home.portraitTwoDetails,
        },
    ];

    return (
        <>
            <Header lang={lang} header={header} />
            <Hero page={page} />
            <ImageSlider page={page} careers={CAREERS} />
            <ProSection page={page} />
            <Footer footer={footer} />
        </>
    );
}
