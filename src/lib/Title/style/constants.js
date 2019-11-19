import { transparentize } from 'polished';

const titleColor = {
    main: {
        original: props => props.theme.color[props.colorTheme]['main'],
        reverse: props => transparentize(0.05, props.theme.wab.white00)
    },
    secondary: {
        original: props => props.theme.wab[props.color2],
        reverse: props => transparentize(0.25, props.theme.wab.white00)
    },
    line: {
        original: props => transparentize(0.5, props.theme.color[props.colorTheme]['main']),
        reverse: props => transparentize(0.7, props.theme.wab.white00)
    }
};

const smallFontSizes = [
    'xxs',
    'xs',
    'sm'
];

export {
    titleColor,
    smallFontSizes,
};