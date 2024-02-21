import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import React, { Suspense } from 'react';
import SignUp from '@/components/SignUp/signUp';
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
                <SignUp lang={lang} page={page} />
            </Suspense>
        </>
    );
}
