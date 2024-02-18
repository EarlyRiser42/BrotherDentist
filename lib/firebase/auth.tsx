import {
    User as FirebaseUser,
    signOut as firebaseSignOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { authService as auth } from '@/lib/firebase/config';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export async function signOut() {
    return firebaseSignOut(auth);
}

export function useUser() {
    const [userObj, setUserObj] = useState<FirebaseUser | any>();
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            setUserObj(authUser);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        onAuthStateChanged(auth, (authUser) => {
            if (userObj === undefined) return;

            // refresh when user changed to ease testing
            if (userObj?.displayName !== authUser?.displayName) {
                router.refresh();
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userObj]);

    return userObj;
}
