import type { Config } from 'tailwindcss'
import { uiPreset } from './src/tailwind/preset'

const config: Pick<Config, 'presets' | 'content'> = {
  content: ['./src/**/*.tsx'],
  presets: [uiPreset],
}

export default config
