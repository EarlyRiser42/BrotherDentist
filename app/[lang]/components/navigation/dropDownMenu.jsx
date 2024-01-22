import { useState } from 'react';

const DropdownMenu = ({ navigation }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ul className="flex flex-col justify-evenly w-3/5 lg:flex-row ">
            <li className="md:mr-4 cursor-pointer text-black dark:text-white hover:font-bold">
                {navigation.about}
            </li>
            <li
                className="md:mr-4 relative cursor-pointer text-black dark:text-white hover:font-bold"
                onClick={() => setIsOpen(!isOpen)}
            >
                {navigation.services.title}
                {isOpen && (
                    <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg">
                        <li className="text-black dark:text-white hover:font-bold">
                            {navigation.services.subServices.implant}
                        </li>
                        <li className="text-black dark:text-white hover:font-bold">
                            {navigation.services.subServices.prosthodontics}
                        </li>
                        <li className="text-black dark:text-white hover:font-bold">
                            {navigation.services.subServices.cosmeticDentistry}
                        </li>
                    </ul>
                )}
            </li>
            <li className="cursor-pointer text-black dark:text-white hover:font-bold">
                {navigation.reservation}
            </li>
        </ul>
    );
};

export default DropdownMenu;
