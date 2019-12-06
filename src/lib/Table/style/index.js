import styled from 'styled-components';
import { transparentize } from 'polished';
import { largeFirstColumnStyle } from './base';
import { TableRowBase } from '../../TableRow/style';
import { TableCellBase } from '../../TableCell/style';

const TableBase = styled.div`
    display: table;
    width: 100%;

    strong {
        color: ${props => props.theme.color[props.colorTheme]['main']};
    }

    ${TableRowBase} {
        &:first-of-type {
            ${TableCellBase} {
                border-bottom-color: ${props => transparentize(0.5, props.theme.color[props.colorTheme]['main'])};
            }
        }

        ${TableCellBase} {
            &:nth-child(even) {
                background-color: ${props => transparentize(0.98, props.theme.wab.black00)};
            }
        }
    }
    
    ${props => props.largeFirstColumn ? largeFirstColumnStyle : null};
`;

export { TableBase };