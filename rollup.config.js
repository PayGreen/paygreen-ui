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
            file: pkg.browser,
            format: 'umd',
            name: 'Example',
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'prop-types': 'PropTypes'
            },
        },
        {
            file: pkg.main,
            format: 'cjs',
            name: 'Example',
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'prop-types': 'PropTypes'
            },
        },
        {
            file: pkg.module,
            format: 'es',
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'prop-types': 'PropTypes'
            },
        }
    ],

    external: [
        'react',
        'react-dom',
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
        // uglify()
    ]
}
