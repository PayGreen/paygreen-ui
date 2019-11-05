import {ThemeBase} from './theme.base';

let ThemeDefault = {...ThemeBase};
ThemeDefault = Object.assign(ThemeDefault, {
    name: 'Default',
    bg: '#ffffff',
    fontDefault: '#434343',
});

export {ThemeDefault};