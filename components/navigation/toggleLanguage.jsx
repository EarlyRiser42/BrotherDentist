'use client';

import { AiOutlineGlobal } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ToggleLanguage() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted)
        return (
            <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                width={50}
                height={50}
                sizes="50x50"
                alt="Loading Light/Dark Toggle"
                priority={false}
                title="Loading Light/Dark Toggle"
            />
        );

    return (
        <button
            onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
            aria-label="Toggle Theme"
        >
            {resolvedTheme === 'dark' ? (
                <FiSun className={'w-6 h-6 text-white'} />
            ) : (
                <FiMoon className={'w-6 h-6 text-black'} />
            )}
        </button>
    );
}
