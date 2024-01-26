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
                sm: '640px',
                clg: '1024px',
                cxl: '1440px',
            },
            backgroundImage: {
                'hero-gradient':
                    'linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)',
                'green-to-yellow':
                    'linear-gradient(to right top, #72C58F, #63CE8A, #95C546)',
                'yellow-to-yellow':
                    'linear-gradient(to right top, #FAE100, #FBCB50, #FBCB50)',
                'red-to-yellow':
                    'linear-gradient(to right top, #E16861, #DF8558, #FBCB50)',
            },
            backgroundSize: {
                '200-auto': '200% auto',
            },
            margin: {
                '5%': '5%',
            },
            colors: {
                yellow: '#FAE100',
                gray: '#333333',
                blue: '#A3CFCD',
                hero: '#01123E',
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
                '1/10': '10%',
                '15/100': '15%',
                '7/10': '70%',
                '9/10': '90%',
                '100': '26rem',
                '50vw': '50vw',
            },
            minWidth: {
                cs: '400px',
                sm: '600px',
                clg: '700px',
                cxl: '1400px',
                '700': '400px',
                '500': '400px',
                '300': '220px',
                '150': '140px',
            },
            height: {
                '1/20': '5%',
                '8/10': '8%',
                '1/10': '10%',
                '11/100': '11%',
                '13/100': '13%',
                '15/100': '15%',
                '48/100': '48%',
                '9/10': '90%',
                '10vh': '10vh',
                '90vh': '90vh',
                '40vh': '40vh',
            },
            minHeight: {
                '330': '330px',
                '420': '420px',
                '170': '170px',
                '120': '120px',
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
                textClip: {
                    '100%': { 'background-position': '200% center' },
                },
            },
            animation: {
                navIn: 'navIn 0.3s ease-out',
                navOut: 'navOut 0.3s ease-out',
                slideDown: 'slideDown 0.3s ease-out forwards',
                fadeIn: 'fadeIn 0.2s ease-out',
                fadeInHero: 'fadeIn 1.2s ease-out',
                textClip: 'textClip 2s linear infinite',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
export default config;
