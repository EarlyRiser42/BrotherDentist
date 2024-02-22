'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Slider from '@/components/beforeAfter/slider';

export default function ReviewDetail({ reviewNumber }) {
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
        >
            <div>
                <span>
                    {currentPost.first_name}
                    {currentPost.last_name}
                </span>
                <span> {currentPost.sex}</span>
                <span> {currentPost.age}</span>
            </div>
            <div> {currentPost.selectedServices}</div>
            <div className="w-full">
                <Slider
                    beforeImage={currentPost.photos[0]}
                    afterImage={currentPost.photos[1]}
                />
            </div>
        </section>
    );
}
