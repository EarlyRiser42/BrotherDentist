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
            screens: {
                cs: '412px',
                cmd: '766px',
                clg: '1024px',
                cxl: '1440px',
            },
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
                gray: '#333333',
                blue: '#A3CFCD',
                'yellow-200': '#FDE68A',
                'blue-800': '#1E40AF',
            },
            spacing: {
                '18': '4.5rem',
                '30': '7.5rem',
                '88': '22rem',
                '98': '26rem',
                '100': '30rem',
            },
            width: {
                '5p': '5%',
                '15/100': '15%',
                '9/10': '90%',
                '100': '26rem',
                '50vw': '50vw',
            },
            minWidth: {
                cs: '400px',
                cmd: '740px',
                cxl: '1400px',
                clg: '1000px',
            },
            height: {
                '1/20': '5%',
                '8/10': '8%',
                '1/10': '10%',
                '13/100': '13%',
                '15/100': '15%',
                '48/100': '48%',
                '9/10': '90%',
                '10vh': '10vh',
                '90vh': '90vh',
                '40vh': '40vh',
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
                fadeInHero: 'fadeIn 1.2s ease-out',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
export default config;
