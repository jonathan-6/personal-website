import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            figure: {
              margin: '3rem 0',
              '> *': {
                marginTop: '0',
                marginBottom: '0',
              },
            },
            figcaption: {
              fontFamily: 'Lora, serif',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              textAlign: 'center',
              color: 'rgb(107 114 128)',
              marginTop: '0.75rem',
            },
            img: {
              borderRadius: '2px',
              backgroundColor: 'rgb(249 250 251)',
              borderWidth: '1px',
              borderColor: 'rgb(243 244 246)',
              margin: '0',
            },
            // Ensure proper heading sizes
            h1: {
              fontSize: '1.75rem',
              fontWeight: '500',
              fontFamily: 'Lora, serif',
            },
            h2: {
              fontSize: '1rem',
              fontWeight: '600',
              fontFamily: 'Lora, serif',
              marginTop: '2.5rem',
            },
            // Maintain your existing paragraph styles
            p: {
              fontFamily: 'Lora, serif',
              fontSize: '1rem',
              lineHeight: '1.75',
            },
            // Style links consistently
            a: {
              textDecoration: 'underline',
              '&:hover': {
                textDecoration: 'none',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    typography(),
  ],
}