export default async function Loading() {
    return (
        <div
            className={`flex justify-center items-start w-full h-full animation-[hideLoadingScreen_10s_linear_forwards]`}
        >
            <div className="mt-5 w-6 h-6 border-4 border-t-light_blue border-white dark:border-black rounded-full animate-spin"></div>
        </div>
    );
}
