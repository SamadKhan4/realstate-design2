export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#F7F5EF',
        sand: '#EEE9DF',
        ink: '#151713',
        night: '#111713',
        night2: '#151A16',
        muted: '#666A63',
        forest: '#273C31',
        champagne: '#C4A86B',
        line: 'rgba(20, 25, 20, 0.10)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1440px',
        content: '1280px',
      },
      borderRadius: {
        card: '20px',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      boxShadow: {
        panel: '0 24px 60px -32px rgba(20, 25, 20, 0.28)',
        soft: '0 10px 30px -22px rgba(20, 25, 20, 0.35)',
      },
    },
  },
}
