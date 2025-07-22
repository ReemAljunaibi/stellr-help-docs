module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./docs/**/*.{md,mdx}",
    ],
    safelist: [
      'bg-sand',
      'bg-dark',
      'bg-accent-secondary',
      'bg-gray-light',
      'text-dark',
      'text-white',
      'text-accent-secondary',
      'text-gray-dark',
      'text-gray-light',
    ],
    darkMode: "class",
    theme: {
      extend: {
        fontFamily: {
          nekst: ['Nekst', 'sans-serif'],
        },
        colors: {
          cream: '#F6F6F3',
          white: '#FFFFFF',
          sand: '#F5F1ED',
          dark: '#252323',
          'accent-secondary': '#689F9C',
          'gray-light': '#E5E7EB',
          gray: '#9CA3AF',
          'gray-dark': '#4B5563',
        },
      },
    },
    plugins: [],
  };
  