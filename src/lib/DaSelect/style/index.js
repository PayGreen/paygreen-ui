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
    position: relative;
    max-width: ${props => props.theme.form.inputWidth[props.blockWidth]};

    select {
        ${field};
        line-height:normal;
        appearance: none;
        
        option {
            &:disabled {
                color: ${props => props.theme.wab.grey30};
            }
        }
        
        ${props => (props.inputDisabled ? disabled : enabled)};
        ${props => (props.hasHelpButton ? helpButtonStyle : null)};
    }

    &::after {
        content: '';
        position: absolute;
        pointer-events: none;
        border-top: ${props =>
                math(
                    props.theme.daButton.buttonHeight[props.fieldSize] + '/3.5',
                )}
            solid
            ${props =>
                props.inputDisabled
                    ? props.theme.wab.grey30
                    : props.theme.wab.grey60};
        border-right: ${props =>
                math(props.theme.daButton.buttonHeight[props.fieldSize] + '/4')}
            solid transparent;
        border-left: ${props =>
                math(props.theme.daButton.buttonHeight[props.fieldSize] + '/4')}
            solid transparent;
        right: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        top: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2.5')};
    }
`;

export { DaSelectBase };
