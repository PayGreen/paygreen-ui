import patternDark from './assets/pattern-dark.png';
import { mainColors, colors } from './colors';
import { ThemeBase } from './theme.base';

const lightColors = {
    green: '#243c31',
    blue: '#1a3b39',
    orange: '#473522',
    pink: '#492f2f',
    purple: '#3a2f47',
    red: '#3e2621',
};

const ThemeDark = {
    ...ThemeBase,
    name: 'Dark',
    color: {
        primary: {
            ...colors.green,
            light: lightColors.green,
        },
        secondary: {
            ...colors.blue,
            light: lightColors.blue,
        },
        tertiary: {
            ...colors.orange,
            light: lightColors.orange,
        },
        quaternary: {
            ...colors.pink,
            light: lightColors.pink,
        },
        quinary: {
            ...colors.purple,
            light: lightColors.purple,
        },
    },
    status: {
        success: {
            main: mainColors.green,
            light: lightColors.green,
        },
        default: {
            main: mainColors.blue,
            light: lightColors.blue,
        },
        warning: {
            main: mainColors.orange,
            light: lightColors.orange,
        },
        danger: {
            main: mainColors.red,
            light: lightColors.red,
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
