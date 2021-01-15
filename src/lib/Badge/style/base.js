import { css } from 'styled-components';

const activeStyle = css`
    &::before {
        transform: scale(1);
    }
`;

const buttonStyle = css`
    position: relative;
    z-index: ${props => props.theme.zindex.base};

    &::before {
        content: '';
        box-sizing: content-box;
        position: absolute;
        z-index: ${props => props.theme.zindex.layer};
        display: block;
        width: 100%;
        height: 100%;
        border-radius: ${props => props.theme.radius.sm};
        transform: scale(0);
        transition: all ${props => props.theme.transition.xs};
    }

    &:hover,
    &:active,
    &:focus {
        ${activeStyle};
    }

    ${props => (props.isActive ? activeStyle : null)};
`;

const smallBadge = css`
    padding: 0 ${props => props.theme.space.xs};

    &::before {
        top: -${props => props.theme.space.xs};
        left: -${props => props.theme.space.xs};
        padding: ${props => props.theme.space.xs};
    }
`;

const bigBadge = css`
    padding: 0 ${props => props.theme.space.sm};

    &::before {
        top: -${props => props.theme.space.sm};
        left: -${props => props.theme.space.sm};
        padding: ${props => props.theme.space.sm};
    }
`;

const badgeSize = {
    tiny: css`
        ${smallBadge};
    `,
    xxs: css`
        ${smallBadge};
    `,
    xs: css`
        ${smallBadge};
    `,
    sm: css`
        ${smallBadge};
    `,
    base: css`
        ${smallBadge};
    `,
    md: css`
        ${bigBadge};
    `,
    lg: css`
        ${bigBadge};
    `,
    xl: css`
        ${bigBadge};
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

const originalStyle = {
    main: css`
        color: ${props => props.theme.wab.white00};
        ${props => textBackground[props.gradient]};

        &::before {
            opacity: 0.4;
            ${props => textBackground[props.gradient]};
        }

        .icon {
            svg {
                fill: ${props => props.theme.wab.white00};
            }
        }
    `,
    light: css`
        color: ${props => props.theme.color[props.colorTheme].main};
        background-color: ${props => props.theme.color[props.colorTheme].light};

        &::before {
            opacity: 0.4;
            background-color: ${props =>
                props.theme.color[props.colorTheme].light};
        }

        .icon {
            svg {
                fill: ${props => props.theme.color[props.colorTheme].main};
            }
        }
    `,
};

const reverseStyle = css`
    color: ${props => props.theme.color[props.colorTheme].main};
    background-color: ${props => props.theme.wab.white00};

    &::before {
        opacity: 0.5;
        background-color: ${props => props.theme.wab.white00};
    }

    .icon {
        svg {
            fill: ${props => props.theme.color[props.colorTheme].main};
        }
    }
`;

export { buttonStyle, badgeSize, originalStyle, reverseStyle };
