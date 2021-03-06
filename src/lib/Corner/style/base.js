import { css } from 'styled-components';
import { colorPalletOptions } from '../../../shared/constants';

const backgroundStyle = css`
    background-color: ${props =>
        props.theme[
            props.colorPallet === colorPalletOptions.theme
                ? 'color'
                : props.colorPallet
        ][
            props.colorPallet === colorPalletOptions.theme
                ? props.colorTheme
                : props.colorStatus
        ][props.colorStyle]};
`;

const positionStyle = {
    left: css`
        left: 0;
    `,
    right: css`
        left: inherit;
        right: 0;
    `,
};

const centeredPopinStyle = {
    left: css`
        transform: translateX(-50%);
    `,
    right: css`
        transform: translateX(50%);
    `,
};

const squarePosition = {
    left: css`
        padding-right: ${props => props.theme.space.xs};
        border-top-left-radius: ${props =>
            props.theme.radius[props.radiusSize]};
        border-bottom-right-radius: 100%;
    `,
    right: css`
        padding-left: ${props => props.theme.space.xs};
        border-top-right-radius: ${props =>
            props.theme.radius[props.radiusSize]};
        border-bottom-left-radius: 100%;
    `,
};

const bannerPosition = {
    left: css`
        span {
            transform: rotate(-45deg) translateY(-100%);
            transform-origin: top right;
            margin-left: -42%;
        }
    `,
    right: css`
        margin-left: auto;

        span {
            transform: rotate(45deg) translateY(-100%);
            transform-origin: top left;
            margin-right: -42%;
        }
    `,
};

const cornerStyle = {
    square: css`
        .corner {
            .cornerContent {
                box-sizing: border-box;
                height: ${props => props.theme.space.lg};
                min-width: ${props => props.theme.space.lg};
                padding-bottom: ${props => props.theme.space.xs};

                ${props => squarePosition[props.position]};
            }
        }
    `,
    banner: css`
        pointer-events: none;

        .corner {
            width: 70%;
            padding-bottom: 100%;
            overflow: hidden;

            .cornerContent {
                box-sizing: content-box;
                min-height: ${props => props.theme.space.md};
                padding: ${props =>
                    props.theme.space.sm + ' ' + props.theme.space.lg};
                text-transform: uppercase;
                font-size: ${props => props.theme.font.size.xxs};
                letter-spacing: ${props => props.theme.font.spacing};
            }

            ${props => bannerPosition[props.position]};
        }
    `,
};

export { backgroundStyle, positionStyle, centeredPopinStyle, cornerStyle };
