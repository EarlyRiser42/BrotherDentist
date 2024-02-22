export default function Spinner() {
    return (
        <div className={`flex justify-center items-start w-full h-full`}>
            <div className="mt-5 w-6 h-6 border-4 border-t-light_blue border-blue_500 rounded-full animate-spin"></div>
        </div>
    );
}
