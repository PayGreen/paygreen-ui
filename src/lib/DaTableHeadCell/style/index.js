import styled from 'styled-components';
import { borderRight } from '../../DaTableCell/style/base';

const DaTableHeadCellBase = styled.div`
    padding: ${props => props.theme.space.xs};
    color: ${props => props.theme.wab.grey30};
    font-size: ${props => props.theme.font.size.xs};
    font-weight: ${props => props.theme.font.weight.bold};

    @media (${props => props.theme.query.min.lg}) {
        display: table-cell;
        vertical-align: middle;
        padding: ${props => props.theme.space.sm};
        padding-top: 0;

        ${props => props.isCheckbox ? null : borderRight};
    }
`;

export { DaTableHeadCellBase };
