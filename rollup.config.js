import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'cjs',
        sourcemap: false,
        banner: '#!/usr/bin/env node'
    },
    plugins: [
        typescript({
            compilerOptions: {
                noEmit: false,
                module: 'esnext',
                incremental: false
            }
        }),
        nodeResolve(),
        commonjs(),
        terser(),
    ],
    external: ['fs']
}