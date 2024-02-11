import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import React from 'react';
import SignUpForm from '@/components/SignUp/signUp';

export default async function signup({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <SignUpForm lang={lang} page={page} />
        </>
    );
}
