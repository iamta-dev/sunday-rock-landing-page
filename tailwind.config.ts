import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: '#EE1C25',
        secondary: '#000000',
        accent: '#003B7B',
        'neutral-dark': '#1A1A1A',
        'neutral-mid': '#666666',
        'neutral-light': '#F5F5F5',
        success: '#2DD4BF',
        warning: '#FFA500',
        error: '#EF4444',
      },
      fontFamily: {
        heading: ['DB Heavent', 'sans-serif'],
        body: ['Sarabun', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', '60px'],
        'h2': ['36px', '44px'],
        'h3': ['24px', '32px'],
        'h4': ['20px', '28px'],
        'body': ['16px', '24px'],
        'small': ['14px', '20px'],
        'tiny': ['12px', '16px'],
      },
      borderRadius: {
        'default': '8px',
        'card': '12px',
        'button': '24px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
    },
  },
  plugins: [],
} satisfies Config;
