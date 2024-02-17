'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { login } from '@/actions/loginActions';
import show from '@/public/login/show.svg';
import hide from '@/public/login/hide.svg';
import googleLogo from '@/public/login/google_logo.svg';
import NaverLogo from '@/public/login/naver.png';
import KakaoLogo from '@/public/login/kakao.png';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { setDoc, collection } from 'firebase/firestore';
import { dbService } from '@/components/firebase/config';

async function onSocialClick() {
    try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const userObj = {
            first_name: user.displayName.split(' ')[0],
            last_name: user.displayName.split(' ')[1],
            email: user.email,
            phoneNumber: user.phoneNumber,
            birth_date: '',
            password: '',
        };

        await setDoc(collection(dbService, 'users'), userObj);
    } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
    }
}

export default function Login({ lang, page }) {
    // 비밀번호 보이기 안보이기
    const [isShowPwChecked, setShowPwChecked] = useState(false);
    const passwordRef = useRef(null);

    const handleShowPwChecked = async () => {
        const password = await passwordRef.current;
        if (password === null) return;

        await setShowPwChecked(!isShowPwChecked);
        if (!isShowPwChecked) {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    const TogglePasswordVisibility = ({
        isShowPwChecked,
        handleShowPwChecked,
    }) => {
        return (
            <button
                onClick={handleShowPwChecked}
                className="absolute flex items-center h-5 w-5 top-3 right-2"
            >
                <Image
                    src={!isShowPwChecked ? show : hide}
                    alt={!isShowPwChecked ? '비밀번호 보기' : '비밀번호 숨기기'}
                    fill
                    sizes="2.5rem"
                />
            </button>
        );
    };

    return (
        <div className="h-90dvh min-h-710 flex flex-col justify-center items-center">
            <div className="space-y-4 w-full flex flex-col justify-center items-center">
                <div className="w-9/10 cs:w-80 text-black dark:text-white mb-2">
                    <h1 className="text-2xl cs:text-3xl font-bold text-black dark:text-white">
                        {page.login.h1}
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
                        {page.login.authButton1}
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
                        {page.login.authButton2}
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
                        {page.login.authButton3}
                    </button>
                </div>
                <div className="w-9/10 cs:w-80 flex items-center justify-center space-x-2 font-bold text-sm my-2">
                    <div className="flex-grow h-px bg-gray_300 dark:bg-white dark:bg-opacity-30"></div>
                    <span className="text-black text-black dark:text-white font-normal">
                        {page.login.span1}
                    </span>
                    <div className="flex-grow h-px bg-gray_300 dark:bg-white dark:bg-opacity-30"></div>
                </div>

                <form
                    action={login}
                    className="w-full flex flex-col justify-center items-center"
                >
                    <div className="relative w-9/10 cs:w-80 max-w-xl flex justify-between rounded-lg md:max-w-md">
                        <StyledInput
                            name="email"
                            type="text"
                            placeholder="Email"
                        />
                    </div>

                    <div className="relative w-9/10 cs:w-80 max-w-xl flex justify-between rounded-lg md:max-w-md">
                        <input
                            className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                            border border-white_500 text-black dark:text-white rounded-xl text-lg"
                            name="password"
                            type="password"
                            placeholder="Password"
                            maxLength="16"
                            required
                            ref={passwordRef}
                        />
                        <TogglePasswordVisibility
                            isShowPwChecked={isShowPwChecked}
                            handleShowPwChecked={handleShowPwChecked}
                        />
                    </div>
                    <div className="w-9/10 cs:w-80">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full h-11 px-5 mb-4 py-2.5 text-sm font-medium rounded-3xl cursor-pointer no-underline
                            border border-white_500 bg-black text-white hover:bg-opacity-90"
                        >
                            {page.login.login}
                        </button>
                        <button
                            className="inline-flex items-center justify-center w-full h-11 px-5 py-2.5 text-sm font-medium rounded-3xl cursor-pointer no-underline
                            border border-white_500 bg-white text-black hover:bg-opacity-90 "
                        >
                            {page.login.button1}
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-9/10 cs:w-80 mt-4 flex items-start">
                <span>{page.login.button2}</span>
                <Link href={`/${lang}/signup`}>
                    <span className="text-light_blue ml-2">
                        {page.login.button3}
                    </span>
                </Link>
            </div>
        </div>
    );
}

const StyledInput = ({ name, type, placeholder }) => {
    return (
        <input
            className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                            border border-white_500 text-black dark:text-white rounded-xl  text-lg"
            name={name}
            type={type}
            placeholder={placeholder}
            required
        />
    );
};
