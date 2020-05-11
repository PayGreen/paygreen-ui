import { css } from 'styled-components';
import { transparentize, math } from 'polished';
import { LinkBase } from '../../Link/style';

const hoverBase = css`
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 200%;
        height: 100%;
        background-image: linear-gradient(
            to left,
            ${props =>
                    transparentize(
                        1,
                        props.theme.color[props.colorTheme].gradientBase,
                    )}
                50%,
            ${props =>
                    transparentize(
                        0.8,
                        props.theme.color[props.colorTheme].gradientBase,
                    )}
                90%
        );
        transition: all ${props => props.theme.transition.xl};
    }

    a:hover &,
    a:active &,
    a:focus & {
        &::before {
            left: 0;
        }
    }
`;

const hoverAlternative = css`
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: ${props => props.theme.line};
        width: 0;
        transform: translateX(-50%);
        margin-left: 50%;
        background-image: linear-gradient(
            to left,
            ${props => props.theme.color[props.colorTheme].gradientBase},
            ${props => props.theme.color[props.colorTheme].gradientShade}
        );
        transition: all ${props => props.theme.transition.sm};
    }

    a:hover &,
    a:active &,
    a:focus & {
        &::after {
            width: 100%;
        }

        ${LinkBase} {
            color: ${props => props.theme.color[props.colorTheme].main};
        }
    }
`;

const hoverEmphasis = css`
    padding-right: ${props => props.theme.space.md};

    a:hover &,
    a:active &,
    a:focus & {
        padding-left: ${props => props.theme.space.md};
        padding-right: ${props => props.theme.space.sm};
    }

    @media (${props => props.theme.query.min.lg}) {
        padding-left: ${props => props.theme.space.md};
        padding-right: ${props => props.theme.space.lg};

        a:hover &,
        a:active &,
        a:focus & {
            padding-left: ${props => props.theme.space.lg};
            padding-right: ${props => props.theme.space.md};
        }
    }
`;

const activeStyle = css`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        to left,
        ${props =>
                transparentize(
                    0.8,
                    props.theme.color[props.colorTheme].gradientShade,
                )}
            30%,
        ${props =>
                transparentize(
                    0.7,
                    props.theme.color[props.colorTheme].gradientBase,
                )}
            80%
    );
    transition: all ${props => props.theme.transition.xl};
`;

const notClickable = css`
    cursor: default;
`;

const main = css`
    ${LinkBase} {
        padding: ${props => props.theme.space.md} 0;
    }

    @media (${props => props.theme.query.max.lg}) {
        ${props => (props.hasHoverBase ? hoverBase : null)};
        ${props => (props.hasHoverEmphasis ? hoverEmphasis : null)};

        ${props =>
            !props.hasHoverBase && !props.hasHoverEmphasis ? titleStyle : null};
    }

    @media (${props => props.theme.query.min.lg}) {
        & > .icon {
            display: none;
        }
        ${props => (props.isActive ? activeStyle : null)};
        ${LinkBase} {
            box-sizing: border-box;
            height: ${props =>
                math(props.theme.grid.header + '+' + props.theme.line)};
            text-align: center;
        }

        z-index: ${props => props.theme.zindex.menu};
        ${props =>
            props.hasHoverAlternative ? hoverAlternative : notClickable};
    }
`;

const sub = css`
    padding-top: ${props => props.theme.space.sm};
    padding-bottom: ${props => props.theme.space.sm};

    ${LinkBase} {
        padding: ${props => props.theme.space.sm} 0;
    }

    ${props => (props.hasHoverBase ? hoverBase : null)};
    ${props => (props.hasHoverEmphasis ? hoverEmphasis : null)};
`;

const align = {
    left: css``,
    center: css`
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    `,
    right: css`
        width: fit-content;
        margin-left: auto;
    `,
};

export { main, sub, align, activeStyle };
