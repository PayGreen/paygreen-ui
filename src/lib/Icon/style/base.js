import { css } from 'styled-components';
import { math } from 'polished';
import { colorPalletOptions } from '../../../shared/constants';
import { countSize, calcShift } from './constants';

const baseColor = {
    theme: css`
        background-color: ${props => props.theme.color[props.colorTheme].light};

        svg {
            fill: ${props => props.theme.color[props.colorTheme].main};
        }

        .badge-number {
            background-color: ${props =>
                props.theme.color[props.colorTheme].gradientBase};
            color: ${props => props.theme.wab.white00};
        }
    `,
    wab: css`
        background-color: transparent;

        svg {
            fill: ${props => props.theme.wab[props.colorWab]};
        }

        .badge-number {
            color: ${props => props.theme.wab[props.colorWab]};
        }
    `,
    status: css`
        background-color: ${props =>
            props.theme.status[props.colorStatus].light};

        svg {
            fill: ${props => props.theme.status[props.colorStatus].main};
        }

        .badge-number {
            background-color: ${props =>
                props.theme.status[props.colorStatus].main};
            color: ${props => props.theme.wab.white00};
        }
    `,
};

const activeColor = {
    theme: css`
        background-color: ${props =>
            props.theme.color[props.colorTheme].gradientBase};

        svg {
            fill: ${props => props.theme.wab.white00};
        }

        &::before {
            background-color: ${props =>
                props.theme.color[props.colorTheme].gradientBase};
        }
    `,
    status: css`
        background-color: ${props =>
            props.theme.status[props.colorStatus].main};

        svg {
            fill: ${props => props.theme.status[props.colorStatus].light};
        }

        &::before {
            background-color: ${props =>
                props.theme.status[props.colorStatus].main};
        }
    `,
};

const hasHoverColor = css`
    &:hover,
    &:active,
    &:focus {
        ${props => activeColor[props.colorPallet]};
    }

    ${props =>
        props.isActive
            ? css`
                  &:hover,
                  &:active,
                  &:focus {
                      &::before {
                          transform: scale(1);
                      }
                  }
              `
            : null};
`;

const backgroundStyle = css`
    padding: ${props =>
        math(
            props.theme.icon.size[props.iconSize] +
                '/2 - ' +
                props.theme.space.xs,
        )};
    border-radius: 50%;

    &::before {
        content: '';
        position: absolute;
        box-sizing: content-box;
        transform: scale(0);
        z-index: ${props => props.theme.zindex.layer};
        height: 100%;
        width: 100%;
        padding: ${calcShift};
        bottom: -${calcShift};
        left: -${calcShift};
        border-radius: 50%;
        opacity: 0.4;
        transition: all ${props => props.theme.transition.sm};
    }

    ${props =>
        props.hasHover && props.colorPallet !== colorPalletOptions.wab
            ? hasHoverColor
            : null};
`;

const noBackground = css`
    background-color: transparent;

    &:hover,
    &:active,
    &:focus {
        background-color: transparent;
    }
`;

const disabledStyle = css`
    cursor: not-allowed;
    filter: grayscale(1);
`;

const numberStyle = css`
    .badge-number {
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left: 70%;
        min-width: ${countSize};
        height: ${countSize};
        line-height: ${countSize};
        padding: 0 ${props => props.theme.line};
        border-radius: ${props => math(countSize(props) + '/2')};
        font-size: ${props =>
            math(props.theme.icon.size[props.iconSize] + '/2')};
        text-align: center;
    }
`;

export {
    activeColor,
    baseColor,
    backgroundStyle,
    noBackground,
    disabledStyle,
    numberStyle,
};
