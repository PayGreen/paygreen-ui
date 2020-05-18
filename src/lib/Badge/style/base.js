import { css } from 'styled-components';

const textSize = {
    xxs: css`
        font-size: ${props => props.theme.font.size.xxs};
        padding-left: ${props => props.theme.space.xs};
        padding-right: ${props => props.theme.space.xs};
        height: ${props => `calc(${props.theme.font.size.xxs} + 0.4rem)`};
    `,
    xs: css`
        font-size: ${props => props.theme.font.size.xs};
        padding-left: ${props => props.theme.space.xs};
        padding-right: ${props => props.theme.space.xs};
        height: ${props => `calc(${props.theme.font.size.xs} + 0.4rem)`};
    `,
    sm: css`
        font-size: ${props => props.theme.font.size.sm};
        padding-left: ${props => props.theme.space.xs};
        padding-right: ${props => props.theme.space.xs};
        height: ${props => `calc(${props.theme.font.size.sm} + 0.6rem)`};
    `,
    base: css`
        font-size: ${props => props.theme.font.size.base};
        padding-left: ${props => props.theme.space.xs};
        padding-right: ${props => props.theme.space.xs};
        height: ${props => `calc(${props.theme.font.size.base} + 1.2rem)`};
    `,
    md: css`
        font-size: ${props => props.theme.font.size.md};
        padding-left: ${props => props.theme.space.sm};
        padding-right: ${props => props.theme.space.sm};
        height: ${props => `calc(${props.theme.font.size.md} + 1.9rem)`};
    `,
    lg: css`
        font-size: ${props => props.theme.font.size.lg};
        padding-left: ${props => props.theme.space.sm};
        padding-right: ${props => props.theme.space.sm};
        height: ${props => `calc(${props.theme.font.size.lg} + 2rem)`};
    `,
    xl: css`
        font-size: ${props => props.theme.font.size.xl};
        padding-left: ${props => props.theme.space.sm};
        padding-right: ${props => props.theme.space.sm};
        height: ${props => `calc(${props.theme.font.size.xl} + 2rem)`};
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

const originalStyle = css`
     {
        color: ${props => props.theme.wab.white00};
        ${props => textBackground[props.gradient]};
    }
`;

const reverseStyle = css`
     {
        color: ${props => props.theme.color[props.colorTheme].main};
        background-color: ${props => props.theme.wab.white00};
    }
`;

export { textSize, originalStyle, reverseStyle };
