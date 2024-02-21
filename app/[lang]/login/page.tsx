import React, { Suspense } from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import Login from '@/components/Login/login';
import Loading from '@/components/loading/loading';

export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <Suspense fallback={<Loading />}>
                <Login lang={lang} page={page} />
            </Suspense>
        </>
    );
}
