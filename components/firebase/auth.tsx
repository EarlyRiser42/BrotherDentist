'use client';
import { useEffect, useState } from 'react';
import {
    User as FirebaseUser,
    signOut as firebaseSignOut,
    setPersistence,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    browserLocalPersistence,
    browserSessionPersistence,
} from 'firebase/auth';
import { authService as auth } from '@/components/firebase/config';

export async function signIn(
    email: string,
    password: string,
    rememberMe = false,
) {
    await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence,
    );
    return signInWithEmailAndPassword(auth, email, password);
}

export async function signOut() {
    return firebaseSignOut(auth);
}

export function useUser() {
    const [userObj, setUserObj] = useState<FirebaseUser | null | false>(false);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUserObj(firebaseUser);
            } else {
                setUserObj(null);
            }
        });
        return () => unsubscribe();
    }, []);

    return userObj;
}
