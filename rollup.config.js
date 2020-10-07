import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import { eslint } from 'rollup-plugin-eslint';
import peerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

export default {
    input: './src/lib/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            name: 'Example',
            globals: {
                react: 'React',
                'prop-types': 'PropTypes',
                'styled-components': 'styled-components',
            },
        },
        {
            file: pkg.module,
            format: 'es',
            globals: {
                react: 'React',
                'prop-types': 'PropTypes',
                'styled-components': 'styled-components',
            },
        },
    ],
    external: ['react', 'styled-components'],
    plugins: [
        peerDepsExternalPlugin(),
        eslint(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
        resolve(),
        commonjs(),
        url({
            exclude: 'style/**',
        }),
    ],
};
