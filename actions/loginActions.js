'use server';
export async function onSocialClick(formData) {
    'use server';

    const rawFormData = {
        customerId: formData.get('email'),
        amount: formData.get('password'),
    };

    // mutate data
    // revalidate cache
}

export async function login(formData) {
    'use server';

    const rawFormData = {
        customerId: formData.get('email'),
        amount: formData.get('password'),
    };

    // mutate data
    // revalidate cache
}
