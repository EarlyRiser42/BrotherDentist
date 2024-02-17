import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import React from 'react';
import SignUp from '@/components/SignUp/signUp';

export default async function Signup({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <SignUp lang={lang} page={page} />
        </>
    );
}
