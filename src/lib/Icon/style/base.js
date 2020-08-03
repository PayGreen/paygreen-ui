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
        filter: grayscale(0);
        background-color: ${props =>
            props.theme.color[props.colorTheme].gradientBase};

        svg {
            fill: ${props => props.theme.wab.white00};
        }
    `,
    status: css`
        filter: grayscale(0);
        background-color: ${props =>
            props.theme.status[props.colorStatus].main};

        svg {
            fill: ${props => props.theme.status[props.colorStatus].light};
        }
    `,
};

const hasHoverColor = css`

    &:hover,
    &:active,
    &:focus {
        ${props => activeColor[props.colorPallet]};
    }

    ${props => (props.isActive ? activeColor[props.colorPallet] : null)};
`;

const backgroundStyle = css`
    padding: ${props =>
        math(
            props.theme.iconSize[props.iconSize] +
                '/2 - ' +
                props.theme.space.xs,
        )};
    border-radius: 50%;

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
    resetButtonStyle,
    baseColor,
    hasHoverColor,
    backgroundStyle,
    noBackground,
};
