import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const DaTableBase = styled.div`
    ${responsiveSpaces('margin')};
    color: ${props => props.theme.wab.grey60};

    @media (${props => props.theme.query.max.lg}) {
        max-width: ${props => props.theme.blockWidth[props.blockWidth]};
    }

    @media (${props => props.theme.query.min.lg}) {
        display: table;
    }
`;

export { DaTableBase };
