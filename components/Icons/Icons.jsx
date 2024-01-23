import { useTheme } from 'next-themes';

export const DummyIcon = () => <div className="w-6 h-6 opacity-0"></div>;

export const ToggleEn = () => {
    const { resolvedTheme } = useTheme();
    const strokeColor = resolvedTheme === 'dark' ? '#FFFFFF' : '#000000';

    return (
        <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
        >
            <g
                data-v-41fcfff3=""
                fill="none"
                fillRule="evenodd"
                stroke="#000000"
            >
                <g
                    data-v-41fcfff3=""
                    strokeWidth="1.35px"
                    stroke={strokeColor}
                    fill="none"
                >
                    <path
                        data-v-41fcfff3=""
                        d="M19.353 9.914c0 5.213-4.226 9.438-9.438 9.438-5.213 0-9.438-4.225-9.438-9.438C.477 4.702 4.702.477 9.915.477c5.212 0 9.438 4.225 9.438 9.437z"
                        transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"
                        stroke={strokeColor}
                        fill="none"
                        strokeWidth="1.35px"
                    ></path>{' '}
                    <path
                        data-v-41fcfff3=""
                        strokeLinejoin="round"
                        d="M13.662 9.914c0 5.213-3.748 9.438-3.748 9.438s-3.747-4.225-3.747-9.438c0-5.212 3.747-9.437 3.747-9.437s3.748 4.225 3.748 9.437z"
                        transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"
                        stroke={strokeColor}
                        fill="none"
                        strokeWidth="1.35px"
                    ></path>
                    <path
                        data-v-41fcfff3=""
                        d="M.876 7.018L18.952 7.018M.876 12.811L18.952 12.811"
                        transform="translate(-1402 -23) translate(1358 23) translate(44) translate(2 2)"
                        stroke={strokeColor}
                        fill="none"
                        strokeWidth="1.35px"
                    ></path>
                </g>
            </g>
        </svg>
    );
};

export const ToggleKr = () => {
    const { resolvedTheme } = useTheme();
    const strokeColor = resolvedTheme === 'dark' ? '#FFFFFF' : '#000000';

    return (
        <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
        >
            <g
                data-v-ef6c51ca=""
                fill="none"
                fillRule="evenodd"
                stroke="#FFFFFF"
            >
                <g
                    data-v-ef6c51ca=""
                    strokeWidth="1.5px"
                    stroke="#FFFFFF"
                    fill="none"
                >
                    <path
                        data-v-ef6c51ca=""
                        d="M19.353 9.914c0 5.213-4.226 9.438-9.438 9.438-5.213 0-9.438-4.225-9.438-9.438C.477 4.702 4.702.477 9.915.477c5.212 0 9.438 4.225 9.438 9.437z"
                        transform="translate(-1375 -169) translate(79.5 145) translate(1248 24) translate(50 2)"
                        stroke={strokeColor}
                        fill="none"
                        strokeWidth="1.5px"
                    ></path>
                    <path
                        data-v-ef6c51ca=""
                        d="M19.205 11.52c-.451-2.769-2.357-4.129-4.643-4.227-2.434-.023-3.491 1.71-4.267 2.615l-.594.69c-1.361 1.238-2.384 1.633-3.876 1.588C2.897 12.153.888 9.456.888 7.224"
                        transform="translate(-1375 -169) translate(79.5 145) translate(1248 24) translate(50 2)"
                        stroke={strokeColor}
                        fill="none"
                        strokeWidth="1.5px"
                    ></path>
                </g>
            </g>
        </svg>
    );
};

export const SunIcon = () => (
    <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
    >
        <g data-v-5fa5aeb3="" fill="none" fillRule="evenodd" stroke="#FFFFFF">
            <path
                data-v-5fa5aeb3=""
                strokeWidth="1.6px"
                d="M11.888 6.22c1.586 0 3.023.643 4.063 1.682 1.04 1.04 1.682 2.476 1.682 4.063 0 1.587-.643 3.023-1.682 4.063-1.04 1.04-2.477 1.682-4.063 1.682-1.587 0-3.023-.643-4.063-1.682-1.04-1.04-1.682-2.476-1.682-4.063 0-1.587.643-3.023 1.682-4.063 1.04-1.04 2.476-1.683 4.063-1.683z"
                transform="translate(-1423 -168) translate(79.5 145) translate(1248 24) translate(96)"
                stroke="#FFFFFF"
                fill="none"
            ></path>
            <path
                data-v-5fa5aeb3=""
                strokeWidth="1.6px"
                d="M18.973 4.88l-1.154 1.154 1.154-1.154 1.154-1.154-1.154 1.154zM4.608 19.245L3.453 20.4l1.155-1.155 1.154-1.154-1.154 1.154zM21.948 12.063L20.315 12.063 21.948 12.063 23.58 12.063zM1.632 12.063L0 12.063 1.632 12.063 3.265 12.063zM18.973 19.245l-1.154-1.154 1.154 1.154 1.154 1.155-1.154-1.155zM4.608 4.88L3.453 3.726 4.608 4.88l1.154 1.154L4.608 4.88zM11.824 1.905L11.824 3.538 11.824 1.905 11.824.273zM11.824 22.22L11.824 23.853 11.824 22.22 11.824 20.588z"
                transform="translate(-1423 -168) translate(79.5 145) translate(1248 24) translate(96)"
                stroke="#FFFFFF"
                fill="none"
            ></path>
        </g>
    </svg>
);

export const MoonIcon = () => (
    <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
    >
        <g
            data-v-9f42629e=""
            fill="none"
            fillRule="evenodd"
            strokeLinejoin="round"
            stroke="#000000"
        >
            <g
                data-v-9f42629e=""
                strokeWidth="1.5px"
                stroke="#000000"
                fill="none"
            >
                <path
                    data-v-9f42629e=""
                    d="M16.086 13.417c-5.013 0-9.076-4.04-9.076-9.023 0-1.596.42-3.093 1.152-4.394C3.58.456 0 4.3 0 8.977 0 13.961 4.064 18 9.076 18c3.407 0 6.372-1.868 7.924-4.628-.3.03-.605.045-.914.045z"
                    transform="translate(-1344 -24) translate(1248 24) translate(96) translate(4 3)"
                    stroke="#000000"
                    fill="none"
                    strokeWidth="1.5px"
                ></path>
            </g>
        </g>
    </svg>
);

export const ArrowBottom = () => {
    const { resolvedTheme } = useTheme();
    const strokeColor = resolvedTheme === 'dark' ? '#FFFFFF' : '#000000';

    return (
        <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            data-v-6692773c=""
            data-v-391238e4=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9 9"
            className="ico_arrow"
            width="9"
            height="9"
        >
            <g data-v-6692773c="" fill="none" fillRule="evenodd">
                <path
                    data-v-6692773c=""
                    d="M0 0H9V9H0z"
                    transform="translate(-891 -972) translate(670 145) translate(24 817) translate(142 4) translate(55 6)"
                    fill="none"
                ></path>
                <path
                    data-v-6692773c=""
                    d="M8 3L4.5 6 1 3"
                    transform="translate(-891 -972) translate(670 145) translate(24 817) translate(142 4) translate(55 6)"
                    className="stroke"
                    stroke={strokeColor}
                    fill="none"
                ></path>
            </g>
        </svg>
    );
};
