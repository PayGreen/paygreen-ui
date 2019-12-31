import { transparentize } from 'polished';

const backgroundColor = {
    theme: props => transparentize(0.9, props.theme.color[props.colorTheme].main),
    wab: props => transparentize(0.97, props.theme.wab.black00),
    status: props => transparentize(0.9, props.theme.color.status[props.colorStatus])
};

const minimizeFont = {
    xxs: 'xxs',
    xs: 'xs',
    sm: 'xs',
    base: 'sm',
    md: 'base',
    lg: 'md',
    xl: 'lg'
};

export {
    backgroundColor,
    minimizeFont
};