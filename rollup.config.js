import babel from 'rollup-plugin-babel';
// ? 
import resolve from 'rollup-plugin-node-resolve';
// ? 
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: './src/lib/index.js',
    output: {
        file: './build/bundle.min.js',
        format: 'iife',
        name: 'bundle'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs({
            include: [
                'node_modules/**'
            ],
            exclude: [
                'node_modules/process-es6/**'
            ],
            namedExports: {
                'node_modules/react/index.js': [
                    'Children',
                    'Component',
                    'PureComponent',
                    'PropTypes',
                    'createElement',
                    'Fragment',
                    'cloneElement',
                    'StrictMode',
                    'createFactory',
                    'createRef',
                    'createContext',
                    'isValidElement',
                    'isValidElementType',
                ],
                'node_modules/react-dom/index.js': [
                    'render',
                    'hydrate',
                ],
            }
        }),
        uglify()
    ],

}
