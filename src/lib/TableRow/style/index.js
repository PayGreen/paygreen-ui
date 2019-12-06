import styled from 'styled-components';
import { transparentize } from 'polished';
import { rowColor, mainRow } from './base';
import { TableCellBase } from '../../TableCell/style';

const TableRowBase = styled.div`
    display: table-row;

    ${TableCellBase} {
        border-bottom: solid ${props => props.theme.line} ${props => transparentize(0.92, props.theme.wab.black00)};
    }

    &:last-of-type {
        ${TableCellBase} {
            border-bottom: 0;
        }
    }

    ${props => props.colorTheme !== 'none' ? rowColor : null};
    ${props => props.isMain ? mainRow : null};
`;

export { TableRowBase };