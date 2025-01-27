import type { Config } from 'tailwindcss'

import { uiPreset } from '@agendall/ui/tailwind-preset'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [uiPreset],
}

export default config
