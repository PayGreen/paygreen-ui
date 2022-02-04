import { css } from 'styled-components';
import { transparentize } from 'polished';

const noClickableStyle = css`
    cursor: default;
    padding: 0 ${props => props.theme.space.sm} !important;
    color: ${props => props.theme.wab.grey30};
    border-bottom: solid
        ${props => props.theme.line + ' ' + props.theme.wab.white20};

    @media ${props => props.theme.screen.min.lg} {
        color: ${props => props.theme.wab.grey40};
        border: none;
    }
`;

const isClickableStyle = css`
    position: relative;
    overflow-x: hidden;
    color: ${props => props.theme.color[props.colorTheme].main};

    @media ${props => props.theme.screen.max.lg} {
        padding-right: ${props => props.theme.space.md};

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
    }

    @media ${props => props.theme.screen.min.lg} {
        &::after {
            content: '';
            position: absolute;
            left: 0;
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
    }

    a:hover &,
    a:active &,
    a:focus & {
        @media ${props => props.theme.screen.max.lg} {
            padding-left: ${props => props.theme.space.md};
            padding-right: ${props => props.theme.space.sm};

            &::before {
                left: 0;
            }
        }

        @media ${props => props.theme.screen.min.lg} {
            &::after {
                width: 100%;
            }
        }
    }
`;

export { noClickableStyle, isClickableStyle };
