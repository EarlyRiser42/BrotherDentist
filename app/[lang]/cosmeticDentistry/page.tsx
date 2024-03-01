import React from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import Hero from '@/components/cosmeticDentistry/hero';
import ProSection from '@/components/cosmeticDentistry/proSection';

export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <Hero lang={lang} page={page} />
            <div className="mt-16 sm:mt-20 lg:mt-24 cxl:mt-28">
                <ProSection lang={lang} page={page} />
            </div>
        </>
    );
}
