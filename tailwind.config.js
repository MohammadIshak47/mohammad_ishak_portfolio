/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0D12',
          panel: '#12151C',
          line: '#1F2430',
        },
        paper: {
          DEFAULT: '#E8EAF0',
          muted: '#8A94A6',
        },
        signal: {
          DEFAULT: '#F2B705',
          soft: '#F7D060',
        },
        teal: {
          DEFAULT: '#33C9B0',
          soft: '#7FE3D2',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};
