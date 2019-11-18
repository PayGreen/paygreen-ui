import {ThemeBase} from './theme.base';

let ThemeDark = {...ThemeBase};
ThemeDark = Object.assign(ThemeDark, {
    name: 'Dark',
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
});

export {ThemeDark};