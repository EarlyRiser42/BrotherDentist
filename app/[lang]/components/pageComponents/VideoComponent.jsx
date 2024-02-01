import React from 'react';

export default async function VideoComponent() {
    return (
        <video
            className="rounded-3xl absolute w-full h-full object-fill overflow-clip"
            src="https://vyvvq5l1gvzvizwp.public.blob.vercel-storage.com/dental_hero_final-JUnPrCcBdmrcYnk9ig7O1pduqah9gJ.mp4"
            poster="https://vyvvq5l1gvzvizwp.public.blob.vercel-storage.com/1-nD9DFSN68PxUDxCwDQ1g9kRQ6uBNz2.webp"
            autoPlay
            muted
            loop
            playsInline
        />
    );
}
