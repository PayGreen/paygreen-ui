import { css } from 'styled-components';
import { transparentize } from 'polished';
import { bulletLine, bulletFont } from './constants';

const bulletStyle = {
    icon: css`
        & > .icon {
            height: auto;
        }
    `,
    dash: css`
        & > .bullet {
            height: ${bulletLine};
            border-radius: ${bulletLine};
            background-color: ${props => props.theme.color[props.colorTheme].main};
        }
    `,
    number: css`
        & > .bullet {
            display: flex;
            justify-content: center;
            align-items: center;
            height: ${props => props.theme.iconSize[props.bulletSize]};
            border-radius: 50%;
            background-color: ${props => props.theme.color[props.colorTheme].light};
            color: ${props => props.theme.color[props.colorTheme].main};
            font-weight: ${props => props.theme.font.weight.bold};
            font-size: ${props => bulletFont[props.bulletSize]};
        }
    `
};

const disabledStyle = css`
    filter: grayscale(1);
`;

const hoverStyle = css`
    filter: grayscale(0);
    background-color: ${props => transparentize(0.95, props.theme.color[props.colorTheme].main)};
`;

const activeStyle = css`
    ${hoverStyle};
`;

const clickableStyle = css`
    ${props => props.isClicked ? activeStyle : disabledStyle};

    &:hover,
    &:active,
    &:focus {
        ${hoverStyle};
    }
`;

export {
    bulletStyle,
    clickableStyle,
    activeStyle
};