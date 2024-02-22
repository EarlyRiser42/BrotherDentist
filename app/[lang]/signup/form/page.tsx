import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import React from 'react';
import SignUpForm from '@/components/SignUp/signupForm';

export default async function Form({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page } = await getDictionary(lang);

    return (
        <>
            <SignUpForm page={page} />
        </>
    );
}
