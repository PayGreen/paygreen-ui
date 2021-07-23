import patternDark from './assets/pattern-dark.png';
import { baseDark, gradients } from './colors';
import { ThemeBase } from './theme.base';

const ThemeDark = {
    ...ThemeBase,
    name: 'Dark',
    color: {
        primary: {
            ...baseDark.green,
            ...gradients.green,
        },
        secondary: {
            ...baseDark.blue,
            ...gradients.blue,
        },
        tertiary: {
            ...baseDark.orange,
            ...gradients.orange,
        },
        quaternary: {
            ...baseDark.pink,
            ...gradients.pink,
        },
        quinary: {
            ...baseDark.purple,
            ...gradients.purple,
        },
    },
    status: {
        success: {
            ...baseDark.green,
        },
        default: {
            ...baseDark.blue,
        },
        warning: {
            ...baseDark.orange,
        },
        danger: {
            ...baseDark.red,
        },
    },
    wab: {
        white00: '#202020',
        white10: '#2c2c2c',
        white20: '#383838',

        grey10: '#494949',
        grey20: '#5b5b5b',
        grey30: '#7f7f7f',
        grey40: '#a2a2a2',
        grey50: '#cfcfcf',
        grey60: '#eeeeee',

        black00: '#ffffff',
    },
    pattern: patternDark,
    logoColor: '#ffffff',
};

export { ThemeDark };
