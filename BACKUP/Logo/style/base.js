import { css } from 'styled-components';

const whiteStyle = css`
    svg {
        fill: ${props => props.theme.wab.white00};
    }
`;

const themeColorStyle = css`
    svg {
        fill: ${props => props.theme.logoColor};
    }
`;

const noBaselineStyle = css`
    .baseline {
        display: none;
    }
`;

const hoverColorStyle = css`
    img,
    svg {
        filter: grayscale(100%);
        opacity: 0.7;
    }

    a:hover &,
    a:active &,
    a:focus & {
        img,
        svg {
            filter: grayscale(0%);
            opacity: 1;
        }
    }
`;

const hoverDirectionStyle = {
    none: css`
        padding: 0 !important;
    `,
    top: css`
        padding-top: ${props => props.theme.space.sm};
        padding-bottom: 0;
        padding-left: 0 !important;
        padding-right: 0 !important;
    `,
    right: css`
        padding-right: ${props => props.theme.space.sm};
        padding-left: 0;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    `,
};

export {
    noBaselineStyle,
    whiteStyle,
    themeColorStyle,
    hoverColorStyle,
    hoverDirectionStyle,
};
