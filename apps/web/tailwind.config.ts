import type { Config } from 'tailwindcss'

import { uiPreset } from '@repo/ui/tailwind-preset'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [uiPreset],
}

export default config
