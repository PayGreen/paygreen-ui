import { css } from 'styled-components';
import { transparentize } from 'polished';
import { decorationOptions } from '../../../shared/constants';
import { bulletLine, bulletFont, marginBase } from './constants';

// Bullet styles

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

// Arrow style (on clicked only)

const arrowStyle = css`
    grid-area: arrow;
    opacity: 0;
    transition: all ${props => props.theme.transition.md};
`;

const gridItemArrow = {
    none: css`
        grid-template-areas: 'bullet content' 'empty details';
        grid-template-columns: auto 1fr;

        & > :nth-child(3) {
            grid-area: details;
        }
    `,
    left: css`
        grid-template-areas: 'arrow bullet content' 'arrow empty details';
        grid-template-columns: auto auto 1fr;

        .arrow {
            ${arrowStyle};
            margin-right: ${marginBase};
        }

        & > :nth-child(4) {
            grid-area: details;
        }
    `,
    right: css`
        grid-template-areas: 'bullet content arrow' 'empty details arrow';
        grid-template-columns: auto 1fr auto;

        .arrow {
            ${arrowStyle};
            margin-left: ${marginBase};
        }

        & > :nth-child(3) {
            grid-area: details;
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

    .arrow {
        opacity: .6;
    }
`;

const clickableStyle = css`
    ${props => gridItemArrow[props.arrow]};
    ${props => props.isClicked ? activeStyle : disabledStyle};

    &:hover,
    &:active,
    &:focus {
        ${hoverStyle};
    }
`;

const notClickableStyle = css`
    ${gridItemArrow[decorationOptions.none]};
    
    padding-left: 0;
    padding-right: 0;
`;

export {
    bulletStyle,
    clickableStyle,
    notClickableStyle
};