import styled from 'styled-components';
import { errorStyle } from './base';
import {MessageBase} from '../../Message/style'

const FormControlBase = styled.div`
    ${MessageBase} {
        display: none;
    }

    ${props => (props.isError ? errorStyle : null)};
`;

export { FormControlBase };
