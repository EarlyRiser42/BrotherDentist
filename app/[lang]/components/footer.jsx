export default function footer({ footer }) {
    return (
        <footer className="flex justify-center w-full h-20vh py-6 bg-white dark:bg-black border-t border-gray dark:border-gray">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div>
                            <span className="text-xs text-gray_600 lg:text-sm">
                                {footer.owner}
                            </span>
                            <span className="text-gray_300"> | </span>
                            <span className="text-xs text-gray_600 lg:text-sm">
                                {footer.dentalName}
                            </span>
                        </div>

                        <div>
                            <span className="text-xs text-gray_600 lg:text-sm">
                                {footer.services}
                            </span>
                            <span className="text-gray_300"> | </span>
                            <span className="text-xs text-gray_600 lg:text-sm">
                                {footer.BusinessRegistrationNumber}
                            </span>
                        </div>
                        <div>
                            <span className="text-xs text-gray_600 lg:text-sm">
                                {footer.telephoneNumber}
                            </span>
                            <span className="text-gray_300"> | </span>
                            <span className="text-xs text-gray_600 lg:text-sm">
                                {footer.emailAddress}
                            </span>
                        </div>
                    </div>

                    <div>
                        <span className="text-xs text-gray_600">
                            © 2024 HyukPlant. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
