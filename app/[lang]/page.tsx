import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/app/[lang]/components/header';
import React from 'react';
import Footer from '@/app/[lang]/components/footer';
import Hero from '@/app/[lang]/components/page/hero';
import ImageSlider from '@/app/[lang]/components/page/imageSlider.tsx';
import test from '../../public/portrait_body.png';
import test2 from '../../public/kakaotalk.png';

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header, footer } = await getDictionary(lang);
    const IMAGES = [
        { url: test, alt: 'Car One' },
        { url: test2, alt: 'Car One' },
    ];

    return (
        <>
            <Header lang={lang} header={header} />
            <Hero page={page} />
            <ImageSlider images={IMAGES} />
            <Footer footer={footer} />
        </>
    );
}
