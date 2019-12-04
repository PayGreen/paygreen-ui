import styled from 'styled-components';
import { colorTypeOptions } from '../../../shared/constants';
import {
    enabled,
    disabled,
    templateStyle
} from './base';

const ButtonBase = styled.span`
    ${props => props.params.disabled ? disabled : enabled};
    ${props => templateStyle[props.template]};

    display: inline-block;
    position: relative;
    z-index: 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.button.font[props.buttonSize]};
    letter-spacing: ${props => props.theme.button.letterSpacing[props.buttonSize]};
    padding: ${props => props.theme.button.paddingHeight[props.buttonSize]} ${props => props.theme.button.paddingWidth[props.buttonSize]};
    margin: ${props => props.theme.button.shift};
    transition: all ${props => props.theme.transition.xs};

    &::before,
    &::after {
        content: '';
        position: absolute;
        z-index: ${props => props.theme.zindex.layer};
        height: 100%;
        width: 100%;
        border-radius: ${props => props.theme.radius.sm};
        opacity: ${props => props.colorType === colorTypeOptions.reverse ? 0.6 : 0.5};
        transition:
            all ${props => props.theme.transition.xs},
            opacity ${props => props.theme.transition.sm} linear ${props => props.theme.transition.xs};
    }

    &::before {
        top: -${props => props.theme.button.shift};
        left: -${props => props.theme.button.shift};
    }

    &::after {
        bottom: -${props => props.theme.button.shift};
        right: -${props => props.theme.button.shift};
    }
`;

export { ButtonBase };