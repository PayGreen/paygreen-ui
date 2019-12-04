import styled from 'styled-components';
import { headerStyle } from './base';

const HeaderBase = styled.header`
    .nav-buttons {
        ${headerStyle};
    }

    @media (${props => props.theme.query.min.lg}) {
        ${headerStyle};

        .nav-buttons {
            display: none;
        }
    }
`;

export { HeaderBase };