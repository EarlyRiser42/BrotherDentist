'use client';
export default function NavigationIcon({ navOpen }) {
    return (
        <div className="flex flex-col ml-4 sm:ml-12 w-1/12 h-12 max-w-10 justify-center items-center relative rounded-full bg-white dark:bg-black cursor-pointer">
            <span
                className={`bg-black dark:bg-white w-full min-w-6 h-1 rounded-full block absolute ${navOpen ? '-translate-x-1/2 -translate-y-1/2 -rotate-45' : '-translate-x-1/2 -translate-y-2'} duration-300`}
            ></span>
            <span
                className={`bg-black dark:bg-white  h-1 rounded-full block absolute -translate-x-1/2 ${navOpen ? 'w-0' : 'w-full min-w-6'} duration-300`}
            ></span>
            <span
                className={`bg-black dark:bg-white w-full min-w-6 h-1 rounded-full block absolute ${navOpen ? '-translate-x-1/2 -translate-y-1/2 rotate-45' : '-translate-x-1/2 translate-y-2'} duration-300`}
            ></span>
        </div>
    );
}
