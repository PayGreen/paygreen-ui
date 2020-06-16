import { transparentize } from 'polished';

const mainColor = {
    theme: props => props.theme.color[props.colorTheme].main,
    wab: props => props.theme.wab[props.colorWab],
    status: props => props.theme.color.status[props.colorStatus].main,
};

const backgroundColor = {
    theme: props =>
        transparentize(0.9, props.theme.color[props.colorTheme].main),
    wab: props => transparentize(0.97, props.theme.wab.black00),
    status: props =>
        transparentize(0.9, props.theme.color.status[props.colorStatus].main),
};

const minimizeFont = {
    tiny: 'tiny',
    xxs: 'xxs',
    xs: 'xs',
    sm: 'xs',
    base: 'sm',
    md: 'base',
    lg: 'md',
    xl: 'lg',
};

export { mainColor, backgroundColor, minimizeFont };
