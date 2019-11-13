import styled from 'styled-components';
import {
    label,
    field,
    withShadow,
    enabled,
    disabled
} from '../../Input/style/base';

const SelectBase = styled.div`
    ${props => props.params.shadow ? withShadow : null};
    max-width: ${props => props.theme.form.inputWidth[props.inputWidth]};

    label {
        ${label};
    }

    select {
        ${field};
        ${props => props.inputDisabled ? disabled : enabled};

        option {
            &:disabled {
                color: ${props => props.theme.color.grey30};
            }
        }
    }
`;

export { SelectBase };