import React, { Suspense } from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/components/Home/header';
import BeforeAfter from '@/components/beforeAfter/beforeAfter';
import { collection, getDocs } from 'firebase/firestore';
import { dbService } from '@/lib/firebase/config';
import getBase64 from '@/lib/plaiceholder/getBase64';

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

async function getWrites() {
    const querySnapshot = await getDocs(collection(dbService, 'beforeAfter'));
    const documents = [];

    for (const doc of querySnapshot.docs) {
        const data = doc.data();

        // 각 이미지에 대한 블러 이미지 URL을 생성
        const photosWithBlur = await getBase64(data.photos[1]);

        documents.push({
            id: doc.id,
            ...data,
            photos: [...data.photos, photosWithBlur],
        });
    }

    return documents;
}