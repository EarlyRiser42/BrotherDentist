import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { authService, dbService } from '@/lib/firebase/config';

interface UserInfo {
    first_name: string;
    last_name: string;
    email: string;
    phoneNumber: string;
    birth_date: string;
    password: string;
}

export async function signUpWithEmail(prevState: any, formData: FormData) {
    const rawFormData: UserInfo = {
        first_name: formData.get('first-name') as string,
        last_name: formData.get('last-name') as string,
        email: formData.get('email') as string,
        phoneNumber: '',
        birth_date: formData.get('birth-date') as string,
        password: formData.get('password') as string,
    };

    try {
        const userCredential = await createUserWithEmailAndPassword(
            authService,
            rawFormData.email,
            rawFormData.password,
        );
        const user = userCredential.user;

        await updateProfile(user, {
            displayName: `${rawFormData.first_name} ${rawFormData.last_name}`,
        });

        await addDoc(collection(dbService, 'users'), rawFormData);
    } catch (error) {
        console.error('Error Sign up:', error);
        return error;
    }
}
