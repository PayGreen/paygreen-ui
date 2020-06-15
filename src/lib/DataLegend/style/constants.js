import { transparentize } from 'polished';

const mainColor = {
    theme: props => props.theme.color[props.dataColor].main,
    status: props => props.theme.color.status[props.dataColor].main,
};

const minimizeFont = {
    tiny: 'tiny',
    xxs: 'xxs',
    xs: 'xs',
    sm: 'xs',
    base: 'sm',
    md: 'base',
    lg: 'md',
    xl: 'lg'
};

export {
    mainColor,
    minimizeFont
};