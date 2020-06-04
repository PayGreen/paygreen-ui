import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const DaTableBase = styled.div`
    ${responsiveSpaces('margin')};

    @media (${props => props.theme.query.max.lg}) {
        max-width: ${props => props.theme.blockWidth.md};
    }

    @media (${props => props.theme.query.min.lg}) {
        display: table;
        background-color: ${props => props.theme.wab.white10};
    }
`;

export { DaTableBase };
