import localFont from 'next/font/local';

// 한글 폰트
export const NanumSquare = localFont({
    src: [
        {
            path: '../public/fonts/NanumSquareL.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/NanumSquareR.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/NanumSquareB.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/NanumSquareEB.otf',
            weight: '600',
            style: 'normal',
        },
    ],
});
// 영어 폰트
export const NanumSquareOTF = localFont({
    src: [
        {
            path: '../public/fonts/NanumSquareOTF_acL.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/NanumSquareOTF_acR.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/NanumSquareOTF_acB.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/NanumSquareOTF_acEB.otf',
            weight: '600',
            style: 'normal',
        },
    ],
});
