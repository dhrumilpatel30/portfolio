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
            'background-dark': '#0F0F0D',
            'foreground-dark': '#FEFEE7',
            'background-secondary-dark': '#181817',
            'foreground-secondary-dark': '#DEDE8F',
            'background-light': '#FEFEE7',
            'foreground-light': '#0F0F0D',
            'background-secondary-light': '#f5f5d9',
            'foreground-secondary-light': '#6e6e28',
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

