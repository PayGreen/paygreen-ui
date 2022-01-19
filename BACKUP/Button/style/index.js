import styled from 'styled-components';
import { math } from 'polished';
import { opacity } from './constants';
import { disabledStyle, templateStyle } from './base';

const ButtonBase = styled.span`
    display: inline-block;
    position: relative;
    z-index: ${props => props.theme.zindex.base};
    padding: ${props =>
        props.theme.button.paddingHeight[props.buttonSize] +
        ' ' +
        props.theme.button.paddingWidth[props.buttonSize]};
    margin: ${props => props.theme.button.shift};
    transition: all ${props => props.theme.transition.xs};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: ${props =>
        props.theme.button.letterSpacing[props.buttonSize]};
    line-height: ${props => props.theme.font.lineHeight.md};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.button.font[props.buttonSize]};

    @media ${props => props.theme.screen.max.md} {
        font-size: ${props =>
            math(props.theme.button.font[props.buttonSize] + '- 0.1')};
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        z-index: ${props => props.theme.zindex.layer};
        height: 100%;
        width: 100%;
        border-radius: ${props => props.theme.radius.sm};
        opacity: ${props => opacity[props.colorType]};
        transition: all ${props => props.theme.transition.xs},
            opacity ${props => props.theme.transition.sm} linear
                ${props => props.theme.transition.xs};
    }

    &::before {
        top: -${props => props.theme.button.shift};
        left: -${props => props.theme.button.shift};
    }

    &::after {
        bottom: -${props => props.theme.button.shift};
        right: -${props => props.theme.button.shift};
    }

    button:hover &,
    button:active &,
    button:focus &,
    a:hover &,
    a:active &,
    a:focus & {
        &::before,
        &::after {
            opacity: 1;
        }

        &::before {
            top: 0;
            left: 0;
        }

        &::after {
            bottom: 0;
            right: 0;
        }
    }

    ${props => (props.isDisabled ? disabledStyle : null)};
    ${props => templateStyle[props.buttonStyle]};
`;

export { ButtonBase };
