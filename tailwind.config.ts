import type { Config } from 'tailwindcss'

const config: Config = {
  // corePlugins: {
  //   preflight: false,
  // },
  separator: '_',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        'col-4': 'calc(25% - 0.75rem)',
        'col-7': 'calc(70% - 0.75rem)',
        'col-3': 'calc(30% - 0.75rem)',
      },
    },
  },
  plugins: [],
}

export default config
