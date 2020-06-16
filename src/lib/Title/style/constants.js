import { transparentize } from 'polished';

const lineColor = {
    reverse: props => transparentize(0.6, props.theme.wab.white00),
    theme: props => transparentize(0.5, props.theme.color[props.colorTheme].main),
    wab: props => transparentize(0.5, props.theme.color[props.colorTheme].main),
    status: props => transparentize(0.6, props.theme.color.status[props.colorStatus].main)
};

const smallFontSizes = [
    'tiny',
    'xxs',
    'xs',
    'sm'
];

const minimizeFont = {
    base: 'base',
    md: 'base',
    lg: 'md',
    xl: 'lg'
};

export {
    lineColor,
    smallFontSizes,
    minimizeFont
};