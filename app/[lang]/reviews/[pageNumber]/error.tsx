'use client';
import { useRouter } from 'next/navigation';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();
    console.log(error);
    return (
        <div className="w-screen h-100dvh flex justify-center items-center bg-gray_800">
            <div className="w-96/100 h-40 bg-white dark:bg-black sm:w-72 sm:h-32 rounded-3xl flex flex-col justify-evenly items-center">
                <h2>Something went wrong!</h2>
                <div className="flex gap-x-4">
                    <button
                        onClick={() => router.push('/')}
                        className="rounded-3xl bg-black dark:bg-white dark:text-black text-white px-4 py-2"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => reset()}
                        className="rounded-3xl bg-light_blue text-white px-4 py-2"
                    >
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
}
