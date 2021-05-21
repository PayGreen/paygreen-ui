import styled from 'styled-components';
import {
    loadingStyle,
    borderRight,
    checkboxStyle,
    idStyle,
    mainStyle,
    notMainStyle,
} from './base';

const DaTableCellBase = styled.div`
    color: ${props => props.theme.wab.grey60};
    font-size: ${props => props.theme.font.size.xs};
    padding: ${props => props.theme.space.xs};
    ${props => (props.isCheckbox ? checkboxStyle : borderRight)};
    ${props => (props.isLoading && !props.isCheckbox ? loadingStyle : null)};

    .cell-label {
        @media ${props => props.theme.screen.min.lg} {
            display: none;
        }
    
    }

    .cell-content {
        display: flex;
        align-items: center;
        min-height: ${props => props.theme.table.cell.sm};
        min-width: ${props => props.theme.table.cell.sm};

        @media ${props => props.theme.screen.min.lg} {
            min-height: ${props => props.theme.table.cell.lg};
            min-width: ${props => props.theme.table.cell.lg};
        }
    }

    @media ${props => props.theme.screen.max.lg} {
        ${props => (props.isId ? idStyle : null)};
        ${props => (props.isMain ? mainStyle : notMainStyle)};
    }

    @media ${props => props.theme.screen.min.lg} {
        display: table-cell;
        vertical-align: middle;
        padding: ${props => props.theme.space.md};
    }
`;

export { DaTableCellBase };
