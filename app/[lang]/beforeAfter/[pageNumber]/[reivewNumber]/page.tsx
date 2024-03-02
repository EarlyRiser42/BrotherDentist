import React from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import BeforeAfterDetail from '@/components/beforeAfter/beforeAfterDetail';
export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <BeforeAfterDetail page={page} lang={lang} />
        </>
    );
}
