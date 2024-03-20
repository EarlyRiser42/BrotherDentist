'use client';
import React, { useEffect, useState } from 'react';
import { dbService } from '@/lib/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import BeforeAfterList from '@/components/beforeAfter/beforeAfterList';
import Spinner from '@/components/loading/spinner';

export default function BeforeAfter({ lang, page, pageNumber }) {
    const [writes, setWrites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWrites = async () => {
            const querySnapshot = await getDocs(
                collection(dbService, 'beforeAfter'),
            );
            const documents = [];

            for (const doc of querySnapshot.docs) {
                const data = doc.data();
                documents.push({
                    id: doc.id,
                    ...data,
                    date: data.date.toDate().toISOString(),
                    photos: data.photos,
                });
            }
            setIsLoading(false);
            setWrites(documents);
        };

        fetchWrites().catch(console.error);
    }, []);

    if (isLoading) {
        return <Spinner />;
    } else {
        return (
            <BeforeAfterList
                lang={lang}
                page={page}
                pageNumber={pageNumber}
                writes={writes}
            />
        );
    }
}
