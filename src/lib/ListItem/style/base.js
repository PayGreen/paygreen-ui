import { css } from 'styled-components';
import { math, transparentize } from 'polished';
import { decorationOptions } from '../../../shared/constants';
import { bulletFont, marginBase } from './constants';

// Bullet styles

const bulletStyle = {
    icon: css`
        & > .icon {
            height: ${props => props.theme.icon.size[props.bulletSize]};
        }
    `,
    dash: css`
        & > .bullet {
            height: ${props => props.theme.dash};
            border-radius: ${props => props.theme.dash};
            background-color: ${props =>
                props.theme.color[props.colorTheme].main};
            margin-top: calc(${props => props.theme.font.lineHeight.md / 2 + 'em - ' + math(props.theme.dash + '/2')});
        }
    `,
    number: css`
        & > .bullet {
            display: flex;
            justify-content: center;
            align-items: center;
            height: ${props => props.theme.icon.size[props.bulletSize]};
            border-radius: 50%;
            background-color: ${props =>
                props.theme.color[props.colorTheme].light};
            color: ${props => props.theme.color[props.colorTheme].main};
            font-weight: ${props => props.theme.font.weight.bold};
            font-size: ${props => bulletFont[props.bulletSize]};
        }
    `,
};

// Arrow style (on clicked only)

const arrowStyle = css`
    grid-area: arrow;
    align-self: center;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: all ${props => props.theme.transition.sm};
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
    `,
};

const disabledStyle = css`
    filter: grayscale(1);
`;

const hoverStyle = css`
    filter: grayscale(0);
    background-color: ${props =>
        transparentize(0.95, props.theme.color[props.colorTheme].main)};
`;

const activeStyle = css`
    ${hoverStyle};

    .arrow {
        opacity: 0.6;
    }
`;

const clickableStyle = css`
    ${props => gridItemArrow[props.arrowStyle]};
    ${props => (props.isClicked ? activeStyle : disabledStyle)};
    width: 100%; /* Fix for button tag */

    @media ${props => props.theme.screen.max.lg} {
        margin-top: ${props => props.theme.space.sm};
        margin-bottom: ${props => props.theme.space.sm};
    }

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

export { bulletStyle, clickableStyle, notClickableStyle };
