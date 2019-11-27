import babel from 'rollup-plugin-babel';
// ? 
import resolve from 'rollup-plugin-node-resolve';
// ? 
import commonjs from 'rollup-plugin-commonjs';
// import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {

    input: './src/lib/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            name: 'Example',
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'prop-types': 'PropTypes',
                'styled-components': 'styled-components'
            },
        },
        {
            file: pkg.module,
            format: 'es',
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'prop-types': 'PropTypes',
                'styled-components': 'styled-components'
            },
        }
    ],
    external: [
        'react',
        'react-dom',
        'styled-components'
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
    ]
}
