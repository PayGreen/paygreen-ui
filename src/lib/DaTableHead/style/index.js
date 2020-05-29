import styled from 'styled-components';
import { DaTableCellBase } from '../../DaTableCell/style';

const DaTableHeadBase = styled.div`
    @media (${props => props.theme.query.min.lg}) {
        display: table-header-group;
    }

    ${DaTableCellBase} {
        color: ${props => props.theme.wab.grey30};
        font-weight: ${props => props.theme.font.weight.bold};

        @media (${props => props.theme.query.min.lg}) {
            padding: ${props => props.theme.space.sm};
            padding-top: 0;
        }
    }
`;

export { DaTableHeadBase };