'use client';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import heroPhoto from '@/public/cosmeticDentistry/hero.jpg';
import heroPhotoLg from '@/public/cosmeticDentistry/heroLg.jpg';
import grayPhoto from '@/public/cosmeticDentistry/gray.jpg';
import grayPhotoLg from '@/public/cosmeticDentistry/grayLg.jpg';
import mask from '@/public/cosmeticDentistry/mask.png';
import maskLg from '@/public/cosmeticDentistry/maskLg.png';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
export default function Hero({ lang, page }) {
    return (
        <section
            aria-label="cosmeticDentistry"
            className="w-full h-auto flex flex-col justify-start items-center mt-8"
        >
            <div className="relative w-9/10 aspect-[3/2] clg:aspect-[5/2] mb-2 sm:mb-4 clg:min-w-940 clg:max-w-1250 cxl:w-85/100 c2xl:w-1900 c3xl:w-2400">
                <MaskContainer>
                    <ColorImage>
                        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cs:right-8 sm:right-12 cmd:right-16 clg:right-24 cxl:right-32 z-[2]">
                            <div className="flex flex-col justify-evenly h-auto ">
                                <div className=" w-full h-auto text-2xl cs:text-3xl sm:text-5xl cmd:text-6xl lg:text-7xl cxl:text-8xl font-bold font-bold text-white">
                                    <h1>{page.cosmeticDentistry.h1_1}</h1>
                                    <h1 className="cs:mt-2">
                                        {page.cosmeticDentistry.h1_2}
                                    </h1>
                                </div>
                                <div className="w-full h-auto text-lg cs:text-xl sm:text-3xl cmd:text-4xl lg:text-4xl cxl:text-5xl font-bold text-white cs:mt-2">
                                    <h2>{page.cosmeticDentistry.h2_1}</h2>
                                    <h2 className="cs:mt-2">
                                        {page.cosmeticDentistry.h2_2}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </ColorImage>
                    {!useMediaQuery({ query: '(max-width: 1024px)' }) ? (
                        <GrayImage />
                    ) : (
                        <Image
                            src={grayPhoto}
                            alt="heroPhoto"
                            width={3325}
                            height={2217}
                            className="rounded-3xl object-cover"
                        />
                    )}
                </MaskContainer>
            </div>
        </section>
    );
}

const addColorAnimation = keyframes`
  0% {
    -webkit-mask-position: 0% 0%;
    mask-position: 0% 0%;
  }
  100% {
    -webkit-mask-position: 100% 0%;
    mask-position: 100% 0%;
  }
`;

// mask-container 스타일
const MaskContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

// color-image 스타일
const ColorImage = styled.div`
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: 1.5rem;
    background-image: url(${heroPhotoLg.src});
    background-size: cover;
    -webkit-mask-image: url(${maskLg.src});
    -webkit-mask-size: cover;
    -webkit-mask-position: 0 0;
    mask-image: url(${maskLg.src});
    mask-repeat: no-repeat;
    mask-size: 2500%;
    mask-position: 0% 0%;
    transition: mask-position;
    animation: ${addColorAnimation} 1.2s steps(23) forwards;
    @media (max-width: 1024px) {
        background-image: url(${heroPhoto.src});
        -webkit-mask-image: url(${mask.src});
        mask-image: url(${mask.src});
    }
`;

const GrayImage = styled.div`
    position: absolute;
    inset: 0;
    border-radius: 1.5rem;
    background-image: url(${grayPhotoLg.src});
    background-size: cover;
`;
