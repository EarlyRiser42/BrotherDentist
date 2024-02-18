import { authService as auth } from '@/lib/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

interface loginInfo {
    email: string;
    password: string;
}

export async function loginWithEmail(prevState: any, formData: FormData) {
    const rawFormData: loginInfo = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            rawFormData.email,
            rawFormData.password,
        );
    } catch (error) {
        console.error('Error Sign In:', error);
        return error;
    }
}
