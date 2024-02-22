import React from 'react';
import { dbService } from '@/lib/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import getBase64 from '@/lib/plaiceholder/getBase64';
import BeforeAfterList from '@/components/beforeAfter/beforeAfterList';

export default async function BeforeAfter({ lang, page, pageNumber }) {
    const WRITES = await getWrites();

    return (
        <BeforeAfterList
            lang={lang}
            page={page}
            pageNumber={pageNumber}
            writes={WRITES}
        />
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
            date: data.date.toDate().toISOString(),
            photos: [...data.photos, photosWithBlur], // 기존 이미지 배열에 블러 이미지 URL 추가
        });
    }

    return documents;
}
