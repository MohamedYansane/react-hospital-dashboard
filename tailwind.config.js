/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/*.{js,jsx,ts,tsx}',
        './components/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['ui-sans-serif', 'system-ui'],
                'serif': ['ui-serif', 'Georgia'],
                'mono': ['ui-monospace', 'SFMono-Regular'],
                'display': ['Oswald'],
                'jetbrain': ['JetBrains Mono'],
                'body': ['Open Sans'],
                'corben': ['Corben'],
                'red-hat': ['Red Hat Display', 'sans-serif'],
            },

            screens: {
                'my': { 'min': '309px', 'max': '450px' },
                'lgmy': { 'min': '1204px', 'max': '1500px' },
                'ipad': { 'min': '768px', 'max': '912px' },
                'fold': '280px',
                'surfaceduo': '540px',
                // => @media (min-width: 640px) { ... }

                'laptop': '1024px',
                // => @media (min-width: 1024px) { ... }

                'desktop': '1280px',
                // => @media (min-width: 1280px) { ... }
            },
        },
    },
    plugins: [],
}