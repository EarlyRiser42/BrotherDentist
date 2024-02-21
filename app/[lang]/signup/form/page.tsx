import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import React, { Suspense } from 'react';
import SignUpForm from '@/components/SignUp/signupForm';
import Loading from '@/components/loading/loading';

export default async function Form({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page } = await getDictionary(lang);

    return (
        <>
            <Suspense fallback={<Loading />}>
                <SignUpForm page={page} />
            </Suspense>
        </>
    );
}
