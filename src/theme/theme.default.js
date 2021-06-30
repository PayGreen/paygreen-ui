import patternLight from './assets/pattern-light.png';
import { mainColors, colors } from './colors';
import { ThemeBase } from './theme.base';

const lightColors = {
    green: '#d5f3e5',
    blue: '#e1f3f2',
    orange: '#fbe6ce',
    pink: '#ffe0e1',
    purple: '#e9d9fb',
    red: '#f7d7d0',
};

const ThemeDefault = {
    ...ThemeBase,
    name: 'Default',
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
        white00: '#ffffff',
        white10: '#fafafa',
        white20: '#f6f6f6',

        grey10: '#eeeeee',
        grey20: '#dbdbdb',
        grey30: '#aaaaaa',
        grey40: '#858585',
        grey50: '#636363',
        grey60: '#434343',

        black00: '#000000',
    },
    pattern: patternLight,
};

export { ThemeDefault };
