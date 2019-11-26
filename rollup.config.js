import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import svg from 'rollup-plugin-svg'
import { eslint } from "rollup-plugin-eslint";
import peerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';

export default {
    input: './src/lib/index.js',
    output: [
        {
            file: pkg.browser,
            format: 'umd',
            name: 'Example',
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'prop-types': 'PropTypes',
                'styled-components': 'styled-components'
            },
        },
        {
            file: pkg.main,
            format: 'cjs',
            name: 'Example',
            globals: {
                'react': 'React',
                'prop-types': 'PropTypes',
                'styled-components': 'styled-components'
            },
        },
        {
            file: pkg.module,
            format: 'es',
            globals: {
                'react': 'React',
                'prop-types': 'PropTypes',
                'styled-components': 'styled-components'
            },
        }
    ],
    external: [
        'react',
        'styled-components'
    ],
    plugins: [
        peerDepsExternalPlugin(),
        eslint(),
        svg(),
        babel({
            exclude: 'node_modules/**',
        }),
        resolve(),
        commonjs(),
    ]
}
