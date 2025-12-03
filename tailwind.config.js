/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#0ea5e9', // Sky 500
                secondary: '#6366f1', // Indigo 500
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pixel-float': 'pixelFloat 4s steps(4) infinite',
                'fly-diagonal': 'flyDiagonal 25s linear infinite',
                'fly-horizontal': 'flyHorizontal 35s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pixelFloat: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                flyDiagonal: {
                    '0%': { transform: 'translate(-10vw, 110vh) rotate(-45deg) scale(0.8)' },
                    '100%': { transform: 'translate(110vw, -10vh) rotate(-45deg) scale(0.8)' }
                },
                flyHorizontal: {
                    '0%': { transform: 'translateX(-20vw)' },
                    '100%': { transform: 'translateX(120vw)' }
                }
            }
        }
    },
    plugins: [],
}
