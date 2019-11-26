import { css } from 'styled-components';
import { transparentize, math } from 'polished';
import { colorPalletOptions } from '../../../shared/constants';

const shadowStyle = {
    base: {
        theme: css`
            box-shadow: ${props => props.theme.shadow.size.sm + ' ' + transparentize(
                props.theme.shadow.opacity.md,
                props.theme.color[props.colorTheme]['main']
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
    hover: {
        theme: css``,
        wab: css``,
        status: css``
    }
};

const backgroundStyle = css`
    ${props => shadowStyle.base[props.colorPallet]};

    padding: ${props => math(props.theme.iconSize[props.iconSize] + '/2 - ' + props.theme.space.xs)};
    border-radius: 50%;
    background: ${props => props.colorPallet === colorPalletOptions.theme ?
        props.theme.color[props.colorTheme]['light'] :
        props.theme.wab.white00
    };
`;

export {
    backgroundStyle
};