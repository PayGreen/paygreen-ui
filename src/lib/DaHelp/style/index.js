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
    iconStyleBase,
} from './base';

const DaButtonBase = styled.span`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content:center;
    border: solid ${props => props.theme.line}
        ${props => props.theme.wab.grey10};
    border-style: solid;
    border-radius: ${props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
    padding: 0
        ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
    height: ${props => props.theme.daButton.buttonHeight[props.fieldSize]};
    width: 100%;
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

    ${props =>
        props.colorType === colorTypeOptions.reverse
            ? reverseStyle[props.buttonStyle]
            : originalStyle[props.buttonStyle][props.gradient]};

    ${props => (props.isDisabled ? disabled : enabled)};
`;

export { DaButtonBase };
