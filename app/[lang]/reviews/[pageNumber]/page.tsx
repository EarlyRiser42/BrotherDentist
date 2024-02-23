import React, { Suspense } from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import Reviews from '@/components/reviews/reivews';
import Spinner from '@/components/loading/spinner';

export default async function Page({
    params: { lang, pageNumber },
}: {
    params: { lang: Locale; pageNumber: string };
}) {
    const { page, header } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <Suspense fallback={<Spinner />}>
                <Reviews lang={lang} page={page} pageNumber={pageNumber} />
            </Suspense>
        </>
    );
}
