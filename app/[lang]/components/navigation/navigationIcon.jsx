'use client';
import { useRecoilState } from 'recoil';
import { NavigationState } from '@/atoms/atoms';

export default function NavigationIcon({}) {
    const [navOpen, setNavOpen] = useRecoilState(NavigationState);
    const toggleNav = () => setNavOpen(!navOpen);
    return (
        <div
            onClick={toggleNav}
            className="flex flex-col ml-20 w-12 h-12 justify-center items-center relative rounded-full bg-white dark:bg-black cursor-pointer"
        >
            <span
                className={`bg-black dark:bg-white w-full h-1 rounded-full block absolute ${navOpen ? '-translate-x-1/2 -translate-y-1/2 -rotate-45' : '-translate-x-1/2 -translate-y-2'} duration-500`}
            ></span>
            <span
                className={`bg-black dark:bg-white  h-1 rounded-full block absolute -translate-x-1/2 ${navOpen ? 'w-0' : 'w-full'} duration-500`}
            ></span>
            <span
                className={`bg-black dark:bg-white w-full h-1 rounded-full block absolute ${navOpen ? '-translate-x-1/2 -translate-y-1/2 rotate-45' : '-translate-x-1/2 translate-y-2'} duration-500`}
            ></span>
        </div>
    );
}
