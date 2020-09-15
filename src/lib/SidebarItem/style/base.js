import { css } from 'styled-components';
import { transparentize } from 'polished';
import { sidebarItemHtmlTagOptions } from '../../../shared/constants';

const aHoverStyle = css`
    a:hover &,
    a:active &,
    a:focus & {
        &::before {
            left: 0;
        }
    }
`;

const buttonHoverStyle = css`
    &:hover,
    &:active,
    &:focus {
        &::before {
            left: 0;
        }
    }
`;

const hoverBase = css`
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            to left,
            ${props =>
                    transparentize(
                        1,
                        props.theme.color[props.colorTheme].gradientBase,
                    )}
                20%,
            ${props =>
                    transparentize(
                        0.8,
                        props.theme.color[props.colorTheme].gradientBase,
                    )}
                90%
        );
        transition: all ${props => props.theme.transition.xl};
    }

    ${props =>
        props.as === sidebarItemHtmlTagOptions.button
            ? buttonHoverStyle
            : aHoverStyle}
`;

const activeStyle = css`
    background-image: linear-gradient(
        to left,
        ${props =>
            transparentize(
                0.8,
                props.theme.color[props.colorTheme].gradientShade,
            )},
        ${props =>
            transparentize(
                0.8,
                props.theme.color[props.colorTheme].gradientBase,
            )}
    );
    transition: all ${props => props.theme.transition.xl};
`;

const buttonStyle = css`
    width: 100%;
`;

export { activeStyle, buttonStyle, hoverBase };
