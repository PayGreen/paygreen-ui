import { css } from 'styled-components';

const smallBadge = css`
    padding: 0 ${props => props.theme.space.xs};
`;

const bigBadge = css`
    padding: 0 ${props => props.theme.space.sm};
`;

const badgeSize = {
    tiny: css`${smallBadge};`,
    xxs: css`${smallBadge};`,
    xs: css`${smallBadge};`,
    sm: css`${smallBadge};`,
    base: css`${smallBadge};`,
    md: css`${bigBadge};`,
    lg: css`${bigBadge};`,
    xl: css`${bigBadge};`,
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
    color: ${props => props.theme.wab.white00};
    ${props => textBackground[props.gradient]};

    .icon {
        svg {
            fill: ${props => props.theme.wab.white00};
        }
    }
`;

const reverseStyle = css`
    color: ${props => props.theme.color[props.colorTheme].main};
    background-color: ${props => props.theme.wab.white00};

    .icon {
        svg {
            fill: ${props => props.theme.color[props.colorTheme].main};
        }
    }
`;

export { badgeSize, originalStyle, reverseStyle };
