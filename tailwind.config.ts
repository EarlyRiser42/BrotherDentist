import type { Config } from 'tailwindcss';

const config: Config = {
    corePlugins: undefined,
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            margin: {
                '5%': '5%',
            },
            colors: {
                yellow: '#FAE100',
            },
            width: {
                '5p': '5%',
                '15/100': '15%',
                '100': '26rem',
            },
            height: {
                '1/20': '5%',
                '15/100': '15%',
                '9/10': '90%',
            },
            keyframes: {
                navIn: {
                    '0%': { transform: 'translateX(100vw)' },
                    '100%': { transform: 'translateX(0)' },
                },
                navOut: {
                    '0%': { left: '0vw' },
                    '100%': { left: '100vw' },
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
            },
            animation: {
                navIn: 'navIn 0.3s ease-out',
                navOut: 'navOut 0.3s ease-out',
                slideDown: 'slideDown 0.3s ease-out forwards',
                fadeIn: 'fadeIn 0.2s ease-out',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
export default config;
