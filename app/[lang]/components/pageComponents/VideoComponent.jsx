import React from 'react';

export default async function VideoComponent() {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute block left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 object-cover overflow-clip rounded-3xl"
            poster="https://firebasestorage.googleapis.com/v0/b/loginform-6747a.appspot.com/o/1.webp?alt=media&token=763f4314-465e-4551-9c9c-e77012b27209"
        >
            <source
                src="https://firebasestorage.googleapis.com/v0/b/loginform-6747a.appspot.com/o/dental_hero_final.mp4?alt=media&token=0c8b3fee-71ef-451a-8650-61e0167a2bb7"
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    );
}
