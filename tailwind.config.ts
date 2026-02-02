import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2c6e5a',
          light: '#eaf2ef',
        },
      },
      maxWidth: {
        'prose-narrow': '720px',
        'content': '960px',
      },
    },
  },
  plugins: [],
}

export default config
