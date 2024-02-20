import React from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import BeforeAfter from '@/components/beforeAfter/beforeAfter';
import { collection, getDocs } from 'firebase/firestore';
import { dbService } from '@/lib/firebase/config';
export default async function Page({
    params: { lang, pageNumber },
}: {
    params: { lang: Locale; pageNumber: string };
}) {
    const { page, header } = await getDictionary(lang);
    const writes = await getWrites();

    return (
        <>
            <Header lang={lang} header={header} />
            <BeforeAfter
                lang={lang}
                page={page}
                pageNumber={pageNumber}
                writes={writes}
            />
        </>
    );
}

interface Document {
    id: string;
    [key: string]: any;
}

async function getWrites() {
    const querySnapshot = await getDocs(collection(dbService, 'beforeAfter'));
    const documents: Document[] = [];
    querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
    });
    return documents;
}
