'use client';
import React, { useEffect, useState } from 'react';
import { dbService } from '@/lib/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import ReviewList from '@/components/reviews/reviewList';
import Spinner from '@/components/loading/spinner';

export default function Reviews({ lang, page, pageNumber }) {
    const [writes, setWrites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWrites = async () => {
            const querySnapshot = await getDocs(
                collection(dbService, 'review'),
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
            <ReviewList
                lang={lang}
                page={page}
                pageNumber={pageNumber}
                writes={writes}
            />
        );
    }
}
