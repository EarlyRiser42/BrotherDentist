'use client';
import React, { useDeferredValue, useEffect, useRef, useState } from 'react';
import { signUpWithEmail } from '@/actions/signUpActions';
import { useFormState } from 'react-dom';
import Image from 'next/image';
import show from '@/public/login/show.svg';
import hide from '@/public/login/hide.svg';

export default function SignupForm({ lang, page }) {
    // 폼 에러메시지 핸들
    const [state, formAction] = useFormState(signUpWithEmail, '');
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        switch (state?.message?.code) {
            case 'auth/weak-password':
                setErrorText('암호가 너무 약합니다.');
                break;
            case 'auth/invalid-password':
                setErrorText('잘못된 암호 형식입니다.');
                break;
            case 'auth/email-already-exists':
                setErrorText('이미 존재하는 이메일입니다.');
                break;
            case 'auth/invalid-email':
                setErrorText('잘못된 이메일 형식입니다.');
                break;
            default:
                setErrorText('서버 오류가 발생했습니다.');
                break;
        }
    }, [state]);

    useEffect(() => {
        if (errorText) {
            const timer = setTimeout(() => setErrorText(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [errorText]);

    // 비밀번호와 지연된 비밀번호 확인 값이 일치하는지 여부
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const deferredPassword2 = useDeferredValue(password2);
    const [isMatching, setIsMatching] = useState(true);

    // deferredPassword2가 변경될 때마다 일치 여부를 업데이트
    useEffect(() => {
        setIsMatching(password === deferredPassword2);
    }, [deferredPassword2]);

    const onPasswordChange = (event) => {
        const {
            target: { value },
        } = event;
        setPassword(value);
    };

    const onPasswordChange2 = (event) => {
        const {
            target: { value },
        } = event;
        setPassword2(value);
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
            {errorText && (
                <div className="fixed h-100dvh w-screen">
                    <div className="absolute bottom-0 w-full bg-light_blue h-12 flex justify-center items-center sm:rounded-xl sm:w-586 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:bottom-12">
                        <span className="text-white">{errorText}</span>
                    </div>
                </div>
            )}
            <div className="space-y-4 w-full flex flex-col justify-center items-center">
                <div className="w-96/100 cs:w-96 max-w-xl md:max-w-md text-black dark:text-white mb-2">
                    <h1 className="text-2xl cs:text-3xl font-bold text-black dark:text-white mb-1">
                        {page.signUp.form.h1}
                    </h1>
                    <p className="text-base cs:text-xl font-medium text-black dark:text-white">
                        {page.signUp.form.p}
                    </p>
                </div>
                <div className="w-full cs:w-80">
                    <form
                        action={formAction}
                        className="w-full flex flex-col justify-center items-center"
                    >
                        <div className="w-96/100 cs:w-96 max-w-xl grid grid-cols-2 gap-4 rounded-lg md:max-w-md  mb-2">
                            <div className="space-y-2">
                                <label htmlFor="first-name">
                                    {page.signUp.form.input1}
                                </label>
                                <input
                                    className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                            border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                    id="first-name"
                                    name="first-name"
                                    placeholder={page.signUp.form.input1}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="last-name">
                                    {page.signUp.form.input2}
                                </label>
                                <input
                                    className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                            border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                    id="last-name"
                                    name="last-name"
                                    placeholder={page.signUp.form.input2}
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-96/100 cs:w-96 max-w-xl flex flex-col justify-between rounded-lg md:max-w-md space-y-2 mb-2">
                            <label htmlFor="email">
                                {page.signUp.form.input3}
                            </label>
                            <input
                                className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                            border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                id="email"
                                name="email"
                                placeholder="m@example.com"
                                required
                                type="email"
                            />
                        </div>
                        <div className="w-96/100 cs:w-96 max-w-xl flex flex-col justify-between rounded-lg md:max-w-md space-y-2 mb-2">
                            <label htmlFor="dob">
                                {page.signUp.form.input4}
                            </label>
                            <input
                                className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                            border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                name="birth-date"
                                id="birth-date"
                                required
                                type="date"
                            />
                        </div>
                        <div className="w-96/100 cs:w-96 max-w-xl flex flex-col justify-between rounded-lg md:max-w-md space-y-2 mb-2">
                            <span className="text-black dark:text-white mb-1">
                                {page.signUp.form.input5}
                            </span>
                            <div className="relative">
                                <input
                                    className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                            border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                    name="password"
                                    type="password"
                                    placeholder={page.signUp.form.input5}
                                    maxLength="20"
                                    ref={passwordRef}
                                    value={password}
                                    onChange={onPasswordChange}
                                    required
                                />
                                <TogglePasswordVisibility
                                    isShowPwChecked={isShowPwChecked}
                                    handleShowPwChecked={handleShowPwChecked}
                                />
                            </div>
                        </div>
                        <div className="w-96/100 cs:w-96 max-w-xl flex flex-col justify-between rounded-lg md:max-w-md mb-0.5">
                            <span className="text-black dark:text-white mb-1">
                                {page.signUp.form.input6}
                            </span>
                            <div className="relative">
                                <input
                                    className="inline-flex items-center justify-center w-full h-12 px-3 mb-4
                            border border-white_500 text-black dark:text-white rounded-xl text-lg"
                                    name="re_password"
                                    type="password"
                                    placeholder={page.signUp.form.input6}
                                    maxLength="20"
                                    required
                                    ref={passwordRef}
                                    value={password2}
                                    onChange={onPasswordChange2}
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
                            <div className="w-96/100 cs:w-96 h-4 max-w-xl flex flex-col justify-between rounded-lg md:max-w-md space-y-2 mb-4">
                                {!isMatching && (
                                    <span className="text-red text-sm">
                                        {page.signUp.form.span}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="w-96/100 cs:w-96 max-w-xl flex flex-col justify-between rounded-lg md:max-w-md space-y-2 mb-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    required
                                />
                                <span className="text-sm cs:text-base ml-2">
                                    {page.signUp.form.span2}
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-96/100 cs:w-96 max-w-xl md:max-w-md h-11  mb-4 py-2.5 text-sm font-medium rounded-3xl cursor-pointer no-underline
                            bg-black dark:bg-white text-white dark:text-black hover:bg-opacity-90"
                            disabled={!isMatching}
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
