import React from 'react';

export default async function VideoComponent() {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute block left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover overflow-clip rounded-3xl"
            poster="https://firebasestorage.googleapis.com/v0/b/hyukplant.appspot.com/o/public%2Fhero.webp?alt=media&token=7e8ff63b-ea5e-4e5e-9160-1a9f8ecb5434"
        >
            <source
                src="https://firebasestorage.googleapis.com/v0/b/hyukplant.appspot.com/o/public%2Fhero.mp4?alt=media&token=10a65782-5f44-4e0a-935d-2ac8395a9857"
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    );
}
