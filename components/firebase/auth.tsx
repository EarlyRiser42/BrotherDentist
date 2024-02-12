'use client';
import { useEffect, useState } from 'react';
import {
    getAuth,
    User as FirebaseUser,
    signOut as firebaseSignOut,
    setPersistence,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    browserLocalPersistence,
    browserSessionPersistence,
} from 'firebase/auth';
import { authService as auth } from '@/components/firebase/config';

export async function signIn(email, password, rememberMe = false) {
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
    const [user, setUser] = useState<FirebaseUser | null | false>(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    return user;
}
