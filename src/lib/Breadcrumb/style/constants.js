import { transparentize } from 'polished';

const textColor = {
    default: {
        original: props => props.theme.wab.grey30,
        reverse: props => transparentize(0.4, props.theme.wab.white00),
    },
    link: {
        original: props => transparentize(0.3, props.theme.color[props.colorTheme].main),
        reverse: props => transparentize(0.4, props.theme.wab.white00),
    },
    hover: {
        original: props => props.theme.color[props.colorTheme].main,
        reverse: props => transparentize(0.05, props.theme.wab.white00),
    }
};

export {
    textColor
};