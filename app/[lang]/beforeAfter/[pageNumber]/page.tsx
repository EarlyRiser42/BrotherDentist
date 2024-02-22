import React, { Suspense } from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import BeforeAfter from '@/components/beforeAfter/beforeAfter';
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
                <BeforeAfter lang={lang} page={page} pageNumber={pageNumber} />
            </Suspense>
        </>
    );
}
