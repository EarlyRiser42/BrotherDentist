'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import googleLogo from '@/public/login/google_logo.svg';
import NaverLogo from '@/public/login/naver.png';
import KakaoLogo from '@/public/login/kakao.png';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { dbService, authService } from '@/lib/firebase/config';

async function onSocialClick() {
    try {
        const auth = authService;
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const userObj = {
            first_name: user.displayName,
            last_name: '',
            email: user.email,
            phoneNumber: user.phoneNumber,
            birth_date: '',
            password: '',
        };

        // 사용자의 UID로 DocumentReference를 생성
        const userRef = doc(dbService, 'users', user.uid);
        await setDoc(userRef, userObj);
        console.log(user, ' Sign in');
    } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
    }
}

export default function SignUp({ lang, page }) {
    return (
        <div className="h-90dvh min-h-640 flex flex-col justify-center items-center">
            <div className="space-y-4 w-full flex flex-col justify-center items-center">
                <div className="w-9/10 cs:w-80 text-black dark:text-white mb-2">
                    <h1 className="text-2xl cs:text-3xl font-bold text-black dark:text-white">
                        {page.signUp.h1}
                    </h1>
                </div>
                <div className="w-9/10 cs:w-80">
                    <button
                        className="relative border border-white_500 bg-white hover:bg-opacity-90 text-black font-bold py-2 px-4 rounded-3xl inline-flex justify-center items-center w-full h-11 mb-4"
                        onClick={onSocialClick}
                    >
                        <div className="top-3 left-4 absolute">
                            <Image
                                src={googleLogo}
                                alt={`googleLogo`}
                                width={20}
                                height={20}
                            />
                        </div>
                        {page.signUp.authButton1}
                    </button>
                    <button
                        className="relative  bg-green hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-3xl inline-flex justify-center items-center w-full h-11 mb-4"
                        onClick={onSocialClick}
                    >
                        <div className="top-2 left-3 absolute">
                            <Image
                                src={NaverLogo}
                                alt={`NaverLogo`}
                                width={25}
                                height={25}
                            />
                        </div>
                        {page.signUp.authButton2}
                    </button>
                    <button
                        className="relative  bg-yellow hover:bg-opacity-90 text-black font-bold py-2 px-4 rounded-3xl inline-flex justify-center items-center w-full h-11"
                        onClick={onSocialClick}
                    >
                        <div className="top-3 left-4 absolute">
                            <Image
                                src={KakaoLogo}
                                alt={`kakaoLogo`}
                                width={20}
                                height={20}
                            />
                        </div>
                        {page.signUp.authButton3}
                    </button>
                </div>
                <div className="w-9/10 cs:w-80 flex items-center justify-center space-x-2 font-bold text-sm my-2">
                    <div className="flex-grow h-px bg-gray_300 dark:bg-white dark:bg-opacity-30"></div>
                    <span className="text-black text-black dark:text-white font-normal">
                        {page.signUp.span1}
                    </span>
                    <div className="flex-grow h-px bg-gray_300 dark:bg-white dark:bg-opacity-30"></div>
                </div>
                <div className="w-9/10 cs:w-80">
                    <Link href={`/${lang}/signup/form`}>
                        <button
                            className="inline-flex items-center justify-center w-full h-11 px-5 mb-4 py-2.5 text-sm font-medium rounded-3xl cursor-pointer no-underline
                            bg-light_blue text-white hover:bg-opacity-90"
                        >
                            {page.signUp.login}
                        </button>
                    </Link>

                    <div className="w-9/10 cs:w-80 flex items-start mb-4 font-bold">
                        <span>{page.signUp.button1}</span>
                    </div>
                    <Link href={`/${lang}/login`}>
                        <button
                            className="inline-flex items-center justify-center w-full h-11 px-5 mb-4 py-2.5 text-sm font-medium rounded-3xl cursor-pointer no-underline
                            bg-white border border-white_500 text-black hover:bg-opacity-90"
                        >
                            {page.signUp.button2}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
