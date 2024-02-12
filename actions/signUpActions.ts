'use strict';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { authService } from '@/components/firebase/config';

export async function signUpWithEmail(prevState: any, formData: FormData) {
    const rawFormData = {
        first_name: formData.get('first-name'),
        last_name: formData.get('last-name'),
        email: formData.get('email'),
        birth_date: formData.get('birth-date'),
        password: formData.get('password'),
    };

    try {
        const userCredential = await createUserWithEmailAndPassword(
            authService,
            <string>rawFormData.email,
            <string>rawFormData.password,
        );
        const user = userCredential.user;
        console.log(user);
        // 여기에 사용자 정보를 데이터베이스에 저장하는 로직 추가
        // 예: 사용자 프로필 정보 저장
        // revalidate cache 필요시 구현
    } catch (error) {
        return {
            message: error,
        };
    }
}
