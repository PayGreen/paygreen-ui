import { css } from 'styled-components';
import { mainColor } from './constants';
import { math } from 'polished';

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

const originalStyle = {
    fill: {
        brand: css``,
        theme: css``,
        none: css`
            background-color: ${props => mainColor[props.colorPallet]};
            color: ${mainColor.white};
            .icon {
                & svg {
                    fill: ${mainColor.white};
                }
            }
            &::before {
                background-color: ${props => mainColor[props.colorPallet]};
            }
        `,
    },

    line: {
        brand: css``,
        theme: css``,
        none: css`
            color: ${props => mainColor[props.colorPallet]};
            border: solid ${props => props.theme.line}
                ${props => mainColor[props.colorPallet]};

            .icon {
                & svg {
                    fill: ${props => mainColor[props.colorPallet]};
                }
            }
            &::before {
                background-color: ${props => mainColor[props.colorPallet]};
            }
        `,
    },
};

const reverseStyle = {
    fill: css`
        background-color: ${mainColor.white};
        color: ${props => mainColor[props.colorPallet]};
        .icon {
            & svg {
                fill: ${props => mainColor[props.colorPallet]};
            }
        }
        &::before {
            background-color: ${mainColor.white};
        }
    `,

    line: css`
        color: ${mainColor.white};
        border: solid ${props => props.theme.line} ${mainColor.white};

        .icon {
            & svg {
                fill: ${mainColor.white};
            }
        }
        &::before {
            background-color: ${mainColor.white};
        }
    `,
};

const iconStyleBase = css`
    .icon {
        margin-right: ${props =>
            math(props.theme.button.paddingWidth[props.buttonSize] + '/2')};
        width: ${props => props.theme.iconSize[props.buttonSize]};
        height: auto;
    }
`;

export { enabled, disabled, originalStyle, reverseStyle, iconStyleBase };
