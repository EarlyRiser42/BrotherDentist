import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import React from 'react';
import SignUpForm from '@/components/SignUp/signupForm';

export default async function form({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page } = await getDictionary(lang);

    return (
        <>
            <SignUpForm lang={lang} page={page} />
        </>
    );
}
