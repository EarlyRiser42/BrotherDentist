'use client';

import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { NavigationState } from '../(Recoil)/recoilRootProvider';

export const NavigationIcon = () => {
    const [navOpen, setNavOpen] = useRecoilState(NavigationState);
    const toggleNav = () => setNavOpen(!navOpen);
    return (
        <div
            onClick={toggleNav}
            className="flex flex-col ml-20 w-12 h-12 justify-center items-center relative rounded-full bg-white dark:bg-black"
        >
            <span
                className={`bg-black dark:bg-white w-full h-1 rounded-full block absolute ${navOpen ? '-translate-x-1/2 -translate-y-1/2 -rotate-45' : '-translate-x-1/2 -translate-y-2'} duration-500`}
            ></span>
            <span
                className={`bg-black dark:bg-white w-full h-1 rounded-full block absolute -translate-x-1/2 ${navOpen ? 'w-0' : ''} duration-500`}
            ></span>
            <span
                className={`bg-black dark:bg-white w-full h-1 rounded-full block absolute ${navOpen ? '-translate-x-1/2 -translate-y-1/2 rotate-45' : '-translate-x-1/2 translate-y-2'} duration-500`}
            ></span>
        </div>
    );
};
export default function Navigation({ lang }) {
    const navOpen = useRecoilValue(NavigationState);

    return (
        navOpen && (
            <nav className="flex space-x-4 mb-2">
                <Link href="/" passHref>
                    <a className="bg-blue-200 rounded px-4 py-2">Home</a>
                </Link>
                <Link href="/todos" passHref>
                    <a className="bg-cyan-200 rounded px-4 py-2">Todos</a>
                </Link>
            </nav>
        )
    );
}
