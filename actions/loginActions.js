'use server';
import firebase from 'firebase/compat/app';
import { authService } from '@/components/firebase/config';

export async function login(formData) {
    const rawFormData = {
        customerId: formData.get('email'),
        amount: formData.get('password'),
    };

    // mutate data
    // revalidate cache
}
