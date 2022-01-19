import styled from 'styled-components';
import { transparentize } from 'polished';
import { TableCellBase } from '../../TableCell/style';
import { TableRowBase } from '../../TableRow/style';
import {
    largeFirstColumnStyle,
    overflowEmphasisStyle,
    backgroundStyle,
} from './base';

const TableBase = styled.div`
    position: relative;
    overflow-x: auto;
    ${props => (props.hasBackground ? backgroundStyle : null)};

    .table {
        display: table;
        width: 100%;
    }

    ${TableRowBase} {
        &:first-of-type {
            ${TableCellBase} {
                border-bottom-color: ${props =>
                    transparentize(
                        0.5,
                        props.theme.color[props.colorTheme].main,
                    )};
            }
        }
    }

    strong {
        color: ${props => props.theme.color[props.colorTheme].main};
    }

    ${props => (props.hasLargeFirstColumn ? largeFirstColumnStyle : null)};
    ${props => (props.hasOverflowEmphasis ? overflowEmphasisStyle : null)};
`;

export { TableBase };
