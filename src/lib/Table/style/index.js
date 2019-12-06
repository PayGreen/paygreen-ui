import styled from 'styled-components';
import { transparentize } from 'polished';
import { largeFirstColumnStyle } from './base';
import { TableRowBase } from '../../TableRow/style';
import { TableCellBase } from '../../TableCell/style';

const TableBase = styled.div`
    position: relative;
    overflow-x: auto;

    @media (${props => props.theme.query.max.sm}) {
        ${TableCellBase} {
            font-size: 0.85em;
        }
    }

    @media (${props => props.theme.query.max.md}) {
        i,
        img {
            display: none;
        }

        ${TableRowBase} {
            &:first-of-type {
                ${TableCellBase} {
                    &:not(:first-of-type) {
                        vertical-align: bottom;

                        .content {
                            justify-content: flex-end;
                        }
                    }
                }
            }
        }
    }

    .table {
        display: table;
        width: 100%;
    }

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