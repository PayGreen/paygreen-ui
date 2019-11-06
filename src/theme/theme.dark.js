import {ThemeBase} from './theme.base';

let ThemeDark = {...ThemeBase};
ThemeDark = Object.assign(ThemeDark, {
    name: 'Dark',
    bg: '#111111',
    fontDefault: '#f6f6f6',
});

export {ThemeDark};