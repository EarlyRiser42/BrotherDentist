import React from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import ReviewDetail from '@/components/reviews/reivewDetail';
export default async function Page({
    params: { lang, reviewNumber },
}: {
    params: { lang: Locale; reviewNumber: string };
}) {
    const { page, header } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <ReviewDetail page={page} lang={lang} reviewNumber={reviewNumber} />
        </>
    );
}
