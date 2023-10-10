import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  content: [
    'docs/content/**/*.md'
  ]
}
