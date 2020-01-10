import { css } from 'styled-components';
import { transparentize, math } from 'polished';
import { colorPalletOptions } from '../../../shared/constants';

const removeButtonStyle = css`
    background: transparent;
    border: none;
    padding: 0;
    outline: none;
    cursor: pointer;
`;

const shadowStyle = {
    base: {
        theme: css`
            box-shadow: ${props => props.theme.shadow.size.sm + ' ' + transparentize(
                props.theme.shadow.opacity.md,
                props.theme.color[props.colorTheme].main
            )};
        `,
        wab: css`
            box-shadow: ${props => props.theme.shadow.size.sm + ' ' + transparentize(
                props.theme.shadow.opacity.sm,
                props.theme.wab.black00
            )};
        `,
        status: css`
            box-shadow: ${props => props.theme.shadow.size.sm + ' ' + transparentize(
                props.theme.shadow.opacity.md,
                props.theme.color.status[props.colorStatus]
            )};
        `
    },
    active: {
        theme: css`
            box-shadow: ${props => props.theme.shadow.size.md + ' ' + transparentize(
                props.theme.shadow.opacity.lg,
                props.theme.color[props.colorTheme].main
            )};
        `,
        wab: css`
            box-shadow: ${props => props.theme.shadow.size.md + ' ' + transparentize(
                props.theme.shadow.opacity.lg,
                props.theme.color[props.colorTheme].main
            )};
        `,
        status: css`
            box-shadow: ${props => props.theme.shadow.size.md + ' ' + transparentize(
                props.theme.shadow.opacity.lg,
                props.theme.color.status[props.colorStatus]
            )};
        `
    }
};

const layerShift = '6px';

const layerStyle = css`
    &::before {
        top: ${layerShift};
        left: ${layerShift};
    }

    &::after {
        bottom: ${layerShift};
        right: ${layerShift};
    }
`;

const activeStyle = {
    theme: css`
        ${props => props.hasShadow ? shadowStyle.active.theme : layerStyle};
    `,
    wab: css`
        ${props => props.hasShadow ? shadowStyle.active.wab : layerStyle};

        svg {
            fill: ${props => props.theme.color[props.colorTheme].main};
        }
    `,
    status: css`
        ${props => props.hasShadow ? shadowStyle.active.status : layerStyle};
    `
};

const backgroundStyle = css`
    padding: ${props => math(props.theme.iconSize[props.iconSize] + '/2 - ' + props.theme.space.xs)};
    border-radius: 50%;
    background-color: ${props => props.colorPallet === colorPalletOptions.theme ?
        props.theme.color[props.colorTheme].light :
        props.theme.wab.white00
    };

    &::before,
    &::after {
        content: '';
        position: absolute;
        z-index: ${props => props.theme.zindex.layer};
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background: ${props => props.colorPallet === colorPalletOptions.theme ?
            props.theme.color[props.colorTheme].light :
            props.theme.wab.white00
        };
        opacity: .5;
        transition: all ${props => props.theme.transition.sm} cubic-bezier(0.9, -0.6, 0, 2);
    }

    &::before {
        top: 0;
        left: 0;
    }

    &::after {
        bottom: 0;
        right: 0;
        transition-delay: .06s;
    }

    ${props => props.hasShadow ? shadowStyle.base[props.colorPallet] : null};
`;

export {
    removeButtonStyle,
    backgroundStyle,
    activeStyle
};