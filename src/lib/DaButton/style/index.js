import styled from 'styled-components';
import { math } from 'polished';
import {
    buttonStyleOptions,
    colorTypeOptions,
} from '../../../shared/constants';
import {
    enabled,
    disabled,
    originalStyle,
    reverseStyle,
    iconStyleBase,
} from './base';
import { backgroundCalc } from './constants';

const DaButtonBase = styled.span`
    box-sizing: border-box;
    position: relative;
    z-index: ${props => props.theme.zindex.base};
    display: inline-flex;
    align-items: center;
    height: ${props => props.theme.daButton.buttonHeight[props.buttonSize]};
    padding: 0
        ${props =>
            math(props.theme.daButton.buttonHeight[props.buttonSize] + '/2')};
    margin: ${props => props.theme.daButton.shift[props.buttonSize]};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.daButton.font[props.buttonSize]};
    border-radius: ${props =>
        math(props.theme.daButton.buttonHeight[props.buttonSize] + '/2')};
    border-style: ${props =>
        props.buttonStyle === buttonStyleOptions.line ? 'solid' : null};
    border-width: ${props =>
        props.buttonStyle === buttonStyleOptions.line
            ? props.theme.line
            : null};

    &::before {
        content: '';
        position: absolute;
        box-sizing: content-box;
        transform: scale(0);
        z-index: ${props => props.theme.zindex.layer};
        height: 100%;
        width: 100%;
        padding: ${backgroundCalc};
        bottom: -${backgroundCalc};
        left: -${backgroundCalc};
        border-radius: ${props =>
            props.theme.daButton.buttonHeight[props.buttonSize]};
        opacity: ${props =>
            props.buttonStyle === buttonStyleOptions.fill ? 0.3 : 0.2};
        transition: all ${props => props.theme.transition.sm};
    }

    ${props =>
        props.colorType === colorTypeOptions.reverse
            ? reverseStyle[props.buttonStyle]
            : originalStyle[props.buttonStyle][props.gradient]};
    ${props => (props.isDisabled ? disabled : enabled)};
    ${iconStyleBase};
`;

export { DaButtonBase };
