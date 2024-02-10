import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/app/[lang]/components/header';
import React from 'react';
import LoginForm from '@/app/[lang]/login/components/loginform';

export default async function Login({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header, footer } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <LoginForm lang={lang} page={page} />
        </>
    );
}
