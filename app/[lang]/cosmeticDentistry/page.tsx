import React from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import Hero from '@/components/cosmeticDentistry/hero';
import TextFillSection from '@/components/cosmeticDentistry/textFillSection';
import ProSection from '@/components/cosmeticDentistry/proSection';
import CategoryText from '@/components/cosmeticDentistry/categoryText';
export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <Hero page={page} />
            <TextFillSection page={page} />
            <ProSection page={page} />
            <CategoryText page={page} />
        </>
    );
}
