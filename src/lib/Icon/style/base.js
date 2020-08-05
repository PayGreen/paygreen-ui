import { css } from 'styled-components';
import { math } from 'polished';
import { colorPalletOptions } from '../../../shared/constants';

const resetButtonStyle = css`
    cursor: pointer;
    outline: none;
    border: none;
    padding: 0;
`;

const baseColor = {
    theme: css`
        background-color: ${props => props.theme.color[props.colorTheme].light};

        svg {
            fill: ${props => props.theme.color[props.colorTheme].main};
        }
    `,
    wab: css`
        background-color: transparent;

        svg {
            fill: ${props => props.theme.wab[props.colorWab]};
        }
    `,
    status: css`
        background-color: ${props =>
            props.theme.status[props.colorStatus].light};

        svg {
            fill: ${props => props.theme.status[props.colorStatus].main};
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

const calcShift = props => props.theme.icon.shift[props.iconSize];

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
        width: 100%
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

export {
    activeColor,
    baseColor,
    backgroundStyle,
    hasHoverColor,
    noBackground,
    resetButtonStyle,
};
