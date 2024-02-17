'use strict';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { authService, dbService } from '@/components/firebase/config';

export async function signUpWithEmail(prevState: any, formData: FormData) {
    const rawFormData = {
        first_name: formData.get('first-name'),
        last_name: formData.get('last-name'),
        email: formData.get('email'),
        birth_date: formData.get('birth-date'),
        password: formData.get('password'),
    };

    try {
        // 사용자 생성
        const userCredential = await createUserWithEmailAndPassword(
            authService,
            rawFormData.email as string,
            rawFormData.password as string,
        );
        const user = userCredential.user;
        updateProfile(user, {
            displayName: `${rawFormData.first_name}${rawFormData.last_name}`,
        }).catch((error) => {
            console.log(error);
            return {
                message: error instanceof Error ? error.message : String(error),
            };
        });
        await dbService.collection('users').add(rawFormData);
    } catch (error) {
        // 오류 처리
        return {
            message: error instanceof Error ? error.message : String(error),
        };
    }
}
