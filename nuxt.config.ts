// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  devtools: { enabled: true },
  	dir: {
		layouts: './src/layouts',
		pages: './src/pages',
		middleware: './src/middleware'
  },
    alias: {
		'@': './src'
	},
	css: ['/src/assets/styles/tailwind.scss'],
	modules: ['@nuxtjs/tailwindcss'],
    vite: {
		// plugins: [
		// 	eslintPlugin({ useEslintrc: true, exclude: ['**/node_modules/**', 'src/helpers/**/*', 'src/components/core/DateInput/diste/**/*', 'src/composables/payment/**/*'] })
		// ],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		}
	},
})
