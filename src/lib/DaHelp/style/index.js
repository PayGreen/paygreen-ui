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

const DaHelpBase = styled.span`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content:center;
    border: solid ${props => props.theme.line}
    ${props => props.theme.wab.grey10};
    border-radius: ${props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0
        ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
    height: ${props => props.theme.daButton.buttonHeight[props.fieldSize]};

    ${props => (props.disabled ? disabled : enabled)};
`;

export { DaHelpBase };
