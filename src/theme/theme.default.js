import patternLight from './assets/pattern-light.png';
import { baseLight, gradients } from './colors';
import { ThemeBase } from './theme.base';

const ThemeDefault = {
    ...ThemeBase,
    name: 'Default',
    color: {
        primary: {
            ...baseLight.green,
            ...gradients.green,
        },
        secondary: {
            ...baseLight.blue,
            ...gradients.blue,
        },
        tertiary: {
            ...baseLight.orange,
            ...gradients.orange,
        },
        quaternary: {
            ...baseLight.pink,
            ...gradients.pink,
        },
        quinary: {
            ...baseLight.purple,
            ...gradients.purple,
        },
    },
    status: {
        success: {
            ...baseLight.green,
        },
        default: {
            ...baseLight.blue,
        },
        warning: {
            ...baseLight.orange,
        },
        danger: {
            ...baseLight.red,
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
    logoColor: null,
};

export { ThemeDefault };
