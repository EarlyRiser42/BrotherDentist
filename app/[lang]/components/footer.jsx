export default function footer({ footer }) {
    return (
        <footer className="flex justify-center w-full py-6 bg-white dark:bg-black border-t border-gray dark:border-gray">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <p className="text-xs text-gray-400 lg:text-sm">
                            {footer.dentalName}
                        </p>
                        <p className="text-xs text-gray-400 lg:text-sm">
                            {footer.services}
                        </p>
                        <p className="text-xs text-gray-400 lg:text-sm">
                            {footer.owner}
                        </p>
                        <p className="text-xs text-gray-400 lg:text-sm">
                            {footer.BusinessRegistrationNumber}
                        </p>
                    </div>
                    <p className="text-xs text-gray-400">
                        © 2024 HyukPlant. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
