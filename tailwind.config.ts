import type { Config } from 'tailwindcss';

const config: Config = {
    corePlugins: undefined,
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './components/pageComponents/**/*.{js,ts,jsx,tsx}',
        './components/headerComponents/**/*.{js,ts,jsx,tsx}',
        './components/atoms/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                cs: '412px',
                sm: '640px',
                cmd: '800px',
                clg: '1024px',
                cxl: '1440px',
            },
            aspectRatio: {
                '4/3': '4 / 3',
            },
            colors: {
                yellow: '#FAE100',
                light_gray: '#F9FAFB',
                gray: '#333333',
                dark_gray: '#F3F3F3',
                gray_300: '#D1D5DB',
                gray_600: '#4B5563',
                light_blue: '#2463EB',
                dark_blue: '#020D43',
                blue: '#A3CFCD',
                green: '#4DD964',
                hero: '#01123E',
                beige: '#F3EEE9',
            },
            backgroundImage: {
                'hero-gradient':
                    'linear-gradient(135deg, #5335cf 0%, #de005e 25%, #f66e48 50%, #de005e 75%, #5335cf 100%)',
                'green-to-yellow':
                    'linear-gradient(to right top, #72C58F, #63CE8A, #95C546)',
                'yellow-to-yellow':
                    'linear-gradient(to right top, #FAE100, #FBCB50, #FBCB50)',
                'red-to-yellow':
                    'linear-gradient(to right top, #E16861, #DF8558, #FBCB50)',
                'light_blue-to-blue':
                    'linear-gradient(to right, #00F0FF, #2463EB)',
                'light_gray-to-light_blue':
                    'linear-gradient(to right, #F9FAFB, #0287FF)',
                'light_gray-to-light_blue-bottom':
                    'linear-gradient(to bottom, #F9FAFB, #0287FF)',
                'logoSlider-gradient-right':
                    'linear-gradient(to right, rgba(255, 255, 255, 0), white)',
                'logoSlider-gradient-left':
                    'linear-gradient(to left, rgba(255, 255, 255, 0), white)',
            },
            backgroundSize: {
                '400': '400%',
                '100%auto': '100% auto',
            },
            margin: {
                '5%': '5%',
            },
            fontSize: {
                xxs: [
                    '0.7rem',
                    {
                        lineHeight: '1rem',
                        letterSpacing: '-0.08em',
                        fontWeight: '400',
                    },
                ],
                '10xl': '10rem',
            },

            spacing: {
                '9': '2.1rem',
                '18': '4.5rem',
                '30': '7.5rem',
                '88': '22rem',
                '98': '26rem',
                '100': '30rem',
            },
            width: {
                '360': '22rem',
                '330': '25rem',
                '410': '30rem',
                '490': '35rem',
                '5/100': '5%',
                '1/10': '10%',
                '15/100': '15%',
                '7/10': '70%',
                '85/100': '85%',
                '88/100': '88%',
                '9/10': '90%',
                '96/100': '96%',
                '100': '26rem',
                '50vw': '50vw',
            },
            minWidth: {
                cs: '400px',
                sm: '600px',
                clg: '700px',
                cxl: '1400px',
                '150': '140px',
                '300': '220px',
                '500': '400px',
                '700': '400px',
                '940': '940px',
                '970': '970px',
                '1250': '1250px',
            },
            height: {
                '360': '22rem',
                '330': '25rem',
                '410': '30rem',
                '490': '35rem',
                '570': '40rem',
                '586': '42rem',
                '650': '45rem',
                '730': '50rem',
                '810': '55rem',
                '890': '60rem',
                '1/20': '5%',
                '8/10': '8%',
                '1/10': '10%',
                '11/100': '11%',
                '13/100': '13%',
                '15/100': '15%',
                '48/100': '48%',
                '9/10': '90%',
                '10vh': '10vh',
                '20vh': '20vh',
                '25vh': '25vh',
                '40vh': '40vh',
                '50vh': '50vh',
                '60vh': '60vh',
                '90vh': '90vh',
                '20dvh': '20dvh',
                '30dvh': '35dvh',
                '40dvh': '40dvh',
                '45dvh': '45dvh',
                '50dvh': '50dvh',
                '60dvh': '60dvh',
                '65dvh': '65dvh',
                '70dvh': '70dvh',
                '75dvh': '75dvh',
                '90dvh': '90dvh',
            },
            minHeight: {
                '80': '80px',
                '120': '120px',
                '170': '170px',
                '210': '210px',
                '250': '250px',
                '280': '280px',
                '330': '330px',
                '420': '420px',
                '480': '480px',
                '560': '560px',
                '640': '640px',
            },
            maxHeight: {
                '80': '80px',
                '120': '120px',
                '170': '170px',
                '210': '210px',
                '250': '250px',
                '280': '280px',
                '330': '330px',
                '350': '350px',
                '420': '420px',
                '480': '480px',
                '560': '560px',
                '640': '640px',
            },
            zIndex: {
                '2': '2',
                '5': '5',
            },
            boxShadow: {
                speechBalloon: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
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
                    '0%': { transform: 'translateY(150px)', opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                textClip: {
                    '100%': { 'background-position': '400%' },
                },
                balloonAppear: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1)' },
                },
                slide: {
                    from: { transform: 'translateX(0%)' },
                    to: { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                navIn: 'navIn 0.3s ease-out',
                navOut: 'navOut 0.3s ease-out',
                slideDown: 'slideDown 0.3s ease-out forwards',
                fadeIn: 'fadeIn 0.3s ease-out',
                fadeInHome: 'fadeIn 1.2s ease',
                textClip: 'textClip 10s linear infinite',
                balloonAppear: 'balloonAppear 0.7s ease-in-out forwards',
                slide: 'slide 45s infinite linear;',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
export default config;
