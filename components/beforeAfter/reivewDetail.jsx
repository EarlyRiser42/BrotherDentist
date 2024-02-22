'use client';
import React from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function ReviewDetail({ page }) {
    const searchParams = useSearchParams();
    const writeObjParam = searchParams.get('writeObj');
    let currentPost = null;

    if (writeObjParam) {
        try {
            currentPost = JSON.parse(decodeURIComponent(writeObjParam));
        } catch (error) {
            console.error('Error parsing writeObj query parameter:', error);
        }
    }

    return (
        <section
            aria-label="beforeAfter"
            className="w-full h-auto flex flex-col justify-start items-center"
        ></section>
    );
}
