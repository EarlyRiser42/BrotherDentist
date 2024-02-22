import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { authService, dbService, storageService } from '@/lib/firebase/config';
import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';

interface UserInfo {
    first_name: string;
    last_name: string;
    email: string;
    phoneNumber: string;
    birth_date: string;
    password: string;
    role: string;
}

interface loginInfo {
    email: string;
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
        role: 'user',
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

export async function loginWithEmail(prevState: any, formData: FormData) {
    const rawFormData: loginInfo = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };
    try {
        const userCredential = await signInWithEmailAndPassword(
            authService,
            rawFormData.email,
            rawFormData.password,
        );
    } catch (error) {
        console.error('Error Sign In:', error);
        return error;
    }
}

export async function writeAction(
    category: string,
    selectedServices: string[],
    formData: FormData,
) {
    async function uploadImageToStorage(
        imageFile: File,
        path: string,
    ): Promise<string> {
        const storageRef = ref(storageService, path);
        const snapshot = await uploadBytes(storageRef, imageFile);
        const url = await getDownloadURL(snapshot.ref);
        return url;
    }

    const rawFormData = {
        first_name: formData.get('first-name') as string,
        last_name: formData.get('last-name') as string,
        age: formData.get('age') as string,
        sex: formData.get('sex') as string,
        date: new Date(),
        selectedServices: selectedServices,
    };

    try {
        let imagesUrls: string[] = [];
        if (category === 'beforeAfter') {
            // 'beforeAfter' 카테고리일 때 before-image와 after-image 처리
            const beforeImageFile = formData.get('before-image') as File;
            const afterImageFile = formData.get('after-image') as File;
            const beforeImageUrl = await uploadImageToStorage(
                beforeImageFile,
                `beforeAfter/${rawFormData.first_name}${rawFormData.last_name}/before`,
            );
            const afterImageUrl = await uploadImageToStorage(
                afterImageFile,
                `beforeAfter/${rawFormData.first_name}${rawFormData.last_name}/after`,
            );
            imagesUrls = [beforeImageUrl, afterImageUrl];
        } else if (category === 'review') {
            // 'review' 카테고리일 때 review-image 처리
            const reviewImageFile = formData.get('review-image') as File;
            const reviewImageUrl = await uploadImageToStorage(
                reviewImageFile,
                `reviews/${rawFormData.first_name}_${rawFormData.last_name}`,
            );
            imagesUrls = [reviewImageUrl];
        }

        // Firestore에 문서 추가
        const docRef = await addDoc(collection(dbService, category), {
            ...rawFormData,
            photos: imagesUrls,
        });

        console.log('Document written with ID: ', docRef.id);
    } catch (error) {
        console.error('Error Writes:', error);
        throw error;
    }
}
