import styled from 'styled-components';
import { transparentize } from 'polished';
import {
    largeFirstColumnStyle,
    backgroundStyle
} from './base';
import { TableCellBase } from '../../TableCell/style';
import { TableRowBase } from '../../TableRow/style';

const TableBase = styled.div`
    position: relative;
    overflow-x: auto;
    ${props => props.withBackground ? backgroundStyle : null};

    .table {
        display: table;
        width: 100%;
    }

    ${TableRowBase} {
        &:first-of-type {
            ${TableCellBase} {
                border-bottom-color: ${props => transparentize(0.5, props.theme.color[props.colorTheme].main)};
            }
        }
    }

    strong {
        color: ${props => props.theme.color[props.colorTheme].main};
    }
    
    ${props => props.largeFirstColumn ? largeFirstColumnStyle : null};
`;

export { TableBase };