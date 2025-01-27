import type { Config } from 'tailwindcss'

import baseConfig from '@agendall/ui/tailwind-config'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [baseConfig],
}

export default config
