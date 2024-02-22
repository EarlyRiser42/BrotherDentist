import {
    User as FirebaseUser,
    signOut as firebaseSignOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { authService as auth } from '@/lib/firebase/config';
import { useEffect, useState } from 'react';

export async function signOut() {
    return firebaseSignOut(auth);
}

export function useUser() {
    const [userObj, setUserObj] = useState<FirebaseUser | any>();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            setUserObj(authUser);
        });

        return () => unsubscribe();
    }, []);

    return userObj;
}
