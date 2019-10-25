import {ThemeBase} from './theme.base';

let ThemeDark = {...ThemeBase};
ThemeDark = Object.assign(ThemeDark, {
    name: 'Dark',
    bg: '#111111'
});

export {ThemeDark};