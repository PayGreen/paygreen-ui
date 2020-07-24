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

const colorStyle = {
    main: css`
        color: ${props => props.theme.wab.white00};
    `,
    light: css`
        color: ${props =>
            props.theme[
                props.colorPallet === colorPalletOptions.theme
                    ? 'color'
                    : props.colorPallet
            ][
                props.colorPallet === colorPalletOptions.theme
                    ? props.colorTheme
                    : props.colorStatus
            ].main};
    `,
};

const bannerPosition = {
    left: css`
        left: 0;

        .corner {
            span {
                transform: rotate(-45deg) translateY(-100%);
                transform-origin: top right;
                margin-left: -43%;
            }
        }
    `,
    right: css`
        right: 0;

        .corner {
            margin-left: auto;

            span {
                transform: rotate(45deg) translateY(-100%);
                transform-origin: top left;
            }
        }
    `,
};

const squareStyle = css``;

const bannerStyle = css`
    pointer-events: none;

    .corner {
        width: 70%;
        padding-bottom: 100%;
        overflow: hidden;

        span {
            display: inline-block;
            padding: ${props =>
                props.theme.space.xs + ' ' + props.theme.space.lg};
            text-transform: uppercase;
            font-size: ${props => props.theme.font.size.xxs};
            letter-spacing: ${props => props.theme.font.spacing};
            line-height: ${props => props.theme.font.lineHeight.md};
        }
    }

    ${props => bannerPosition[props.cornerPosition]};
`;

export { backgroundStyle, colorStyle, squareStyle, bannerStyle };
