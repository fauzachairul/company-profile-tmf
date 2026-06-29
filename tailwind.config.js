export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#8B5E3C',
                secondary: '#C89B6D',
                dark: '#2B2B2B',
                light: '#F8F8F8',
            },
            boxShadow: {
                soft: '0 24px 80px rgba(0, 0, 0, 0.08)',
            },
            borderRadius: {
                xl: '1rem',
            },
        },
    },
    plugins: [],
}
