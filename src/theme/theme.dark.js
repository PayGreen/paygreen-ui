import {ThemeBase} from './theme.base';

let ThemeDark = {...ThemeBase};
ThemeDark = Object.assign(ThemeDark, {
    name: 'Dark',
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
});

export {ThemeDark};