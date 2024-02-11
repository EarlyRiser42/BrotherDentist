'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { login, onSocialClick } from '@/actions/loginActions';
import Image from 'next/image';
import show from '@/public/login/show.svg';
import hide from '@/public/login/hide.svg';

export default function SignupForm({ lang, page }) {
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const onPasswordChange = (event) => {
        const {
            target: { value },
        } = event;
        setPassword(value);
    };

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
        <div className="h-100dvh min-h-640 flex flex-col justify-center items-center">
            <div className="space-y-4 w-full flex flex-col justify-center items-center">
                <div className="w-9/10 cs:w-80 text-black dark:text-white mb-2">
                    <h1 className="text-2xl cs:text-3xl font-bold text-black dark:text-white">
                        {page.signUp.h1}
                    </h1>
                </div>
                <div className="w-9/10 cs:w-80">
                    <form
                        action={login}
                        className="w-full flex flex-col justify-center items-center"
                    >
                        <div className=" w-9/10 cs:w-80 max-w-xl flex flex-col justify-between rounded-lg md:max-w-md">
                            <span className="text-black dark:text-white mb-1">
                                이름
                            </span>
                            <StyledInput
                                name="name"
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                        <div className=" w-9/10 cs:w-80 max-w-xl flex flex-col justify-between rounded-lg md:max-w-md">
                            <span className="text-black dark:text-white mb-1">
                                이메일
                            </span>
                            <StyledInput
                                name="email"
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                        <div className=" w-9/10 cs:w-80 max-w-xl flex flex-col justify-between rounded-lg md:max-w-md">
                            <span className="text-black dark:text-white mb-1">
                                전화번호
                            </span>
                            <div className="w-full flex flex-row gap-x-2 mb-4">
                                <input
                                    className="inline-flex items-center justify-center w-4/5 h-12 px-3
                            border border-white_500 text-black dark:text-white rounded-xl  text-lg"
                                    name="phoneNumber"
                                    type="number"
                                    placeholder="phoneNumber"
                                    required
                                />
                                <button className="w-1/5 flex justify-center items-center h-12 px-3 rounded-lg bg-white text-black text-xs cs:text-base">
                                    인증
                                </button>
                            </div>
                        </div>
                        <div className="w-9/10 cs:w-80 max-w-xl flex flex-col justify-between rounded-lg md:max-w-md">
                            <span className="text-black dark:text-white mb-1">
                                비밀번호
                            </span>
                            <div className="relative">
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
                        </div>
                        <div className="w-9/10 cs:w-80 max-w-xl flex flex-col justify-between rounded-lg md:max-w-md mb-4">
                            <span className="text-black dark:text-white mb-1">
                                비밀번호 재입력
                            </span>
                            <div className="relative">
                                <input
                                    className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                            border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    maxLength="16"
                                    required
                                    ref={passwordRef}
                                    value={password}
                                    onChange={onPasswordChange}
                                    onKeyDown={(e) =>
                                        signalByEnter(e, () =>
                                            onClick(password),
                                        )
                                    }
                                />
                                <TogglePasswordVisibility
                                    isShowPwChecked={isShowPwChecked}
                                    handleShowPwChecked={handleShowPwChecked}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full h-11 px-5 mb-4 py-2.5 text-sm font-medium rounded-3xl cursor-pointer no-underline
                            bg-light_blue text-white hover:bg-opacity-90"
                        >
                            {page.signUp.login}
                        </button>
                    </form>
                </div>
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

export const signalByEnter = (event, callback) => {
    if (event.key === 'Enter') {
        callback();
    }
};
