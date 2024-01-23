import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/app/[lang]/components/header';
import React from 'react';
import Footer from '@/app/[lang]/components/footer';

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header, footer } = await getDictionary(lang);

    return (
        <>
            <Header lang={lang} header={header} />
            <section className="py-24">
                <div className="flex min-h-screen flex-col items-center justify-between p-24">
                    <h1 className="text-3xl font-bold">{page.home.title}</h1>
                    <p className="text-gray-500">{page.home.description}</p>
                </div>
            </section>
            <Footer footer={footer} />
        </>
    );
}
