import { css } from 'styled-components';

const textSizeBases = {
    sm: css`
        font-size: ${props => props.theme.font.size.tiny};
        padding: ${props => props.theme.space.xs};
        margin-left: ${props => props.theme.space.sm};
    `,
    md: css`
        font-size: ${props => props.theme.font.size.xxs};
        padding: ${props => props.theme.space.xs};
        margin-left: ${props => props.theme.space.md};
    `,
    lg: css`
        font-size: ${props => props.theme.font.size.xs};
        padding: ${props => props.theme.space.sm};
        margin-left: ${props => props.theme.space.md};
    `,
};

const textSize = {
    none: css`${textSizeBases.lg}`,
    xs: css`${textSizeBases.sm}`,
    sm: css`${textSizeBases.sm}`,
    md: css`${textSizeBases.sm}`,
    lg: css`${textSizeBases.md}`,
    xl: css`${textSizeBases.lg}`,
};

const textBackground = {
    brand: css`
        background-image: linear-gradient(to bottom right,
            ${props => props.theme.color.primary.main},
            ${props => props.theme.color.secondary.main}
        );
    `,
    theme: css`
        background-image: linear-gradient(to bottom right,
            ${props => props.theme.color[props.colorTheme].gradientBase},
            ${props => props.theme.color[props.colorTheme].gradientShade}
        );
    `,
    none: css`
        background-color: ${props => props.theme.color[props.colorTheme].main};
    `,
}

const coloredStyle = css`
    .text {
        color: ${props => props.theme.wab.white00};
        ${props => textBackground[props.gradient]};
    }
`;

const whiteStyle = css`
    svg {
        fill: ${props => props.theme.wab.white00};
    }

    .text {
        color: ${props => props.theme.color[props.colorTheme].main};
        background-color: ${props => props.theme.wab.white00};
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
    img,
    svg {
        filter: grayscale(100%);
        opacity: .7;
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

export {
    textSize,
    coloredStyle,
    whiteStyle,
    noBaselineStyle,
    hoverRightStyle,
    hoverTopStyle,
    hoverColorStyle
};