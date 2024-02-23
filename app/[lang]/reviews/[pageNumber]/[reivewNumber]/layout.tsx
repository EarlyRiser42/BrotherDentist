'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/components/reviews/Modal';
import { useUser } from '@/lib/firebase/auth';
import { Locale } from '@/i18n.config';

export default function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const isLoggedIn = useUser();
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (isLoggedIn === null) {
            // 로그인하지 않은 사용자에게 모달 표시
            setShowModal(true);
        }
    }, [isLoggedIn]);

    const handleModalClose = () => {
        setShowModal(false);
        router.push(`/${params.lang}/reviews/1`);
    };

    return (
        <>
            {showModal ? (
                <Modal lang={params.lang} onClose={handleModalClose} />
            ) : (
                <main>{children}</main>
            )}
        </>
    );
}
