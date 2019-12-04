import { css } from 'styled-components';

const whiteStyle = css`
    svg {
        fill: ${props => props.theme.wab.white00};
    }
`;

const noBaselineStyle = css`
    .baseline {
        display: none;
    }
`;

const hoverRightStyle = css`
    padding-right: ${props => props.theme.space.sm};

    a:hover &,
    a:active &,
    a:focus & {
        padding-right: 0;
        padding-left: ${props => props.theme.space.sm};
    }
`;

const hoverTopStyle = css`
    padding-top: ${props => props.theme.space.sm};

    a:hover &,
    a:active &,
    a:focus & {
        padding-bottom: ${props => props.theme.space.sm};
        padding-top: 0;
    }
`;

const hoverColorStyle = css`
    svg {
        filter: grayscale(100%);
        opacity: .7;
    }

    a:hover &,
    a:active &,
    a:focus & {
        svg {
            filter: grayscale(0%);
            opacity: 1;
        }
    }
`;

export {
    whiteStyle,
    noBaselineStyle,
    hoverRightStyle,
    hoverTopStyle,
    hoverColorStyle
};