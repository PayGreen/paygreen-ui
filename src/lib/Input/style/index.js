import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import {
    label,
    field,
    withShadow,
    enabled,
    disabled
} from './base';

const InputBase = styled.div`
    ${responsiveSpaces('margin')};

    max-width: ${props => props.inputType === 'tel' ?
        props.theme.form.inputWidth.sm :
        props.theme.form.inputWidth[props.inputWidth]
    };

    ${props => props.params.shadow ? withShadow : null};

    label {
        ${label};
    }

    input {
        ${field};
        ${props => props.inputDisabled ? disabled : enabled};

        ::placeholder {
            color: ${props => props.theme.wab.grey20};
            font-style: italic;
        }
    }
`;

export { InputBase };