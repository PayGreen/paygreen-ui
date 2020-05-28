import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import {
    field,
    enabled,
    disabled, helpButtonStyle
} from './base';

const DaInputBase = styled.div`
    ${responsiveSpaces('margin')};

    max-width: ${props => props.inputType === 'tel' ?
        props.theme.form.inputWidth.sm :
        props.theme.form.inputWidth[props.fieldSize]
    };

    input {
        ${field};
        ${props => props.inputDisabled ? disabled : enabled};

        ::placeholder {
            color: ${props => props.theme.wab.grey30};
            font-style: italic;
        }
        ${props => props.hasHelpButton ? helpButtonStyle : null};
    }


`;

export { DaInputBase };