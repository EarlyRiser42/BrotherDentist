import React from 'react';
import Header from '@/components/Home/header';
import Writes from '@/components/writes/writes';
import { getDictionary } from '@/dictionaries/dictionary';
import { Locale } from '@/i18n.config';
import { Suspense } from 'react';
export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { header } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <Suspense fallback={<div className="bg-white"></div>}>
                <Writes />
            </Suspense>
        </>
    );
}
