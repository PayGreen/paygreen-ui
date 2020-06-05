import { css } from 'styled-components';
import { mainColor } from './constants';

const enabled = css`
    button:hover &,
    button:active &,
    button:focus &,
    a:hover &,
    a:active &,
    a:focus & {
        &::before {
            transform: scale(1);
        }
    }
`;

const disabled = css`
    cursor: not-allowed;
    filter: grayscale(1);
`;

const whiteBase = css`
    color: ${mainColor.white};
    .icon svg {
        fill: ${mainColor.white};
    }
`;

const colorPalletBase = css`
    color: ${props => mainColor[props.colorPallet]};
    .icon svg {
        fill: ${props => mainColor[props.colorPallet]};
    }
`;

const gradientThemeBase = css`
    background-image: linear-gradient(
        to bottom right,
        ${mainColor.gradientBase},
        ${mainColor.gradientShade}
    );
`;

const gradientBrandBase = css`
    background-image: linear-gradient(
        to bottom right,
        ${mainColor.primary},
        ${mainColor.secondary}
    );
`;

const originalStyle = {
    fill: {
        brand: css`
            ${whiteBase};
            ${gradientBrandBase};

            &::before {
                ${gradientBrandBase};
            }
        `,
        theme: css`
            ${whiteBase};
            ${gradientThemeBase};

            &::before {
                ${gradientThemeBase};
            }
        `,
        none: css`
            ${whiteBase};
            background-color: ${props => mainColor[props.colorPallet]};

            &::before {
                background-color: ${props => mainColor[props.colorPallet]};
            }
        `,
    },

    line: {
        brand: css`
            color: ${mainColor.primary};
            border-left-color: ${mainColor.primary};
            border-top-color: ${mainColor.primary};
            border-right-color: ${mainColor.secondary};
            border-bottom-color: ${mainColor.secondary};

            .icon svg {
                fill: ${mainColor.primary};
            }

            &::before {
                ${gradientBrandBase};
            }
        `,
        theme: css`
            color: ${mainColor.theme};
            border-left-color: ${mainColor.gradientBase};
            border-top-color: ${mainColor.gradientBase};
            border-right-color: ${mainColor.gradientShade};
            border-bottom-color: ${mainColor.gradientShade};

            .icon svg {
                fill: ${mainColor.theme};
            }

            &::before {
                ${gradientThemeBase};
            }
        `,
        none: css`
            ${colorPalletBase};
            border-color: ${props => mainColor[props.colorPallet]};

            &::before {
                background-color: ${props => mainColor[props.colorPallet]};
            }
        `,
    },
};

const iconStyleBase = css`
    .icon {
        margin-right: ${props =>
            props.theme.daButton.iconSpacing[props.buttonSize]};
        width: ${props => props.theme.iconSize[props.buttonSize]};
        height: auto;
    }
`;

export { enabled, disabled, originalStyle, iconStyleBase };
