import { useState } from 'react';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ul className="flex flex-col justify-evenly w-3/5 lg:flex-row ">
            <li className="md:mr-4 cursor-pointer text-black dark:text-white hover:font-bold">
                소개
            </li>
            <li
                className="md:mr-4 relative cursor-pointer text-black dark:text-white hover:font-bold"
                onClick={() => setIsOpen(!isOpen)}
            >
                진료과목
                {isOpen && (
                    <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg">
                        <li className="text-black dark:text-white hover:font-bold">
                            충치
                        </li>
                        <li className="text-black dark:text-white hover:font-bold">
                            임플란트
                        </li>
                        <li className="text-black dark:text-white hover:font-bold">
                            레진
                        </li>
                    </ul>
                )}
            </li>
            <li className="cursor-pointer text-black dark:text-white hover:font-bold">
                예약하기
            </li>
        </ul>
    );
};

export default DropdownMenu;
