import React from 'react';
import Header from '@/components/Home/header';
import { getDictionary } from '@/dictionaries/dictionary';
import { Locale } from '@/i18n.config';
import dynamic from 'next/dynamic';

const DynamicWrites = dynamic(() => import('@/components/writes/writes'), {
    ssr: false,
});

export default async function Page({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { header } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <DynamicWrites />
        </>
    );
}
