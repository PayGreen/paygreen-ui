import {ThemeBase} from './theme.base';

let ThemeDefault = {...ThemeBase};
ThemeDefault = Object.assign(ThemeDefault, {
    name: 'Default',
    bg: '#ffffff'
});

export {ThemeDefault};