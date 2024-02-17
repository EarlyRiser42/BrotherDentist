'use server';

export async function login(formData) {
    const rawFormData = {
        customerId: formData.get('email'),
        amount: formData.get('password'),
    };

    // mutate data
    // revalidate cache
}
