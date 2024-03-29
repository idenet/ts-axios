import { resolve } from 'path'
import { defineConfig } from 'vite'
import packageJson from './package.json'

const getPackageName = () => {
  return packageJson.name
}

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, (char) => char[1].toUpperCase())
  } catch (err) {
    throw new Error('Name property in package.json is missing.')
  }
}

const fileName = {
  es: `${getPackageName()}.mjs`,
  cjs: `${getPackageName()}.cjs`,
  iife: `${getPackageName()}.iife.js`,
}

export default defineConfig({
  root: './demo',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: getPackageNameCamelCase(),
      formats: ['es', 'cjs', 'iife'],
      fileName: (format) => fileName[format],
    },
  },
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
