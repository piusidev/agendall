import type { Config } from 'tailwindcss'

import { uiPreset } from '@repo/ui/tailwind/preset'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [uiPreset],
}

export default config
