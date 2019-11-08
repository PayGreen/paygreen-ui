import styled from 'styled-components';
import {
    label,
    field,
    withShadow,
    enabled,
    disabled
} from '../../Input/style/base';

const SelectBase = styled.div`
    /* largeur changeante */
    max-width: ${props => props.theme.form.inputWidth.sm};

    ${props => props.params.shadow ? withShadow : null};

    label {
        ${label};
    }

    select {
        ${field};
        ${props => props.inputDisabled ? disabled : enabled};
    }
`;

export { SelectBase };