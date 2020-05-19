import { css } from 'styled-components';
import { transparentize } from 'polished';

const hoverBase = css`
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to left,
            ${props => transparentize(1, props.theme.color[props.colorTheme].gradientBase)} 50%,
            ${props => transparentize(0.8, props.theme.color[props.colorTheme].gradientBase)} 90%
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

const activeStyle = css`
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

export { activeStyle, hoverBase };
