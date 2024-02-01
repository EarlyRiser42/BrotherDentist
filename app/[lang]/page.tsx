import { Locale } from '@/i18n.config';
import { getDictionary } from '@/dictionaries/dictionary';
import Header from '@/app/[lang]/components/header';
import React from 'react';
import Footer from '@/app/[lang]/components/footer';
import Hero from '@/app/[lang]/components/page/hero';
import ImageSlider from '@/app/[lang]/components/page/imageSlider.tsx';
import test from '../../public/portrait_body.png';
import test2 from '../../public/kakaotalk.png';

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { page, header, footer } = await getDictionary(lang);
    const CAREERS = [
        {
            url: test,
            alt: 'careerOne',
            p1: ['대표원장', '최인혁'],
            p2: [
                '서울대학교 치과대학 입학 희망',
                '대한 임플란트학회 정회원',
                '대한 치과보철학회 정회원',
                '오스템 AIC Implant 고급과정 수료',
                '오스템 AIC Implant Sinus Surgery Course',
                '오스템 AIC OneGuide Advanced Course',
                '(전) 충청남도 서천군 보건지소 치과대표 공중보건의사',
            ],
        },
        { url: test2, alt: 'careerTwo' },
    ];

    return (
        <>
            <Header lang={lang} header={header} />
            <Hero page={page} />
            <ImageSlider careers={CAREERS} />
            <Footer footer={footer} />
        </>
    );
}
