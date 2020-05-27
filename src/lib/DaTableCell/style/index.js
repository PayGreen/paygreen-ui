import styled from 'styled-components';
import { borderRight, idStyle, mainStyle, notMainStyle } from './base';

const DaTableCellBase = styled.div`
    font-size: ${props => props.theme.font.size.xs};
    padding: ${props => props.theme.space.xs};

    @media (${props => props.theme.query.max.lg}) {
        ${props => props.isId ? idStyle : null};
        ${props => props.isMain ? mainStyle : notMainStyle};
    }
    
    @media (${props => props.theme.query.min.lg}) {
        display: table-cell;
        padding: ${props => props.theme.space.sm};
        text-align: center;

        ${props => props.isCheckbox ? null : borderRight};
    }

    .cell-label {
        @media (${props => props.theme.query.min.lg}) {
            display: none;
        }
    }

    .cell-content {
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export { DaTableCellBase };
