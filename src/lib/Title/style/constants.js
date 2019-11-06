import { css } from 'styled-components';
import { transparentize } from 'polished';

const titleColor = {
    main: {
        original: props => props.theme.color[props.color]['main'],
        reverse: props => transparentize(0.05, props.theme.color.white00)
    },
    secondary: {
        original: props => props.theme.color[props.color2],
        reverse: props => transparentize(0.25, props.theme.color.white00)
    },
    line: {
        original: props => transparentize(0.5, props.theme.color[props.color]['main']),
        reverse: props => transparentize(0.7, props.theme.color.white00)
    }
};

const smallSizes = [
    'xxs',
    'xs',
    'sm'
];

const underlineAlign = {
    left: css`
        left: 0;
    `,
    center: css`
        left: 50%;
        transform: translateX(-50%);
    `,
    right: css`
        right: 0;
    `
};

export {
    titleColor,
    smallSizes,
    underlineAlign
};