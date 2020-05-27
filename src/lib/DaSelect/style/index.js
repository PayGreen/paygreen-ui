import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import {
    label,
    field,
    withShadow,
    enabled,
    disabled
} from '../../Input/style/base';

const DaSelectBase = styled.div`
    ${responsiveSpaces('margin')};
    ${props => props.hasShadow ? withShadow : null};
    max-width: ${props => props.theme.form.inputWidth[props.blockWidth]};

    label {
        ${label};
    }

    select {
        ${field};
        ${props => props.inputDisabled ? disabled : enabled};

        option {
            &:disabled {
                color: ${props => props.theme.wab.grey30};
            }
        }
    }
`;

export { DaSelectBase };