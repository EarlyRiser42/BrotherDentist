'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.log(error);
    return (
        <div className="w-screen h-100dvh flex justify-center items-center bg-gray_800">
            <div className="w-96/100 h-80 bg-white dark:bg-black sm:w-72 sm:h-32 rounded-3xl flex flex-col justify-evenly items-center">
                <h2>Something went wrong!</h2>
                <button
                    onClick={() => reset()}
                    className="rounded-3xl bg-light_blue text-white p-2"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
