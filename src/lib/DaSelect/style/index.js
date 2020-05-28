import styled from 'styled-components';
import { math } from 'polished';
import { responsiveSpaces } from '../../../shared/spaces';
import {
    field,
    enabled,
    disabled,
    helpButtonStyle,
} from '../../DaInput/style/base';

const DaSelectBase = styled.div`
    ${responsiveSpaces('margin')};
    position: relative;
    max-width: ${props => props.theme.form.inputWidth[props.fieldSize]};
    
    select {
        ${field};
        ${props => props.inputDisabled ? disabled : enabled};
        appearance:none;

        option {
            &:disabled {
                color: ${props => props.theme.wab.grey30};
            }
        }
        ${props => props.hasHelpButton ? helpButtonStyle : null};
    }
    
    &::after {
        content: "";
        position:absolute;
        border-top: 10px solid #777;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        right: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        top:  ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2.5')};
    }
`;

export { DaSelectBase };