import { defineConfig } from 'rollup'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import esbuild from 'rollup-plugin-esbuild'

export default [
    defineConfig({
        input: './main.ts',
        output: {
            dir: './dist',
        },
        plugins: [
            typescriptPaths({
                preserveExtensions: true,
                // absolute: false,
            }),
            esbuild(),
        ],
    }),
]
