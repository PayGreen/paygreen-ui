import { transparentize } from 'polished';

const textColor = {
    default: {
        original: props => props.theme.color.grey30,
        reverse: props => transparentize(0.4, props.theme.color.white00),
    },
    link: {
        original: props => transparentize(0.3, props.theme.color[props.color]['main']),
        reverse: props => transparentize(0.4, props.theme.color.white00),
    },
    hover: {
        original: props => props.theme.color[props.color]['main'],
        reverse: props => transparentize(0.05, props.theme.color.white00),
    }
};

export {
    textColor
};