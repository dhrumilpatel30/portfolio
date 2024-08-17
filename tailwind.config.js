/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: ["./index.html"],
    theme: {
        fontFamily: {
            'mono': ["'Geist Mono'",'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "'Liberation Mono'", "'Courier New'", 'monospace'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'background-dark': '#100e05',
            'foreground-dark': '#ceccc5',
            'background-secondary-dark': 'rgba(31,31,28,0.34)',
            'foreground-secondary-dark': '#DEDE8F',
            'background-light': '#d6d2c1',
            'foreground-light': '#0F0F0D',
            'background-secondary-light': 'rgba(204,200,184,0.65)',
            'foreground-secondary-light': '#6d6f3b',
        },
    },
    extend: {
        dropShadow: {
            glow: [
                "0 0px 20px rgba(255,255, 255, 0.35)",
                "0 0px 65px rgba(255, 255,255, 0.2)"
            ]
        }
    },
    plugins: [],
}

