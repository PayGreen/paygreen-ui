import { css } from 'styled-components';
import { MessageBase } from '../../Message/style';

const errorStyle = css`
    select, input {
        border-color: ${props => props.theme.color.status.danger.main};
    }

    & > label, legend {
        color: ${props => props.theme.color.status.danger.main};
    }

    ${MessageBase} {
        display: grid;
    }
`;

export { errorStyle };
