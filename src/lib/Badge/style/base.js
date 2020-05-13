import { css } from 'styled-components';

const textSize = {
    sm: css`
        font-size: ${props => props.theme.font.size.tiny};
        padding: ${props => props.theme.space.xs};
        margin-left: ${props => props.theme.space.sm};
    `,
    md: css`
        font-size: ${props => props.theme.font.size.xxs};
        padding: ${props => props.theme.space.xs};
        margin-left: ${props => props.theme.space.sm};
    `,
    lg: css`
        font-size: ${props => props.theme.font.size.xs};
        padding: ${props => props.theme.space.sm};
        margin-left: ${props => props.theme.space.md};
    `,
    xl: css`
        font-size: ${props => props.theme.font.size.sm};
        padding: ${props => props.theme.space.sm};
        margin-left: ${props => props.theme.space.md};
    `,
};

const textBackground = {
    brand: css`
        background-image: linear-gradient(
            to bottom right,
            ${props => props.theme.color.primary.main},
            ${props => props.theme.color.secondary.main}
        );
    `,
    theme: css`
        background-image: linear-gradient(
            to bottom right,
            ${props => props.theme.color[props.colorTheme].gradientBase},
            ${props => props.theme.color[props.colorTheme].gradientShade}
        );
    `,
    none: css`
        background-color: ${props => props.theme.color[props.colorTheme].main};
    `,
};

const coloredStyle = css`
     {
        color: ${props => props.theme.wab.white00};
        ${props => textBackground[props.gradient]};
    }
`;

const whiteStyle = css`
     {
        color: ${props => props.theme.color[props.colorTheme].main};
        background-color: ${props => props.theme.wab.white00};
    }
`;

export { textSize, coloredStyle, whiteStyle };
